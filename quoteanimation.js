// Quote animation
const quotes = document.querySelectorAll('.animated-quote');
let currentIndex = 0;

function showNextQuote() {
    quotes[currentIndex].style.opacity = '0';
    quotes[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % quotes.length;
    quotes[currentIndex].style.display = 'block';
    setTimeout(() => {
        quotes[currentIndex].style.opacity = '1';
    }, 1000);
}

// Initially hide all quotes except the first one
for (let i = 1; i < quotes.length; i++) {
    quotes[i].style.display = 'none';
}

// Start the animation
setInterval(showNextQuote, 8000);
