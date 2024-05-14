const form = document.getElementById('calculator-form');
const resultDiv = document.getElementById('result');

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstNumber = parseFloat(form.firstNumber.value);
    const secondNumber = parseFloat(form.secondNumber.value);

    const operation = event.submitter.id;

    let result;

    switch (operation) {
        case 'add':
            result = firstNumber + secondNumber;
            break;
        case 'subtract':
            result = firstNumber - secondNumber;
            break;
        case 'multiply':
            result = firstNumber * secondNumber;
            break;
        case 'divide':
            result = firstNumber / secondNumber;
            break;
        default:
            result = "Invalid operation";
            break;
    }

    resultDiv.textContent = `Result: ${result}`;
});

