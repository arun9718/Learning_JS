let colors = document.querySelectorAll(".color");
let main = document.querySelector(".main");
for(let i=0;i<colors.length;i++){
  colors[i].addEventListener("click",changeColor);
  function changeColor(e){
    let elem = e.currentTarget;
    let classes = elem.classList;
    let color = classes[1];
    main.style.backgroundColor =color;
    console.log(elem);


  }
}
