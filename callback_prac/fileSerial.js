const fs = require("fs");

const f1path = "../callback_prac/f1.txt";
const f2path = "../callback_prac/f2.txt";
const f3path = "../callback_prac/f3.txt";

const outputpath = "../callback_prac/output.txt";

let output_text="";
fs.readFile(f1path,f1cb);

function f1cb(err,data){
    if(err)
      console.log(err);
    else{
      fs.readFile(f2path,f2cb);
      output_text+=data;
    }
}

function f2cb(err,data){
  if(err)
    console.log(err);
  else{

    fs.readFile(f3path,f3cb);
      output_text+=data;
  }
}

function f3cb(err,data){
  if(err)
    console.log(err);
  else{
    output_text+=data;
    fs.writeFile(outputpath,output_text,writecb);
  }
}

function writecb(err,data){
  console.log("output created");
}


console.log("after");
