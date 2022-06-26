//select elements
let addTask=document.querySelector("button");
let input = document.querySelector("input");
let ul= document.querySelector("ul");

addTask.addEventListener("click",fn);

function fn(){
  let task=input.value;
  if(task){
    let div=document.createElement("div");
    let li= document.createElement("li");
    let del = document.createElement("button");
    div.style.display="flex";
    li.style.flex="1";
    li.style.marginRight="20px";
    li.textContent=task;
    del.textContent="Delete";
    div.appendChild(li);
    div.appendChild(del);
    ul.appendChild(div);
    input.value="";

    del.addEventListener("click",fn1);
    function fn1(){
      div.remove();
    }
  }
}
