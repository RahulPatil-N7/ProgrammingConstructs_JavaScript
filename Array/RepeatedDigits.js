let repeatedNumber = [];
const prompts = require("prompt-sync")();
let number = parseInt(prompts("Enter a number range : "));
function reverseOfNum(num) {
	let newNumber = 0;
    	for(let i = 0;i <= number;i++){
    		while (num != 0) {
        		let remainder = num % 10;
        		newNumber = newNumber * 10 + remainder;
        		num = Math.floor(num / 10);
    		}	
    	}return newNumber;
}
for (let i = 0; i <= number; i++) {
    if (reverseOfNum(i) === i && i > 9) {
        repeatedNumber.push(i)
    }
}
console.log(repeatedNumber);
