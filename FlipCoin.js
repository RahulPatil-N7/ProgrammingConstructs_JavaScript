let head = 0;
let tail = 0;
let noOfFlip = 5;
let i;
for ( i = 0; i < noOfFlip; i++) {
let coin=Math.floor(Math.random() * 2);
console.log(coin);
if(coin == 1){
    console.log("It's a Head");
    head++;
}else{
    console.log("It's a Tail");
    tail++;
}
}
console.log("Head Count:")
console.log(head)
console.log("Tail Count:")
console.log(tail)

