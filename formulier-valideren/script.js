document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', (event) => {
        const emailInput = form.querySelector('#email');
        const email = emailInput.value;

        if (!email.includes('.com')) {
            event.preventDefault();
            alert('Dit is geen geldige email.');
        }
    });
});