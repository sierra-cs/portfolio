function updateDateTime() {
    const now = new Date();

    // Time in 12-hour format (no AM/PM)
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    const timeString = `${hours}:${minutes}`;
    
    document.getElementById('time').textContent = timeString;

    // Date
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
}

// Update immediately and then every minute
updateDateTime();
setInterval(updateDateTime, 60000);

// Rotating places phrases
const phrases = [
    "Click to continue...",
    "No password needed ✨",
    "Explore my work 👩‍💻",
    "Discover more 🔍",
    "Let's get started 🚀",
    "Just here for the vibes 🪴",
    "Come on in Y'all!!"
];

let currentPhraseIndex = 0;

function rotatePlaceholder() {
    const loginInput = document.getElementById('loginInput');
    if (loginInput) {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        loginInput.placeholder = phrases[currentPhraseIndex];
    }
}

// Update immediately and then every 5 seconds
setInterval(rotatePlaceholder, 5000);

// Navigate to home page on click 
function navigateToHome() {
    document.body.style.transition = 'opacity 400ms linear';
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'home.html';
    }, 400);
}

const arrowButton = document.getElementById('arrowButton');

if (arrowButton) {
    arrowButton.addEventListener('click', navigateToHome);
}