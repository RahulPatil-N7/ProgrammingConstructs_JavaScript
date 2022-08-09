const prompts = require("prompt-sync")();
let number = prompts("Enter the number: ");
number = parseInt(number);
let power=1;
let i =1;
while (power < 256 && i <= number ){
      	power= Math.pow(2,i);
     	console.log("2 PowerOf "+i +" is "+power);
	i++;
	}

