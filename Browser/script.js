// document;

// *************************read*********************
// query selector only returns the first matching entry
let elem = document.querySelector(".next_h1");
console.log("line number 5", elem);
// array of element
let allh1s = document.querySelectorAll("h1");
console.log("line number 6", allh1s);

// content get
// input type of value -> where user set's the data
let inputElem = document.querySelector("input");
console.log("line number 15", inputElem.value);
// rest of html elems
let para = document.querySelector("p");
let text = para.textContent;
console.log("line number 19", text);

// get attributes
let anchorElem = document.querySelector("a");
let output = anchorElem.getAttribute("href");
console.log("line number 23", output)


//create p tag
let pelem=document.createElement("p");
//put content
pelem.textContent="Hello DOM";
pelem.style.backgroundColor = "lightgreen";

//copy pelem
let newelem=pelem.cloneNode(true);
newelem.textContent="Appemd Child";

//placing the elements in the DOM tree
let body= document.querySelector("body");
//place at last
body.appendChild(newelem);

//place at before of some elements
body.insertBefore(pelem,elem);
