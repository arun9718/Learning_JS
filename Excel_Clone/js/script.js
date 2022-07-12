let topRow = document.querySelector(".top_row");
let leftCol = document.querySelector(".left_col");
let grid = document.querySelector(".grid");


//left column
for(let i=1;i<=100;i++){
  let div = document.createElement("div");
  div.setAttribute("class","cell");
  div.textContent = i;
  leftCol.appendChild(div);
}


//top row
for(let i=1;i<=26;i++){
  let div = document.createElement("div");
  div.setAttribute("class","cell");
  div.textContent = String.fromCharCode(i+64);
  topRow.appendChild(div);
}

//generate grid
for(let i=1;i<=100;i++){
  let row = document.createElement("div");
  row.setAttribute("class","row");
  for(let j=1;j<=26;j++){
    let cell = document.createElement("div");
    cell.setAttribute("class","cell");
    cell.setAttribute("rid",i);
    cell.setAttribute("cid",j);
    row.appendChild(cell);
    console.log(i,j);
  }
  grid.appendChild(row);

}
