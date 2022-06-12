const Cookies = require('js-cookie')

const username = prompt("Username?");
console.log(`Hey ${username}`)

Cookies.set('username', username);

let points = 0

let range = 2

let guess = Number(prompt(`Guess the number between 1 and ${range} `))

const checkGuess = (range) => {
  
  const number = Math.floor(Math.random() * range) + 1;
  if (guess === number) {
    points++
    Cookies.set('points', points)
    console.log(`Correct guess`)
    console.log(`Points: ${points}`)
    range++
   guess =  Number(prompt(`Guess the number between 1 and ${range} `))
    
    checkGuess(range)
  } else
    console.log(`Wrong. The answer was ${number}. Guess again.`)
   guess =  Number(prompt(`Guess the number between 1 and ${range} `))
  checkGuess(range)
}

checkGuess(range);

