/*
localStorage is a property that allows JavaScript sites and apps to save key-value
pairs in a web browser with no expiration date. This means the data stored persists
even after the user closes the browser or restarts the computer.
https://blog.logrocket.com/localstorage-javascript-complete-guide/
*/
//h1 en h2
const animalName = document.getElementById('animalName');
const animalNoise = document.getElementById('animalNoise');
//buttons
const animalBtn = document.getElementById('animalBtn');
const noiseBtn = document.getElementById('noiseBtn');

//eventListener om de eerste input op te slaan in de Local Storage
animalBtn.addEventListener("click", () => {
    let animal = document.querySelector("#animal").value;
    animalName.textContent = animal;
    localStorage.setItem("animal", animal);
})

function showAnimalName() {
    const animalFromLocalStorage = localStorage.getItem("animal")

    if (animalFromLocalStorage){
        animalName.textContent = animalFromLocalStorage;
    } else {
        animalName.textContent = "Geen dier gevonden.";
    }
}
showAnimalName();

//eventListener om de eerste input op te slaan in de Local Storage
noiseBtn.addEventListener("click", () => {
    let noise = document.querySelector("#noise").value;
    animalNoise.textContent = noise;
    localStorage.setItem("noise", noise);
})

function showAnimalNoise() {
    const noiseFromLocalStorage = localStorage.getItem("noise")

    if (noiseFromLocalStorage){
        animalNoise.textContent = noiseFromLocalStorage;
    } else {
        animalNoise.textContent = "Geen dierlijke geluid gevonden.";
    }
}
showAnimalNoise();