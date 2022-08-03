import React from 'react'


import "./Header.css"
import "./Banner.css"
import "./movieList.css"

function Home() {
  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <MoviesList></MoviesList>
    <Pagination></Pagination>
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
    React.useEffect(async function () {
        // it is used to make request
        let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=0a2cd198c8579b65b7e564f10982f80c");
        // response -> you will get in buffer -> convert it into json
        let data = await response.json();
        console.log("data", data);
        let movies = data.results;
        // console.log("movies", movies)
        setFirstMovie(movies[0]);
    }, []);
    return (
        <>
            {firstMovie == "" ?
                <h2>Movies are yet to come</h2 > : <>
                    <h2>{firstMovie.original_title}</h2>
                    <img src={"https://image.tmdb.org/t/p/original" + firstMovie.backdrop_path} className="banner_img"></img>
                </>

            }
        </>
    )
}
//MoviesList
function MoviesList(){
  let [movies, setMovie] = React.useState("");
    React.useEffect(async function () {
        // it is used to make request
        let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=0a2cd198c8579b65b7e564f10982f80c");
        // response -> you will get in buffer -> convert it into json
        let data = await response.json();
        console.log("data", data);
        let movies = data.results;
        // console.log("movies", movies)
        setMovie(movies);
    }, []);
  return (
      <>
        {
          movies == ""? <h2>Loading Movies ...</h2> :
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
function Pagination(){
  return (
    <h1>Pagination</h1>
  )
}
