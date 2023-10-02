let operator = '';
let firstChoice = '';
let secondChoice = '';
let result = 0;
let operatorON = false;
let clickedOperator = 0;

const assignOperands = (e) => {
    if(!operatorON) {
        displayPanel.style.fontSize = '100%';
        firstChoice += e.target.id;
        display('firstNum');
        return firstChoice;
    }
    else {
        secondChoice += e.target.id;
        display('secondNum');
        return secondChoice;
    }
}

const assignOperator = (e) => { 
    clickedOperator++;
    if(clickedOperator === 1) {
        return [
            operator = e.target.id,
            display('operator'),
            operatorON = true
        ];
    }
}

const operate = () => {
    const firstOperand = parseFloat(firstChoice);
    const secondOperand = parseFloat(secondChoice);

    switch(operator) {
        case '+': 
            result = (firstOperand + secondOperand).toFixed(2);
            break;
        case '-':
            result = (firstOperand - secondOperand).toFixed(2);
            break;
        case '÷':
            if(secondOperand === 0)
                alert('Divide by zero error encountered!');
            else    
                result = (firstOperand / secondOperand).toFixed(2);
            break;
        case 'x':
            result = (firstOperand * secondOperand).toFixed(2);
            break;
    }
    
    checkFontSize(result);

    if(secondOperand === 0 && operator === '÷') {
        display('clear');
        clear();
    }
    else   {
        display('result');
        firstChoice = result;
        secondChoice = '';
        clickedOperator = 0;
    }
    return result;
}

const display = (value) => {
    switch(value) {
        case 'firstNum':
            displayPanel.innerHTML = firstChoice;
            break;
        case 'secondNum':
            displayPanel.innerHTML = `${firstChoice} ${operator} ${secondChoice}`;
            break;
        case 'operator':
            displayPanel.innerHTML = `${firstChoice} ${operator}`;
            break;
        case 'result':
            displayPanel.innerHTML = `${firstChoice} ${operator} ${secondChoice} = ${result}`;
            break;
        case 'clear':
            displayPanel.innerHTML = '';
            break;
    }
}

const clear = () => {
    return [
        firstChoice = '',
        secondChoice = '',
        operatorON = false,
        display('clear'),
        clickedOperator = 0
    ];
}

const backSpaceToRemove = () => {
    if(!secondChoice && !operatorON) {
            firstChoice = firstChoice.slice(0,-1);
            display('firstNum');
            return firstChoice;
    }
    else if(operatorON) {
        if(secondChoice) {
            secondChoice = secondChoice.slice(0,-1);
            display('secondNum');
            return secondChoice;
        }
        else {
            operator = '';
            display('operator');
            operatorON = false;
            return operator;
        }
    }
}

const checkFontSize = (result) => {
    if(result.toString().length >= 10)
        displayPanel.style.fontSize = '70%';
}

const displayPanel = document.getElementById('displayPanel');
displayPanel.classList.add('displayPanel');

const one = document.getElementById('1');
one.addEventListener('click', assignOperands);

const two = document.getElementById('2');
two.addEventListener('click', assignOperands);

const three = document.getElementById('3');
three.addEventListener('click', assignOperands);

const four = document.getElementById('4');
four.addEventListener('click', assignOperands);

const five = document.getElementById('5');
five.addEventListener('click', assignOperands);

const six = document.getElementById('6');
six.addEventListener('click', assignOperands);

const seven = document.getElementById('7');
seven.addEventListener('click', assignOperands);

const eight = document.getElementById('8');
eight.addEventListener('click', assignOperands);

const nine = document.getElementById('9');
nine.addEventListener('click', assignOperands);

const zero = document.getElementById('0');
zero.addEventListener('click', assignOperands);

const add = document.getElementById('+');
add.addEventListener('click', assignOperator);

const subtract = document.getElementById('-');
subtract.addEventListener('click', assignOperator);

const division = document.getElementById('÷');
division.addEventListener('click', assignOperator);

const multiplication = document.getElementById('x');
multiplication.addEventListener('click', assignOperator);

const calculate = document.getElementById('=');
calculate.addEventListener('click', operate);

const decimal = document.getElementById('.');
decimal.addEventListener('click', assignOperands);

const clearDisplay = document.getElementById('clear');
clearDisplay.addEventListener('click', clear);

const backspace = document.getElementById('backspace');
backspace.addEventListener('click', backSpaceToRemove);