let result = document.getElementById('result');


function appendvalue(value) {
    result.value += value
}
function backspace() {
    result.value = result.value.slice(0, -1)
}
function clear() {
    result.value += ''
}


function sum() {
    const expression = result.value;
    let Numbers = [];
    let operators = [];
    let Number = '';
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        if (!isNaN(char) || char === '.') {
            Number += char;
        } else {
            Numbers.push(parseFloat(Number));
            Number = '';
            if (char === '+' || char === '-') {
                while (operators.length > 0 && (operators[operators.length - 1] === '+' || operators[operators.length - 1] === '-' || operators[operators.length - 1] === '*' || operators[operators.length - 1] === '/')) {
                    const b = Numbers.pop();
                    const a = Numbers.pop();
                    const operator = operators.pop();
                    const result = operate(a, b, operator);
                    Numbers.push(result);
                }
            } else if (char === '*' || char === '/') {
                while (operators.length > 0 && (operators[operators.length - 1] === '*' || operators[operators.length - 1] === '/')) {
                    const b = Numbers.pop();
                    const a = Numbers.pop();
                    const operator = operators.pop();
                    const result = operate(a, b, operator);
                    Numbers.push(result);
                }
            }
            operators.push(char);
        }
    }
    Numbers.push(parseFloat(Number));
    while(operators.length > 0){
        const b = Numbers.pop();
        const a = Numbers.pop();
        const operator = operators.pop();
        const result = operate(a, b, operator);
        Numbers.push(result);
    }
    result.value = Numbers[0]
}

// Arithmetic operators 
function operate(a, b, operator){
    switch (operator){
        case'+':
           return a + b
        case'-':
            return a - b;
        case'*':
            return a * b;
        case '/':
            if(b === 0){
                throw new Error("Not")
            }
            return a/b;
    }
}
