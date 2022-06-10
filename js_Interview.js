let fs = require('fs');
let path = require('path');


//some global variables in the path module
console.log("filename",__filename);//path the current file
console.log("dirname",__dirname);//path the current directory (Absolute Path)
console.log(process.cwd());//same as above

console.log(path.extname(__filename));
console.log(path.basename(__filename));

//Execution Context
//global and this

//whenver a  js code is executed u will get a global variable and this variables
console.log("global\n",global);
console.log("this\n",this);

//the code that is not inside any function falls in the global area
//it is in the default execution context 
