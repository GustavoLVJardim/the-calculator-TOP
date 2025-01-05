const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.buttons > .number');
const operatorButtons = document.querySelectorAll('.buttons > .operators');
const clean = document.querySelector('#clean');

const firstNumber = document.querySelector('#first-number');
const operator = document.querySelector('#operator');
const secondNumber = document.querySelector('#second-number');

const result = document.querySelector('#getResult');

let firstNum = '';
let operatorSign = '';
let secondNum = '';
let resultNum = '';


function getSum(num1, num2) {
    return num1 + num2;
}

function getSub(num1, num2) {
    return num1 - num2;
}

function getMulti(num1, num2) {
    return num1 * num2;
}

function getDiv(num1, num2) {
    if (num2 === 0) {
        return "Can't div by 0";
    }
    return num1 / num2;
}

function operate(num1, num2, operator) {
    if (operator === '+') {
        return getSum(num1, num2);
    } else if (operator === '-') {
        return getSub(num1, num2);
    } else if (operator === '*') {
        return getMulti(num1, num2);
    } else if (operator === '/') {
        return getDiv(num1, num2);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    display.textContent = '0';
    let operatorClicked = false;

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (display.textContent === '0' || operatorClicked) {
                display.textContent = ''; 
                operatorClicked = false;
            }
            display.textContent += button.textContent;

            if (!operatorSign) {
                firstNum = Number(display.textContent);
                console.log(`primeiro: ${firstNum}`);
            } else {
                secondNum = Number(display.textContent);
                console.log(`segundo: ${secondNum}`);
            }
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (firstNum && !operatorClicked) {
                operatorSign = button.textContent;
                operatorClicked = true;
                console.log(`operador: ${operatorSign}`);
            }
        });
    });

    result.addEventListener('click', () => {
        if (firstNum && operatorSign && secondNum) {
            resultNum = operate(firstNum, secondNum, operatorSign);
            display.textContent = resultNum;
            firstNum = resultNum;
            operatorSign = '';
            secondNum = '';
        }
    });

    clean.addEventListener('click', () => {
        display.textContent = '0';
        firstNum = '';
        operatorSign = '';
        secondNum = '';
        resultNum = '';
        operatorClicked = false;
    });
});