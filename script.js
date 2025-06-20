let newObj={
    name:"Gopika hi",
    display:function(){
        console.log("Hello");
    }
}
console.log("Hi")
console.time("Hello")
console.warn("Something wrong ")
console.error("its error")
console.table([{name:"Alice"},{name:"bob"}]);
console.time("loop");
for(let i=0;i<100000;i++){ }
console.timeEnd("loop");
const x=10;
const y=20;
const result=eval("x+y");
console.log(result);
"use strict";
let a=10;
b=20;