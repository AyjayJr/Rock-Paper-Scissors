const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const choices = ['Rock', 'Paper', 'Scissors'];
const reset = document.createElement('button');
const display = document.querySelector('#display');
reset.innerText = 'reset';

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

const computerPlay = () => (choices[Math.floor(Math.random() * 3)]);

rock.addEventListener('click', () => (playRound('Rock')));
paper.addEventListener('click', () => (playRound('Paper')));
scissors.addEventListener('click', () => (playRound('Scissors')));
reset.addEventListener('click', () => (resetGame()));

function playRound(playerSelection) {
   computerSelection = computerPlay();
   if (playerSelection === computerSelection) {
      display.innerText = `Draw!! ${playerSelection} to ${computerSelection}!`;
   } else if (playerSelection == 'Rock' && computerSelection == 'Scissors' ||
              playerSelection == 'Paper' && computerSelection == 'Rock' ||
              playerSelection == 'Scissors' && computerSelection == 'Paper') {
      ++playerScore;
      updateScore();
      display.innerText = `Player Wins!! ${playerSelection} beats ${computerSelection}!`;
   } else {
      ++computerScore;
      updateScore();
      display.innerText = `Computer Wins!! ${computerSelection} beats ${playerSelection}!`;
   }
   isGameOver();
}

function isGameOver() {
   if (playerScore === 5 || computerScore === 5) {
      rock.classList.add('disabled');
      paper.classList.add('disabled');
      scissors.classList.add('disabled');
      document.querySelector('.card-footer').appendChild(reset);
      if (playerScore > computerScore) {
         display.innerText = "YOU WIN!!";
      } else {
         display.innerText = "YOU LOST :(";
      }
   }
}

function resetGame() {
   playerScore = 0;
   computerScore = 0;
   updateScore();
   display.innerText = "";
   rock.classList.remove('disabled');
   paper.classList.remove('disabled');
   scissors.classList.remove('disabled');
   document.querySelector('.card-footer').removeChild(reset);
}

function updateScore() {
   document.querySelector('#player-score').innerText = playerScore; 
   document.querySelector('#computer-score').innerText = computerScore;
}
