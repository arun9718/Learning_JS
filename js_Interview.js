let fs = require('fs');
let path = require('path');


//some global variables in the path module
console.log("filename",__filename);//path the current file
console.log("dirname",__dirname);//path the current directory (Absolute Path)
console.log(process.cwd());//same as above

console.log(path.extname(__filename));
console.log(path.basename(__filename));
