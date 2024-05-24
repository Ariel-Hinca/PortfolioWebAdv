/*
"JavaScript Object Notation (JSON) is a standard text-based format
for representing structured data based on JavaScript object syntax."
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
 */

document.addEventListener('DOMContentLoaded', () => {
    let manipulation = document.getElementById('manipulation');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data); //de data is hier enkel te zien op mijn console
        manipulation.textContent = JSON.stringify(data); //aan de hand van e 'stringify' methode kan de json data omgezet worden naar javascript syntax
    })
})
