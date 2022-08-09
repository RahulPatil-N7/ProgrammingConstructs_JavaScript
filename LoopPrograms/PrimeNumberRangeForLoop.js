const prompts = require("prompt-sync")();
let lower = prompts("Enter lower range : ");
number = parseInt(lower);
let upper = prompts("Enter upper range : ");
number = parseInt(upper);
console.log("PrimeNumbers between " +lower + " to " + upper +":");
for (let number = lower; number < upper; number++){
    let count =0;
    let temp = number
    for(let i=1; i<=temp; i++){
        if(temp % i == 0){
            count++;
        }
    }
    if(count == 2){
        console.log(number+" ");
    }
}
