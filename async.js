// function hello(){
//     console.log("hello");
// }
// setTimeout(()=>console.log("hello guys timeout"),2000);
// console.log("hello js");
// let count = 0;
// const timer = setInterval(() => {
//     count++;
//     console.log("Hello again");
//     if (count > 5) {
//         clearInterval(timer);
//     }
// }, 2000);

// console.log("Hello guys");
// function doTask(taskName, callback) {
//     console.log(`Starting ${taskName}....`);
//     setTimeout(() => {
//         console.log(`${taskName} completed!`);
//         callback();
//     }, 2000);
// }
// doTask("Reading Book", () => {
//     console.log("Now reading chapter 10");
// });
function orderFunction() {
    let order = new Promise((resolve, reject) => {
        let isWorking = false;
        setTimeout(() => {
            if (isWorking) {
                resolve("order ready");
            } else {
                reject("order delay");
            }
        }, 3000);
    });
    return order;
}
async function orderfood() { 
    try{
    const orderStatus = await orderFunction();
    console.log(orderStatus);
    }catch(error){
        console.log(`Error: ${error}`);
    }
}
orderfood();
// try{
//     // let result=10/0;
//     // console.log("result");
//     let name=undefined;
// }catch(error){
//     console.log(`Error:${error}`);
// }finally{
//     console.log("Task completed");
// }
// order.then((message) => console.log("Success: ", message))
//     .catch((error) => {
//         console.log("Error:", error);
//     });