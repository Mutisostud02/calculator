const add = (a, b) => a += b;
const multiply = (a, b) => a *= b;
const divide = (a, b) => a /= b;
const subtract = (a, b) => a -= b;

function operate (operator, a, b){
    if(operator === '+'){
        return add(a,b);
    }
    else if(operator === '-'){
        return subtract(a,b);
    }else if(operator === '*'){
        return multiply(a,b);
    }
    else if(operator === '/'){
        return divide(a,b);
    }
}

const digitButtons = document.querySelectorAll('.no');
const operators = document.querySelectorAll('.ops');
const display = document.querySelector('.display');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

let previousVal = '';
let currentVal = '';
let operand = '';

//function to display numbers when numbers are clicked
const varDisplay = digitButtons.forEach(function(number){
    number.addEventListener('click',function (){
        display.textContent += number.textContent;
        currentVal = parseInt(display.innerText);
    });
   
});



operators.forEach(operators => {
    operators.addEventListener('click', () => {
previousVal = currentVal;
currentVal = '';
display.textContent = '';
display.textContent += operators.textContent;
operand = display.textContent;
display.textContent = '';

currentVal = parseInt(display.textContent);

    })
});

equals.addEventListener('click', () => {
    display.textContent = '';
    display.textContent += operate(operand,previousVal,currentVal);
   previousVal = currentVal;
   currentVal = parseInt(display.innerText);
    
})

clear.addEventListener('click',() => {
   display.textContent = '';
})
