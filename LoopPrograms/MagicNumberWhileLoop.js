const prompts = require("prompt-sync")();
console.log("Think of a number between 1 - 100\n");
let isMagicNum = false;
let choice;
let upperLimit = 100;
let lowerLimit = 1;
while(!isMagicNum){
    choice = parseInt(prompts("Enter '1' if the number is less than "+Math.floor((lowerLimit+upperLimit)/2)+"\n or '2' if number is greater than "
    +Math.floor((lowerLimit+upperLimit)/2)+"\n or '0' if number is equal to "+Math.floor((lowerLimit+upperLimit)/2)+" : "));
    switch(choice){
        case 1 : 
            upperLimit = Math.floor((lowerLimit+upperLimit)/2);
            break;
        case 2 :
            lowerLimit = Math.floor((lowerLimit+upperLimit)/2);
            break;
        default : 
            console.log("Your Magic number is :"+Math.floor((lowerLimit+upperLimit)/2))
            isMagicNum = true;
    }
}
