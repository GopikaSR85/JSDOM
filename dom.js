const para =document.getElementById("msg");
console.log(para.innerText);
para.innerText="This is set via";
const hibut=document.querySelector(".js-button")
hibut.addEventListener("click",()=>{
    console.log("Hi");
});