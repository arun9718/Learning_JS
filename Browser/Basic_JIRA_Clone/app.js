// UI elements
const lockBtn = document.querySelector(".lock");
const unlockBtn = document.querySelector(".unlock");
const deleteBtn = document.querySelector(".delete");


//adding event listeners
lockBtn.addEventListener("click",lockHelper);
unlockBtn.addEventListener("click",unlockHelper);
deleteBtn.addEventListener("click",deleteHelper);


let isLocked = false;
let isDelete = false;

function lockHelper(){
    isLocked = true;
    lockBtn.classList.add("clicked");
    unlockBtn.classList.remove("clicked");
    disableEdit();
}
function unlockHelper(){
    isLocked = false;
    lockBtn.classList.remove("clicked");
    unlockBtn.classList.add("clicked");
    showAll();
    enableEdit();

}
function deleteHelper(){
  if(isDelete == false)
  {  isDelete = true;
    deleteBtn.classList.add("clicked");
  }
  else{
    isDelete = false;
    deleteBtn.classList.remove("clicked");
  }

}
function disableEdit(){
  let allTickets= document.querySelectorAll(".ticket");
  for(let i=0;i<allTickets.length;i++){
    let textarea = allTickets[i].querySelector("textarea");
    textarea.setAttribute("readonly","");
  }
}
function enableEdit(){
  let allTickets= document.querySelectorAll(".ticket");
  for(let i=0;i<allTickets.length;i++){
    let textarea = allTickets[i].querySelector("textarea");
    textarea.removeAttribute("readonly","");
  }
}
function showAll() {
    let allTickets = document.querySelectorAll(".ticket");
    for (let i = 0; i < allTickets.length; i++) {
        allTickets[i].style.display = "block";
    }
    for (let i = 0; i < colorBoxes.length; i++) {
        // if -> elem has class -> remove
        // doesnot -> leave
        colorBoxes[i].classList.remove("clicked");
    }
}
