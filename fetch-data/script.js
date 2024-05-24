/*
Fetch laat je toe om data over een network te versturen en resultaten terug te krijgen.
The fetch() method starts the process of fetching a resource from a server.
The fetch() method returns a Promise that resolves to a Response object.
*/

document.addEventListener('DOMContentLoaded', () => {
    let fetchData = document.getElementById('fetchData');

    /*
    Ik zat hier vast en kon de 'h1' van de url niet terug krijgen heb hulp aan AI gevraagd.
    Zie de link: https://chatgpt.com/share/d48e8010-3dae-48fe-8e84-a3e798a7408d

    fetch('https://jsonplaceholder.typicode.com/')
        //gegevens afhalen aan de hand van Promise syntax
        .then(response => response.text())
        .then(data => {
            fetchData.textContent = `Title: ${data.title}`;
        })
     */

    fetch('https://jsonplaceholder.typicode.com/')
        .then(response => response.text())
        .then(data => {
            // Parse de HTML-inhoud
            let parser = new DOMParser();
            let doc = parser.parseFromString(data, 'text/html');

            // Selecteer het <h1> element
            let h1 = doc.querySelector('h1');

            // Controleer of het <h1> element bestaat
            if (h1) {
                fetchData.textContent = `Title: ${h1.textContent}`;
            } else {
                fetchData.textContent = 'Title: <h1> element not found';
            }
        })
});
