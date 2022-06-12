const fs = require("fs");

const f1path = "../callback_prac/f1.txt";
const f2path = "../callback_prac/f2.txt";
const f3path = "../callback_prac/f3.txt";

console.log("before");
//code to read files parallely
fs.readFile(f1path,cb1);
fs.readFile(f2path,cb2);
fs.readFile(f3path,cb3);

function cb1(err,data){
  if(err)
    console.log(err);
  else
    console.log("file 1 "+data);

}
function cb2(err,data){
  if(err)
    console.log(err);
  else
    console.log("file 2 "+data);
}
function cb3(err,data){
  if(err)
    console.log(err);
  else
    console.log("file 3 "+data);
}

console.log("after");
for(let i=1;i<=10;i++){
  console.log("Number is ",i);
}
