const jokeButton = document.getElementById('jokeButton');
const jokeDisplay = document.getElementById('joke');

async function fetchJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const jokeData = await response.json();

        jokeDisplay.textContent = `${jokeData.setup} - ${jokeData.punchline}`;

        localStorage.setItem('lastJoke', JSON.stringify(jokeData));
    } catch (error) {
        jokeDisplay.textContent = 'Oops, something went wrong. Please try again later.';
        console.error('Error fetching joke:', error);
    }
}

jokeButton.addEventListener('click', fetchJoke);

window.addEventListener('load', () => {
    const savedJoke = localStorage.getItem('lastJoke');
    
    if (savedJoke) {
        const joke = JSON.parse(savedJoke);
        jokeDisplay.textContent = `${joke.setup} - ${joke.punchline}`;
    }
});
