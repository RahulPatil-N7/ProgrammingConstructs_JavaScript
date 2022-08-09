const prompts = require("prompt-sync")();
let number = prompts("Enter the number: ");
number = parseInt(number);
let factorial=1;
for(let i=1;i <= number; i++){
    factorial=factorial * i
}
console.log("Factorial Of "+number+" is :"+factorial);
