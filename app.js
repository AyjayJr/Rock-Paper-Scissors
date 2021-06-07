const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const choices = ['Rock', 'Paper', 'Scissors'];
const reset = document.createElement('button');
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
      console.log(`Draw!! ${playerScore} to ${computerScore}`);
      updateScore();
   } else if (playerSelection == 'Rock' && computerSelection == 'Scissors' ||
              playerSelection == 'Paper' && computerSelection == 'Rock' ||
              playerSelection == 'Scissors' && computerSelection == 'Paper') {
      ++playerScore;
      console.log(`Player Wins!! ${playerScore} to ${computerScore}`);
      updateScore();
   } else {
      ++computerScore;
      console.log(`Computer Wins!! ${playerScore} to ${computerScore}`);
      updateScore();
   }
   isGameOver();
}

function isGameOver() {
   if (playerScore === 5 || computerScore === 5) {
      rock.classList.add('disabled');
      paper.classList.add('disabled');
      scissors.classList.add('disabled');
      document.querySelector('#btn-group').appendChild(reset);
   }
}

function resetGame() {
   playerScore = 0;
   computerScore = 0;
   updateScore();
   rock.classList.remove('disabled');
   paper.classList.remove('disabled');
   scissors.classList.remove('disabled');
   document.querySelector('#btn-group').removeChild(reset);
}

function updateScore() {
   document.querySelector('#player-score').innerText = playerScore; 
   document.querySelector('#computer-score').innerText = computerScore;
}
