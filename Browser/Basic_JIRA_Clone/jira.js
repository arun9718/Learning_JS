const colors = document.querySelectorAll(".color");
const main = document.querySelector(".main");
const addBtn = document.querySelector(".add");
for(let i=0;i<colors.length;i++){
  colors[i].addEventListener("click",changeColor);
  function changeColor(e){
    let elem = e.currentTarget;
    let classes = elem.classList;
    let color = classes[1];
    main.style.backgroundColor=color;
    console.log(elem);


  }
}

addBtn.addEventListener("click",createTicket);
function createTicket(){
  let ticket = document.createElement("div");
  ticket.setAttribute("class","ticket");
  ticket.innerHTML=`
  <div class="ticket-header">
  </div>
  <div class="ticket-content">
    <div class="rand-id">
      #QES4FGG
    </div>
    <textarea name="name" class="text-area"></textarea>
  </div>`
  main.appendChild(ticket);
}
