const animals = ['Hond', 'Vis', 'Vogel'];
//for...of loop
const forOfLoop = document.getElementById('forOf');
for (const animal of animals){
    const li = document.createElement('li');
    li.textContent = animal;
    forOfLoop.appendChild(li);
}