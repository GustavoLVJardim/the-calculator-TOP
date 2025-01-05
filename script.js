const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.buttons > .number');
const operatorButtons = document.querySelectorAll('.buttons > .operators');
const clean = document.querySelector('#clean');

const firstNumber = document.querySelector('#first-number');
const operator = document.querySelector('#operator');
const secondNumber = document.querySelector('#second-number');

const result = document.querySelector('#result');

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
    display.textContent = '0'
    
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (display.textContent === '0') {
                display.textContent = '';
            }
            display.textContent += button.textContent;
        });
    });


    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            if (firstNum === '') {
                firstNum = Number(display.textContent);
                operatorSign = button.textContent;
            }
                
                console.log(firstNum)
                console.log(operatorSign)
            
               
            
            if (secondNum === '') {
                display.textContent = firstNum;
                button.textContent = ''
                secondNum += button.textContent;
                console.log(secondNum)
            }

            

            
            
                /*firstNumber.textContent = firstNum;
                operator.textContent = operatorSign;*/
        
            
        })
    })


    
    
    
    
    
    
    clean.addEventListener('click', () => {
        display.textContent = '0';
        firstNum = '';
        operatorSign = '';
        secondNum = '';
        resultNum = '';
    })


    
});