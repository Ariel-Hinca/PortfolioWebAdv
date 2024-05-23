(async function() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Self Executing functie is gelukt!")
        }, 2000)
    })
    let result = await promise;
    alert(result);
})();