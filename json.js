const jsObj={
    name:"Gopika hlo",
    age:19,
    display:function(){
        console.log("Hello");
    },
}
let jsonObj={
    "name":"Gopika hlo",
    "age":19,
};
let stringJS=JSON.stringify(jsObj);
console.log(stringJS);
console.log(typeof stringJS);
let normalJS=JSON.parse(jsObj);
console.log(normalJS);
console.log(typeof normalJS);