const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons > div');
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

function getMult(num1, num2) {
    return num1 * num2;
}

function getDiv(num1, num2) {
    return num1 / num2;
}


document.addEventListener('DOMContentLoaded', () => {
    
});