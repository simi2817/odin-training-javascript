//to generate random computer's choice
const getComputerChoice = () => {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

//to compare player's and computer's choice and generates result
const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toUpperCase();
    let result = '';
    switch(playerSelection) {
        case 'ROCK':
            result = computerSelection === 'PAPER' ? 'You lose! Paper beats Rock!'      :        computerSelection === 'SCISSORS' ? 'You won! Rock beats Scissors!'
            :        'Tie!';
            break;
        case 'PAPER':
            result = computerSelection === 'SCISSORS' ? 'You lose! Scissors beats Paper!'
            :        computerSelection === 'ROCK' ? 'You won! Paper beats Rock!'
            :        'Tie!';
            break;
        case 'SCISSORS':
            result = computerSelection === 'PAPER' ? 'You won! Scissors beats Paper!'
            :        computerSelection === 'ROCK' ? 'You lose! Rock beats Scissors!'
            :        'Tie!';
            break;
    }
    return result;
}

let playerPoints = 0;
let computerPoints = 0;


const container = document.querySelector('#container');
container.classList.add('container');
container.style.textAlign = 'center';


const whoWon = document.createElement('div');
whoWon.classList.add('whoWon');
whoWon.style.display = "inline";
whoWon.style.textAlign = 'center';
container.append(whoWon);

const humanScore = document.querySelector('#humanScore');
const computerScore = document.querySelector('#computerScore');

//to update the computer or player points
const pointsUpdate = (inputPlayer) => {
   return inputPlayer === 'computer' ? computerPoints++ : playerPoints++;
}

//game() is invoked when the player's choice is clicked
const game = (e) => {

    whoWon.style.margin = "auto";
    whoWon.style.padding = '10px';
    whoWon.style.backgroundColor = 'white';
    whoWon.style.color = 'black';
    whoWon.style.boxShadow = '0 0 10px';

    if(playerPoints < 5 && computerPoints < 5) {
        const playerSelection = e.target.id.toUpperCase();
        const computerSelection = getComputerChoice();

        computerRock.style.border = null;
        computerPaper.style.border = null;
        computerScissors.style.border = null;

        switch(computerSelection) {
            case 'ROCK': 
            computerRock.style.border = '5px solid #b1da0b';
            computerRock.style.boxShadow = '0 0 10px #b1da0b';
            break;
            case 'PAPER': computerPaper.style.border = '5px solid #b1da0b';
            computerPaper.style.boxShadow = '0 0 10px #b1da0b';
            break;
            case 'SCISSORS':   computerScissors.style.border = '5px solid #b1da0b';
            computerScissors.style.boxShadow = '0 0 10px #b1da0b';
            break;
        }

        const result = playRound(playerSelection, computerSelection);
        if(result.match('lose')) {
            pointsUpdate('computer');
            whoWon.style.border = '5px solid red';
            computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
        }   
        else if(result.match('won')) {
            pointsUpdate('human');
            whoWon.style.border = '5px solid green';
            humanScore.innerHTML = parseInt(humanScore.innerHTML) + 1;
        }
        else 
            whoWon.style.border = '5px solid grey';
            
        whoWon.textContent = result;
    }

    //once player's or computer's points reach 5, the game ends by displaying the final result and disabling the buttons
    if(playerPoints === 5 || computerPoints === 5) {
        //disabling the player's buttons
        rockClick.disabled = true;
        rockClick.classList.remove('rock');
        paperClick.disabled = true;
        paperClick.classList.remove('paper');
        scissorsClick.disabled = true;
        scissorsClick.classList.remove('scissors');

        //removing the border from computer's display
        computerRock.style.border = null;
        computerPaper.style.border = null;
        computerScissors.style.border = null;

        if(computerPoints > playerPoints) {
            whoWon.style.border = '5px solid red';
            whoWon.textContent = 'Better luck next time 😔! Computer Won!';
            computerScore.innerHTML = computerPoints;
        }
        
        else {
            whoWon.style.border = '5px solid green';
            whoWon.textContent = 'Hurray!!! You Won 🥳!';
            humanScore.innerHTML = playerPoints;
        }  
    }
}

const rockClick = document.querySelector('.rock');
rockClick.addEventListener('click', game);

const paperClick = document.querySelector('.paper');
paperClick.addEventListener('click', game);

const scissorsClick = document.querySelector('.scissors');
scissorsClick.addEventListener('click', game);

const computerRock = document.querySelector('.c-rock');
computerRock.classList.add('computerRock');

const computerPaper = document.querySelector('.c-paper');
computerPaper.classList.add('computerPaper');

const computerScissors = document.querySelector('.c-scissors');
computerScissors.classList.add('computerScissors');

const restartClick = document.querySelector('#restart');
restartClick.addEventListener('click', () => {
    window.location.reload();
})