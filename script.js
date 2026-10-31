const button = document.getElementById('share');
const speechBubble = document.getElementById('speechBubble')

button.addEventListener('click', (event) => {
    speechBubble.classList.toggle('show');
    event.stopPropagation();
});
