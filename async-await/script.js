async function myPromise (){
    return new Promise((resolve, reject) => {
        resolve("Asynchrone boodschap gelukt!")
    })
}

document.addEventListener('DOMContentLoaded', async () => {
    const asyncVb = document.getElementById('asyncVb');
    asyncVb.textContent = await myPromise();
})