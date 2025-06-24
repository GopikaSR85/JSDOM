//console.log("HEllo");
//cartQuantity=0;
let cq= Number(localStorage.getItem("cartQuantity"));
// if(!cartQuantity) {
//     localStorage.setItem("cartQuantity",0);
//     cartQuantity=0;
// }
   cq = cq|| 0;
   const displayButton=document.getElementById("display");
   const plusOneButton=document.getElementById("plusone");
   const plusTwoButton=document.getElementById("plustwo");
   const plusThreeButton=document.getElementById("plusthree");
   const resetButton=document.getElementById("resetbutton");

   displayButton.addEventListener("click",() => {
    displayquantity();
   });
    plusOneButton.addEventListener("click",() => {
    updatequantity(1);
    displayquantity();
   });
    plusTwoButton.addEventListener("click",() => {
    updatequantity(2);
    displayquantity();
   });
    plusThreeButton.addEventListener("click",() => {
    updatequantity(3);
    displayquantity();
   });
   resetButton.addEventListener("click",() => {
    resetcart();
    displayquantity();
   });

function updatequantity(value) {
    cq=cq+value;
    localStorage.setItem("cartQuantity",cq);
}
function displayquantity() {
    console.log(`cart: ${cq}`);
}
function resetcart() {
    cq=0;
    localStorage.setItem("cartQuantity",cq);
    console.log('The cart has been reset.');
}

   

