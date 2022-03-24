const { cannotHaveAUsernamePasswordPort } = require("whatwg-url");

let backpack = [];

//use .push to put things into backpack
backpack.push('pokeball')
backpack.push('potion')
backpack.push('pokedollars')

// backpack.shift() -- will remove 1st item in array, in this case it removes 'pokeball'
backpack.splice(0,1)

let stone = "water stone"
backpack.push(stone)

//.pop removes the last item from the array
backpack.pop()

// console.log(backpack)

//console.log(backpack.lenth) will output 2 
// console.log(backpack.length)

backpack.push('great ball', 'antidote', 'revive')

let satchel = backpack.splice(3, 2)

// for (let i = 0; i < backpack.length; i++) {
//     console.log(`This is the item at the index of ${i}:`,backpack[i])
// }

//want to see first two items : potion and pokedollars
// for (let i = 0; i < 2; i++) {
//     console.log(backpack[i])
// }

//  if (backpack.lenght > 2) {
//      for(let i = 0; i < 2; i++) {
//          console.log(backpack[i])}
//      } else {
//         for (let i = 0; i < backpack.length; i++) {
//             console.log(`This is the item at the index of ${i}:`,backpack[i])
//         }
//      }
 


// console.log(backpack)
// console.log(satchel)
//--------------------------------------------------------

// let guessMe = 54

// while (guessMe < 100) {
//     console.log('---------', guessMe)
//     if (guessMe % 4 === 0 || guessMe % 5 === 0) {
//         guessMe += 25
//         console.log('divisible by 4 or 5, added 25', guessMe)
//     } else if (guessMe % 3 === 0) {
//         guessMe -= 27
//         console.log('divisible by 3, subtracted 27', guessMe)
//     } else {
//         guessMe += 3
//         console.log('added 3', guessMe)
//     }
//     guessMe += 22
//     console.log('added 22', guessMe)
// }

// console.log('final value', guessMe)