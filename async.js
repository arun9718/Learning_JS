

// function fn(val){
//   if(val==0)
//     console.log("0");
//   else return function f1(val){
//     if(val==0)
//     console.log("1");
//     return function f2(val){
//       if(val==0)
//       console.log("2");
//       return function f3(val){
//         if(val==0)
//         console.log("3");
//         return function f4(val){
//           if(val==0)
//           console.log("4");
//           return function f5(val){
//             if(val==0)
//             console.log("5");
//           }
//         }
//       }
//     }
//   }
// }

const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter}
})();




add()()()(0);//return 3
add()()()()(0);//return 4
