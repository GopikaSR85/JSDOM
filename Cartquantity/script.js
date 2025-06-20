//console.log("HEllo");
//cartQuantity=0;
let cq= Number(localStorage.getItem("cartQuantity"));
// if(!cartQuantity) {
//     localStorage.setItem("cartQuantity",0);
//     cartQuantity=0;
// }
   cq = cq|| 0;

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