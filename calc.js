let currentInput = '';  
let previousInput = ''; 
let operation = undefined; 

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = undefined;
    document.getElementById('display').value = '';
}

function chooseOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result;
    operation = undefined;
    previousInput = '';
    document.getElementById('display').value = result;
}
