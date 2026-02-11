    // Access DOM elements of the calculator 

const inputBox = document.getElementById('input');

const expressionDiv = document.getElementById('expression');

const resultDiv = document.getElementById('result');

// define expression and result variable 

// At first we have two empty string 

let expression = '';
let result = '';

// define event handler for button clicks 

function buttonClick(event) {
    // values from the clicked buttons 

    const target = event.target;
    const action = target.dataset.action;
    const value = target.dataset.value;
    // console.log(target, action , value);


    // switch case to control the calculator 
    switch (action) {
        case 'number':
            addValue(value);
            break;

        case 'clear':
            clear();
            // console.log('clear');
            break;

        case 'backspace':
            backspace();
            // updateDisplay(expression,result); 
            break;

        // Add the result to expression as a starting point if expression is empty
        case 'addition':
        case 'subtraction':
        case 'multiplication':
        case 'division':
            if (expression === '' && result !== '') {
                startFromResult(value);
            }
            else if (expression !== '' && !isLastCharOperator()) {
                addValue(value);
            }
            break;

        case 'submit':
            submit();
            break;
        case 'negate':
            negate();
            break;
        case 'mod':
            percentage();
            break;
        case 'decimal':
            decimal(value);
            break;
            
    }
    updateDisplay(expression, result);
}
// so when the click happens the above function is called hai ta 
inputBox.addEventListener('click', buttonClick);

function addValue(value) {
    // add value to expression 

    expression += value;
    // console.log(expression);
}


// now we create another function

function updateDisplay(expression, result) {
    expressionDiv.textContent = expression;
    resultDiv.textContent = result;
}

function clear() {
    expression = '';
    result = '';
}

function backspace() {
    expression = expression.slice(0, -1);
    result = '';
}

function isLastCharOperator() {
    return isNaN(parseInt(expression.slice(-1)));
}

function startFromResult(value) {
    expression += result + value;
}

function submit() {
    result = evaluateExpression();
    expression = '';
}

function evaluateExpression() {
    const evalResult = eval(expression);
    // checks if evalResult isNaN or infinite , It it is then,
    // return a space character ,
    return isNaN(evalResult) || !isFinite(evalResult) ? ' ' : evalResult < 1
        ? parseFloat(evalResult.toFixed(10))
        : parseFloat(evalResult.toFixed(2));
}

function negate() {
    // negate the result if the expression is empty and result is present 
    if (expression === '' && result !== '') {
        result = -result;
        // 
    }

    else if (!expression.startsWith('-') && expression !== '') {
        expression = '-' + expression;
        // remove the negative sign from the expression , if its already negative 
    }

    else if (expression.startsWith('-')) {
        expression = expression.slice(1);
    }
}

function percentage() {

    if (expression !== '') {
        result = evaluateExpression();
        expression = '';
        if (!isNaN(result) && isFinite(result)) {
            result = result / 100;
        }
        else {
            result = '';
        }
    }
    else if (result !== '') {
        result = parseFloat(result) / 100;
    }

}

function decimal(){
    if (!expression.endsWith('-') && !isNaN(expression.slice(-1))) {
        addValue(value);
    }
}