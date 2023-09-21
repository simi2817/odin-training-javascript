
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
            result = computerSelection === 'PAPER' ? 'You lose! Paper beats Rock!'      :        computerSelection === 'SCISSORS' ? 'You won! Rock beats Scissors'
            :        'Tie!';
            break;
        case 'PAPER':
            result = computerSelection === 'SCISSORS' ? 'You lose! Scissors beats Paper!'
            :        computerSelection === 'ROCK' ? 'You won! Paper beats Rock'
            :        'Tie!';
            break;
        case 'SCISSORS':
            result = computerSelection === 'PAPER' ? 'You won! Scissors beats Paper!'
            :        computerSelection === 'ROCK' ? 'You lose! Rock beats Scissors'
            :        'Tie!';
            break;
    }
    return result;
}

const game = () => {
    let playerPoints = 0;
    let computerPoints = 0;
    
    for(let i = 1; i <= 5; i++) {
        const playerSelection = prompt(`Turn ${i}`, 'Rock');
        const computerSelection = getComputerChoice();
        alert(`Computer has selected ${computerSelection}`);
        const result = playRound(playerSelection, computerSelection);
        alert(result);
        if(result.match('lose'))    computerPoints++;
        else if(result.match('won'))   playerPoints++;
    }
    
    const finalResult =  computerPoints > playerPoints ? 'Computer Won!' : 'You Won!';
    alert(`${finalResult} | Computer: ${computerPoints} | You: ${playerPoints}`);
    return finalResult;
}