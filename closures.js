function outer(){
    let count=7;
    return function inner(){
        count++;
        console.log(`Count: ${count}`);

    }
}
const counter=outer();
counter();
counter();