console.log("Hello JS");

//Java is a statically typed language
//It needs variable and its type to declare a variable
//while in javascript we just need to declare a variable



let a;//default value is undefined

//We have funcitons in javascript
//Two types of functions ->unparameterized and parameterized
//return is not compulsory
//if nothing is returned then undefined is returned
//else the return value

//syntax
function fn(){
  console.log("Say Hello to funciton in JS");
  //return undefined
}

//parameterized
function fun1(a,b)
{
  console.log(a+" "+b);
  return "paramterized"
}

default_type=fn();
fun_type=fun1(10,20);

console.log(default_type);
console.log(fun_type);
