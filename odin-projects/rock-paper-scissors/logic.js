
const getComputerChoice = () => {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

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

const game = (e) => {

    whoWon.style.margin = "auto";
    whoWon.style.padding = '10px';
    whoWon.style.backgroundColor = 'white';
    whoWon.style.color = 'black';

    if(playerPoints === 5 || computerPoints === 5) {
            if(computerPoints > playerPoints) {
                whoWon.style.border = '5px solid red';
                whoWon.textContent = 'Better luck next time 😔! Computer Won!';
            }
            else {
                whoWon.style.border = '5px solid green';
                whoWon.textContent = 'Hurray!!! You Won 🥳!';
            }    
    }

    if(playerPoints < 5 && computerPoints < 5) {
        const playerSelection = e.target.id.toUpperCase();
        const computerSelection = getComputerChoice();
   
        const result = playRound(playerSelection, computerSelection);
        if(result.match('lose')) {
            computerPoints++;
            whoWon.style.border = '5px solid red';
        }   
        else if(result.match('won')) {
            playerPoints++;
            whoWon.style.border = '5px solid green';
        }
        else
            whoWon.style.border = '5px solid grey'; 

        whoWon.textContent = result;
    }
}

const rockClick = document.querySelector('#rock');
rockClick.addEventListener('click', game);

const paperClick = document.querySelector('#paper');
paperClick.addEventListener('click', game);

const scissorsClick = document.querySelector('#scissors');
scissorsClick.addEventListener('click', game);

const restartClick = document.querySelector('#restart');
restartClick.addEventListener('click', () => {
    window.location.reload();
})