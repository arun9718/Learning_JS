

function fn(val){
  if(val==0)
    console.log("0");
  else return function f1(val){
    if(val==0)
    console.log("1");
    return function f2(val){
      if(val==0)
      console.log("2");
      return function f3(val){
        if(val==0)
        console.log("3");
        return function f4(val){
          if(val==0)
          console.log("4");
          return function f5(val){
            if(val==0)
            console.log("5");
          }
        }
      }
    }
  }
}

fn()()()(0);//return 3
fn()()()()(0);//return 4
