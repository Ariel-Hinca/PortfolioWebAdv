const sum = (a,b) => a + b; //Basic arrow functie om 2 getallen op te tellen, heb ondertussen bijna bij elke andere script arrow functies gebruikt.

document.addEventListener('DOMContentLoaded', () => {
    const result = sum(1, 2);
    document.getElementById('arrow').textContent = `2 + 3 = ${result}`;
});