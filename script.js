document.addEventListener("DOMContentLoaded", () => {
    fetchJoke("Any"); // Load a random joke when the page loads
});

async function fetchJoke(category) {
    try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`);
        const data = await response.json();
        
        let jokeText = "";
        if (data.type === "single") {
            jokeText = data.joke;
        } else if (data.type === "twopart") {
            jokeText = `${data.setup} ... ${data.delivery}`;
        }
    }}
