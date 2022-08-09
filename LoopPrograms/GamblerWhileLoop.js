let startBet=100;
const EVERY_GAME_BET=1;
let condition=true;
let won=0
let loose =0
while(condition){
    let game=Math.floor(Math.random()*2);
    if(game==1){
        console.log("Win the game");
        startBet+=EVERY_GAME_BET;
        won++;
    }else{
        console.log("Loose the game");
        startBet-=EVERY_GAME_BET;
        loose++;
    }
    if(startBet==200){
        console.log("200 Reached so,stop the bet");
        condition=false;
    }
    if(startBet==0){
        console.log("Loose total Money so, stop the bet");
        condition=false;
    }
}
let total=won+loose;
console.log("Number Of Games Play is :"+total)
console.log("Number of times Won :"+won);
console.log("Number of times Losse :"+loose);
