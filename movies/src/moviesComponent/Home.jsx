import React from 'react'


import "./Header.css"
import "./Banner.css"
import "./movieList.css"
import "./Pagination.css"
import "./SearchBox.css"

function Home() {
  let [pageNo,setPageNumber]=React.useState(1);
  function decreasePageNumber(){
    if(pageNo === 1)
      return;
    else{
      setPageNumber(function(){
        return (pageNo - 1);
      });
    }
  }
    function increasePageNumber(){
      setPageNumber(function(){
        return (pageNo + 1);
      });
    }
  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <SearchBox></SearchBox>
    <MoviesList pageNo={pageNo}></MoviesList>
    <div className="pagination">
        <div className="pagination_btn" onClick={decreasePageNumber}>Previous</div>
        <div className="pagination_btn">{pageNo}</div>
        <div className="pagination_btn" onClick={increasePageNumber}>Next</div>
    </div>
    </>

  )
}

export default Home;
//Header
function Header(){
  return(
    <div className="flex">
    <img src="https://img.icons8.com/external-bearicons-blue-bearicons/50/000000/external-movie-call-to-action-bearicons-blue-bearicons.png">
            </img>
    <h1>Movies</h1>
    <h1>Favourites</h1>
    </div>

  )
}
//Banner
function Banner(){
  let [firstMovie, setFirstMovie] = React.useState("");
    React.useEffect(()=>{
    async function fetchData() {
        // it is used to make request
        let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=0a2cd198c8579b65b7e564f10982f80c");
        // response -> you will get in buffer -> convert it into json
        let data = await response.json();
        console.log("data", data);
        let movies = data.results;
        // console.log("movies", movies)
        setFirstMovie(movies[0]);
        
    }
    fetchData();
  }, []);
    return (
        <>
            {firstMovie === "" ?
                <h2>Movies are yet to come</h2 > : <>
                    <h2>{firstMovie.original_title}</h2>
                    <img src={"https://image.tmdb.org/t/p/original" + firstMovie.backdrop_path} className="banner_img"></img>

                </>

            }
        </>
    )
}

function SearchBox(){
  return(
    <>
      <div className="searchbox">
        <input type="text" />
        <button>Search</button>
      </div>
    </>
  )
}
//MoviesList
function MoviesList(props){
  let [movies, setMovie] = React.useState("");
    React.useEffect(()=>{
      async function fetchData() {
        // it is used to make request
        //https://api.themoviedb.org/3/trending/movie/week?api_key=0a2cd198c8579b65b7e564f10982f80c&page=" + props.pageNo
        let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=0a2cd198c8579b65b7e564f10982f80c&page=" + props.pageNo);
        // response -> you will get in buffer -> convert it into json
        let data = await response.json();
        console.log("data", data);
        let movies = data.results;
        // console.log("movies", movies)
        setMovie(movies);
    }
    fetchData();
  }, [props.pageNo]);
  return (
      <>
        {
          movies === ""? <h2>Loading Movies ...</h2> :
          <div className="trending_box">
            {  movies.map( function (movieObj,keyIdx){
                return (
                  <div key={keyIdx} className="poster_box">
                  <h2>{movieObj.original_title}</h2>
                  <img src={"https://image.tmdb.org/t/p/w500/" + movieObj.poster_path} className="poster_img"></img>
                  </div>
                )

              })}
          </div>
        }
      </>
  )
}
//Pagination
