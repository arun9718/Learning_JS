// UI elements
const lockBtn = document.querySelector(".lock");
const unlockBtn = document.querySelector(".unlock");
const deleteBtn = document.querySelector(".delete");


//adding event listeners
lockBtn.addEventListener("click",lockHelper);
unlockBtn.addEventListener("click",unlockHelper);
//deleteBtn.addEventListener("click",deleteHelper);


let isLocked = false;
function lockHelper(){

    isLocked = true;
    lockBtn.classList.add("clicked");
    unlockBtn.classList.remove("clicked");
}
function unlockHelper(){
    isLocked = false;
    lockBtn.classList.remove("clicked");
    unlockBtn.classList.add("clicked");

}
