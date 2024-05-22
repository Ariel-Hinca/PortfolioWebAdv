/*Promise:
Een promise is een javascript object dat een
bepaalde blok uitvoerende code linkt aan
consuming code.
De uitvoerende code neemt de tijd die het nodig
heeft om een resultaat te produceren.
*/
function fetchMessage () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isSuccess = true; //bij false wordt de reject/error getriggeerd
            if(isSuccess){
                resolve("Dit is een bericht van de Promise.");
            } else {
                reject("Het bericht is niet te vinden.")
            }
        }, 2000); //Effe 2 secondjes wachten
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const promiseElement = document.getElementById('promise');

    fetchMessage()
        .then((message) => {
            promiseElement.textContent = message;
        })
        .catch((error) => {
            promiseElement.textContent = error;
        })
})