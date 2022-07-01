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
    createTicket();
});
function createTicket(){
  let id = uuidv4();
  let ticket = document.createElement("div");
  ticket.setAttribute("class","ticket");
  ticket.innerHTML=`
  <div class="ticket-header black">
  </div>
  <div class="ticket-content">
    <div class="rand-id">
      #${id}
    </div>
    <textarea name="name" class="text-area"></textarea>
  </div>`
  main.appendChild(ticket);

  let header = document.querySelector(".ticket-header");
  header.addEventListener("click",changeColor);


}
function changeColor(e){
  let header = e.currentTarget;
  let classes = header.classList;
  let curr_color = classes[1];

  let currIdx=0;
  for(let i=0;i,color.length;i++){
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
