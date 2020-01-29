// random string - symbol

let resoltSymbol = "";
let randomNumber = "";
let symbol = "";
for (let i = 65; i <= 120; i++) {
    symbol += String.fromCharCode(i);
}
let randomString = "";
for (let j = 0; j <= 24; j++) {
    resoltSymbol = symbol.charAt(Math.floor(Math.random() * symbol.length));
    if (resoltSymbol === "E" || resoltSymbol === "e" || resoltSymbol === "w" || resoltSymbol === "W") {
        break;
        console.log(resoltSymbol);
    } else { randomString += resoltSymbol }
}
console.log(randomString);
randomNumber = Math.floor(Math.random() * (randomString.length + 1));
console.log(`Symbol at ${randomNumber} Symbol is ${randomString.charAt(randomNumber)}`);
if (randomString.length < 5) {
    console.log(randomString.repeat(4));
}
else {
    console.log(randomString.substring(4));
}



// // //factorial

// // option1

// let fact = 1;
// for (let i = 1; i <= 12; i++) {
//     fact *= i;
// }
// console.log(fact)

// // option2

// let fact = 1,
//     i = 1;
// do {
//     fact *= i;
//     i++;
// } while (i <= 12);

// console.log(fact)


// // //spruse

// //for
// let myStr = "",
//     symbol = "#";

// for (let i = 0; i <= 4; i++) {
//     myStr += symbol;
//     console.log(myStr)
// }
// // while

// let myStr = " ",
//     symbol = "#",
//     number = 5;
// while (number) {
//     number--;
//     if (!number) console.log(symbol.repeat(5));
//     else console.log(myStr.repeat(number - 1), symbol.repeat(5 - number));
// }
