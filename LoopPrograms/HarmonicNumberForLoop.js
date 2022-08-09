const prompts = require("prompt-sync")();
let number = prompts("Enter a number : ");
number = parseInt(number);
let result=0;
for(let i = 1 ; i <= number;i++){
    result =result+(1 / i);
}
console.log("Harmonic Number :"+ result);
