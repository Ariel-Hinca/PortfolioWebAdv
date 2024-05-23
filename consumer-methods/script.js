function createPromise () {
    return new Promise((resolve, reject) => {
        let randomPopularity = (Math.random().toFixed(2)); //toFixed bepaalt het aantal cijfers na de komma
        console.log(randomPopularity) //efe loggen op de console om de popularity uitkomst te controleren
        let popularity = randomPopularity > 0.5;

        setTimeout(() => {
            if (popularity) {
                resolve("Je bent populair genoeg.")
            } else {
                reject("Je bent niet populair genoeg.")
            }
        }, 2000) //effe 2 seconden wachten voor de uitvoerende code
    })
}

document.addEventListener('DOMContentLoaded', () => {
    let popularityResult = document.getElementById('popularity');

    createPromise()
        .then(message => {
            popularityResult.textContent = message;
        })
        .catch(error => {
            popularityResult.textContent = error;
        })
        .finally(() => {
            console.log('Promise verwerking is vooltooid');
        })
})