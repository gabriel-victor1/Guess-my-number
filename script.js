'use strict';
/*
document.querySelector('.message').textContent = '🎉 correct number ';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 15;

document.querySelector('.score').textContent = 150;

document.querySelector('.guess').value = 15;

console.log(document.querySelector('.guess').value);

*/

let score = 20;
let highscore = document.querySelector('.highscore').textContent = 0;
//
let serectNumber = Math.trunc(Math.random() * 20) + 1;
console.log(serectNumber);
document.querySelector('.number').textContent = "?";

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);
  if (guess === serectNumber) {
    document.querySelector('.message').textContent = '🎉 correct number ';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = serectNumber;
  } else if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number ';
  }
  else if(guess  > serectNumber){
    if (score > 1) {
    
      document.querySelector('.message').textContent = '📈📈Too high! ';
      document.querySelector('body').style.backgroundColor = '#f21';
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      document.querySelector('.message').textContent = '💥💥You lose! ';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = serectNumber;
    document.querySelector(".check").style.display = "none";
    }
  }
  else if(guess  < serectNumber){
    if (score > 1) {
  
    document.querySelector('.message').textContent = '📉📉Too low! ';
    document.querySelector('body').style.backgroundColor = '#21f';
    score--;
    document.querySelector('.score').textContent = score;
  }
  else {
    document.querySelector('.message').textContent = '💥💥You lose! ';
    document.querySelector('.score').textContent = 0;
    document.querySelector('.number').textContent = serectNumber;
    document.querySelector(".check").style.display = "none";
  }
    
  }

  if( guess === serectNumber && score > highscore){
    document.querySelector('.highscore').textContent = score;
  }
  
});


document.querySelector(".again").addEventListener("click", function () {
    document.querySelector(".check").style.display = "flex";
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value = "";
  serectNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector('.message').textContent = 'Start guessing...';
  
})

// i stop at video 7,,   05:53


const name = prompt("                     What is your name ?");
const whatToGuess = document.querySelector(".between").textContent;

document.querySelector(".nameOfPlayer").textContent = `Mr. / Mrs. ${name} guess a number  ${whatToGuess}`;
