//Destructuring van een array
const animals = ['Hond', 'Konijn', 'Vis', 'Vogel'];
const [firstAnimal, secondAnimal, thirdAnimal, fourthAnimal] = animals;

document.getElementById('array').textContent = `Dieren: ${firstAnimal}, ${secondAnimal}, ${thirdAnimal}, ${fourthAnimal}`

//Destructuring van een object
const auto = {brand: 'BMW', fuel: "50L", range: "800Km"};
const {brand, fuel, range} = auto;

document.getElementById('object').textContent = `Auto: ${brand}, ${fuel}, ${range}`