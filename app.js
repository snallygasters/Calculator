const calculatorButtons = document.querySelector('.buttons-list');
const displayCurrent = document.querySelector('.current-input')
const decimal = document.querySelector('.decimal');
const allClear = document.querySelector('#allclear');

calculatorButtons.addEventListener('click', function(e) {
    if (e.target.classList.contains('decimal') && e.target.classList.contains('input')) {
        displayCurrent.textContent += e.target.textContent;
        e.target.classList.remove('input');
    }
    
    else if (e.target.classList.contains("input")) {
        if (displayCurrent.textContent == '0') {
            displayCurrent.textContent = e.target.textContent;
        }
        else {
            displayCurrent.textContent += e.target.textContent;
    }}
});

allClear.addEventListener('click', function() {
    displayCurrent.textContent = '0';
    decimal.classList.add('input');
});

function add() {

}

function substract() {

}

function multiply() {

}

function divide() {

}

function operate() {
    //takes an operator and 2 number and then calls an 
    //above function
}

function display() {
    //function that displays when buttons are clicked
}