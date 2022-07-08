let topRow = document.querySelector(".top_row");
let leftCol = document.querySelector(".left_col");


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
