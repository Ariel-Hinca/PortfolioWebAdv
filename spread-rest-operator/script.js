//Spread Operator = gebruikt om elementen van een array of een object te verspreiden.
const numbers = [1, 2 , 3];
const newNumbers = [...numbers, 4, 5, 6];
document.getElementById('spread').textContent = `Spread Operator: ${newNumbers.join(', ')}`;

//Rest Operator (...) wordt gebruikt om een onbeperkt aantal argumenten als een array in een functie te verzamelen.
const average = (...numbers) => {
    const total = numbers.reduce((sum, num) => sum + num, 0); //De reduce methode van JavaScript's Array object om de som van alle getallen in de array numbers te berekenen.
    return total / numbers.length;
}

const average1 = average(10, 20, 30);
document.getElementById('rest').textContent = `Het gemiddelde van (10, 20, 30) is ${average1}`;