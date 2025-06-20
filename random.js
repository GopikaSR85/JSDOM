let randomVal=Math.random();
console.log(randomVal);
let computer;
if(randomVal >= 0 && randomVal < 1 / 3){
    computer="ROCK";
}else if(randomVal >= 1 / 3 && randomVal < 2 / 3){
    computer="PAPER";
}else{
    computer="SCISSORS";
}
console.log(computer);
