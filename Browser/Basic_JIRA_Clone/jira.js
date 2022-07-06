const colors = document.querySelectorAll(".color");
const main = document.querySelector(".main");
const addBtn = document.querySelector(".add");
const color = ["pink","blue","green","black"];
/*for(let i=0;i<colors.length;i++){
  colors[i].addEventListener("click",changeColor);
  function changeColor(e){
    let elem = e.currentTarget;
    let classes = elem.classList;
    let color = classes[1];
    main.style.backgroundColor=color;
    console.log(elem);


  }
}*/

addBtn.addEventListener("click",function () {
    // create a ticket
    if(isLocked == true){
      alert("First Unlock!!!");
      return;
    }
    addBtn.classList.add("clicked");
    deleteBtn.classList.remove("clicked");
    window.setTimeout("changeBackgdColor()",100);
    handleCreation();
});
function changeBackgdColor(){
  addBtn.classList.remove("clicked");
}
function handleCreation() {
    // 2. main -> ticket add
    isDelete = false;
    let id = uuidv4();
    // logic creating a box -> it will exist
    createModal(id);
}
function createModal(id) {
    let cColor = "black";
    let modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    modal.innerHTML = `
            <textarea class="contentarea"
            placeholder="Enter some Task"
            ></textarea>
            <div class="pallet_container">
                <div class="pallet_color pink"></div>
                <div class="pallet_color blue"></div>
                <div class="pallet_color green"></div>
                <div class="pallet_color black "></div>
            </div>`;
    main.appendChild(modal);
    // color choose
    let allColors = modal.querySelectorAll(".pallet_color");
    for (let i = 0; i < allColors.length; i++) {
        allColors[i].addEventListener("click", function (e) {
            cColor = allColors[i].classList[1];
            allColors[i].classList.add("clicked");
        })
    }
    // color code
    modal.addEventListener("keypress", function (e) {
        let key = e.key;
        if (key == "Enter") {
            // get text, color
            let textarea = modal.querySelector("textarea");
            let text = textarea.value;
            // destory;
            modal.remove();
            // return text color
            createTicket(id, cColor, text);
        }
    })
}

function createTicket(id,color,text){
  let ticket = document.createElement("div");
  ticket.setAttribute("class","ticket");
  ticket.innerHTML=`
  <div class="ticket-header ${color}">
  </div>
  <div class="ticket-content">
    <div class="rand-id">
      #${id}
    </div>
    <textarea name="name" class="text-area">${text}</textarea>
  </div>`
  main.appendChild(ticket);

  let headers = document.querySelectorAll(".ticket-header");
  console.log(headers);
  for(let i=0 ;i<headers.length;i++)
    headers[i].addEventListener("click",changeColor);

  let tickets = document.querySelectorAll(".ticket");
  for(let i=0;i<tickets.length;i++){
    tickets[i].addEventListener("click",deleteTicket);
  }


}
function deleteTicket(e){
  if(isDelete == true && isLocked == false){
    e.currentTarget.remove();
  }
}
function changeColor(e){
  if(isLocked == true){
    alert("First Unlock!!!");
    return;
  }

  let h = e.currentTarget;
  console.log(h);
  let classes = h.classList;
  let curr_color = classes[1];

  let currIdx=0;
  for(let i=0;i<color.length;i++){
    if(curr_color==color[i])
    {
      currIdx=i;
      break;
    }
  }

  let nextIdx=(currIdx+1)%color.length;
  let nextColor = color[nextIdx];

  classes.remove(curr_color);
  classes.add(nextColor);


}

const colorBoxes =  document.querySelectorAll(".color-boxes");
for(let i =0 ;i<colorBoxes.length;i++){
  colorBoxes[i].addEventListener("click",filterTicket);
}

function filterTicket(e){
  if(isLocked==false){
    alert("First Lock app !!");
    return;
  }
  let ele = e.currentTarget;
  let clickedColor = ele.children[0].classList[1];
  let secondClass = ele.classList[1];
  if(secondClass=="clicked"){
    ele.classList.remove("clicked");
  }
  else{
    for(let i=0;i<colorBoxes.length;i++)
      colorBoxes[i].classList.remove("clicked");
    ele.classList.add("clicked");
    showonlyMyColor(clickedColor);
  }
}
function showonlyMyColor(clickedColor){
  let tickets = document.querySelectorAll(".ticket");
  for(let i=0;i<tickets.length;i++){
    let header = tickets[i].children[0];
    let headerColor = header.classList[1];
    if(headerColor == clickedColor){
      tickets[i].style.display = "block";
    }
    else
      tickets[i].style.display = "none";
  }
}
