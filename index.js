const Cookies = require('js-cookie')

const input = prompt("Username?");

Cookies.set('username', input);

let guess = Number(prompt('Guess'))

let points = 0
 let x = 2

const checkGuess = () => {
  const range =  Math.floor(Math.random() * x) + 1;
  if (guess === range) {
    x++
    points++
    Cookies.set('points', points)
    console.log(`Correct guess`)
    console.log(`Points: ${points}`)
   guess =  Number(prompt('Guess'))
    checkGuess()
  } else
    console.log('Wrong. Guess again.')
   guess =  Number(prompt('Guess'))
  checkGuess()
}

checkGuess();

