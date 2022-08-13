let birthMonthMap = new Map();
let isReached = false;
console.log("Birth Month of 50 indiviuals :\n");
for (let i = 1; i < 13; i++) {
    birthMonthMap.set(i, 0)
}
function BirthMonth(birthMonth) {
    birthMonthMap.set(birthMonth, birthMonthMap.get(birthMonth) + 1);
}
let individual = 0;
while (individual < 50) {
    let birthMonth = Math.floor(Math.random() * 12) + 1;
    BirthMonth(birthMonth);
    individual++;
}
for (const [key, value] of birthMonthMap.entries()) {
    console.log("Month " + key + " has " + value + " Individuals");
}
