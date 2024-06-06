// Gebruiken van constantes
const catImages = {
    black: 'JPG-NPG/persianBlackCat.jpg',
    white: 'JPG-NPG/britishWitheCat.jpg',
    grey: 'JPG-NPG/burmeseGreyCat.jpg',
    orange: 'JPG-NPG/orangeTabbyCat.jpg'
};

// Elementen selecteren
let form = document.getElementById('mainForm');
let findCatBtn = document.getElementById('findCatBtn');
let fnameInput = document.getElementById('fname');
let lnameInput = document.getElementById('lname');
let independenceInput = document.getElementById('independence');
let curiosityInput = document.getElementById('curiosity');
let independenceValueSpan = document.getElementById('independenceValue');
let curiosityValueSpan = document.getElementById('curiosityValue');
let resultCatImage = document.getElementById('resultCatImage');
let congratsMessage = document.getElementById('congratsMessage');
let fetchData = document.getElementById('fetchData');
let questionCat = document.getElementById('questionCat');


// Formulier valideren, Event aan een element koppelen en Callback function
form.addEventListener('submit', function validateForm(event) {
    event.preventDefault();
    let firstName = fnameInput.value;
    let lastName = lnameInput.value;
    if (firstName === '' || lastName === '') {
        alert('Please fill out your first and last name.');
    } else {
        storeFormData();
    }
});

// Elementen manipuleren, Event aan een element koppelen en Callback function
// Afhankelijk van de gekozen favoriete kleur wordt er een specifieke afbeelding getoond, deze vervangt dan de cat-gif
findCatBtn.addEventListener('click', displayCatImage);
function displayCatImage() {
    let selectedColor = document.querySelector('input[name="favColor"]:checked'); //selecteert de gekozen "favourite color"
    if (selectedColor) {
        let color = selectedColor.value;
        let imgSrc = catImages[color];
        resultCatImage.src = imgSrc;
        resultCatImage.style.display = 'block';
        congratsMessage.textContent = `Congrats ${fnameInput.value}, this is your cat!`; //Gebruiken van template literals
        congratsMessage.style.display = 'block';
        fetchData.style.display = 'block';
        questionCat.style.display = 'none';
    } else {
        alert('Please select your favourite color.');
    }
}

// Functie om de independence waarde weer te geven
function updateIndependenceValue() {
    let rangeValue = independenceInput.value;
    independenceValueSpan.textContent = rangeValue;
}

// Arrow functie om de curiosity waarde weer te geven
let updateCuriosityValue = () => {
    let curiosityValue = curiosityInput.value;
    curiosityValueSpan.textContent = curiosityValue;
};

// Immediately Invoked Function Expression (IIFE) = Self executing function
(function() {
    console.log('This code runs immediately.'); //Zichtbaar in de console
})();

// Naam en voornaam opslaan LocalStorage, zichtbaar via f12 -> application -> local storage
const storeFormData = () => {
    const firstName = fnameInput.value;
    const lastName = lnameInput.value;
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
};

// Event aan een element koppelen en Local Storage updaten
document.addEventListener('DOMContentLoaded', () => {
    // Data van Local Storage laden en updaten
    let storedFirstName = localStorage.getItem('firstName');
    let storedLastName = localStorage.getItem('lastName');

    if (storedFirstName) {
        fnameInput.value = storedFirstName;
    }
    if (storedLastName) {
        lnameInput.value = storedLastName;
    }
});

// Promise, Fetch Data, Async & Await, Consumer methods, JSON manipuleren en weergeven
// Fetch to retrieve random cat-fact data
// Eigen poging om de fetch data te linken naar de lege paragraaf
/*async function fetchCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => {
            return response.json();
        })
        .then(data => console.log(data.fact)) //Ter controle op de console
        .catch(error => console.error('Error fetching data:', error));
}*/

// De volgende 9 rijen zijn door AI verbeteerd, ik wist niet hoe de fetched data te linken naar de paragraaf met id "fetchData"
// Dit is de link naar mijn gesprek met chatGPT: https://chatgpt.com/share/32ce95a3-c4ce-4a60-85c9-694edef746ae
async function fetchCatFact() {
    try {
        let response = await fetch('https://catfact.ninja/fact');
        let data = await response.json();
        console.log(data.fact); //Ter controle op de console
        return data.fact;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Async & Await
// findCatBtn krijgt een nieuwe event om de fetch data te weergeven als de user erop klikt
findCatBtn.addEventListener('click', async () => {
    // Controleer of een kleur is geselecteerd
    let selectedColor = document.querySelector('input[name="favColor"]:checked');
    if (selectedColor) {
        // Start de fetching van catFacts
        let catFact = await fetchCatFact();
        document.getElementById('fetchData').textContent = catFact;
    } else {
        alert('Choose a color!');
    }
});

