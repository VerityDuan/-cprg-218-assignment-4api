document.addEventListener("DOMContentLoaded", () => {
    fetchJoke("Any"); // Allow page to load a random joke 
});

async function fetchJoke(category) { // fetches joke API
    try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`);
        const data = await response.json();}}

