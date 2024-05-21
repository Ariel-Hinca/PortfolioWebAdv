document.addEventListener('DOMContentLoaded', () => {
    const userName = 'Ariel';
    const greetingMessage = `Hallo, ${userName}! Welkom in mijn website.`;
    const greetingDiv = document.getElementById('greeting');
    greetingDiv.textContent = greetingMessage;
})