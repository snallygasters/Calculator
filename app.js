const calculatorButtons = document.querySelector('.buttons-list');
const displayCurrent = document.querySelector('.current-input')
const decimal = document.querySelector('.decimal');
const allClear = document.querySelector('#allclear');
const displayPrevious = document.querySelector('.previous-input')
const Equals = document.querySelector('.equals')
const back = document.querySelector('#back');

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
    }
    }
    else if (e.target.classList.contains("operator")) {
        if (displayCurrent.textContent !== "0") {
            Equals.click();
        }
        displayPrevious.textContent = displayCurrent.textContent + " " + e.target.textContent;
        displayCurrent.textContent = '0';
        decimal.classList.add('input');
    }
});

allClear.addEventListener('click', function() {
    displayCurrent.textContent = '0';
    displayPrevious.textContent = ""
    decimal.classList.add('input');
});

back.addEventListener('click', function(){
    displayCurrent.textContent = displayCurrent.textContent.slice(0,-1);
})

Equals.addEventListener('click', function(){
    let splitNum = displayPrevious.textContent.split(" ");
    operate(splitNum[0], displayCurrent.textContent, splitNum[1]);
})

function add(num1, num2) {
    return displayCurrent.textContent = (parseFloat(num1) + parseFloat(num2));
}

function subtract(num1, num2) {
    return displayCurrent.textContent = (parseFloat(num1) - parseFloat(num2));
}

function multiply(num1, num2) {
    return displayCurrent.textContent = (num1 * num2);
}

function divide(num1, num2) {
    if (num2 === '0') {
        return displayCurrent.textContent = "REALLY BROTHER";
    }
    else {
        return displayCurrent.textContent = (num1 / num2);
    }
    r
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
        displayCurrent.textContent = add(num1, num2);
        displayPrevious.textContent = "";
        break;

        case "-":
        displayCurrent.textContent = subtract(num1, num2);
        displayPrevious.textContent = "";
        break;

        case "*":
        displayCurrent.textContent = multiply(num1, num2);
        displayPrevious.textContent = "";
        break;

        case "/":
        displayCurrent.textContent = divide(num1, num2);
        displayPrevious.textContent = "";
        break;
    }
}