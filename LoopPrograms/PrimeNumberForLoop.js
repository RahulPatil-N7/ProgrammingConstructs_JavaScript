const prompts = require("prompt-sync")();
let number = prompts("Enter a number : ");
number = parseInt(number);
let count=0;
    for(let i =0 ; i< number/2 ; i++){
    if (number%2==0) { 
        count++;
    }
    }
    if(count==0){
        console.log(number+" is a prime number.");
    }else{
        console.log(number +" is not a prime number.");
    }
