// Code your solutions in this file

/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }
*/

/*

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

*/

/*

Assignment 1

const stringArray = ["Samwise", "Frodo", "Smeagull"];

let eventName = "graduation";

function writeCards(stringArray, eventName) {
    let newArray = [];
    for (let i = 0; i < stringArray.length; i++) {

        let msg = `Thank you, ${stringArray[i]}, for the wonderful ${eventName} gift!`
        newArray.push(msg);
    }
    return newArray;
}

*/

/*

Assignment 2

*/

function countDown(posInt) {
    let i = posInt;
    
    while (i>=0) {console.log(i);
    i--;
    }
    return posInt;
}

countDown(10);