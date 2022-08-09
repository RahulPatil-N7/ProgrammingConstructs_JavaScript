let head = 0;
let tail = 0;
let i;
while(head < 11 && tail < 11){
	let coin=Math.floor(Math.random() * 2);
	console.log(coin);
	if(coin == 1){
    	console.log("It is a Head");
    	head++;
	}else{
    	console.log("It is a Tail");
    	tail++;
	}
}
console.log("Head Count :"+ head);
console.log("Tail count :"+ tail);
if (head == 11) 
	console.log("Head wins.");
else
	console.log("Tail wins.");
