//Callback functie = functie die gebruikt wordt om een bepaalde actie asynchroon uit te voeren
function calculate (num1, num2, operationCallBack) {
    const result = operationCallBack (num1, num2);
    document.getElementById('result').textContent = `The result is: ${result}`;
}

//Kleine optelfunctie
function add(num1, num2) {
    return num1 + num2;

}

//Kleine vermenigvuldiging functie
function multiply(num1, num2) {
    return num1 * num2;
}

/*calculate(5, 3, add);*/
calculate(5, 3, add);
