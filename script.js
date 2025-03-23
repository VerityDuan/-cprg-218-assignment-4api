document.addEventListener("DOMContentLoaded", () => {
});

async function fetchJoke(category) {
    try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`);
        const data = await response.json();  // Allows system to fetch APIs
        
         // for one single and two part jokes
        let jokeText = "";
        if (data.type === "single") {
            jokeText = data.joke;
        } else if (data.type === "twopart") { 
            jokeText = `${data.setup} ... ${data.delivery}`;
        }
        
        document.getElementById("jokes").textContent = jokeText;
        updateTitle(category);
    } catch (error) {
        console.error("Error fetching joke:", error);    // when there is an error in the system
        document.getElementById("jokes").textContent = "Oops! Go back, and try again!";
    }
}
  // finally for the special pun section
function updateTitle(category) {
    let title = "A Random " + category + " Joke";
    if (category === "Pun") {
        title = "A Random Pun";
    }
    document.getElementById("jokeTitle").textContent = title;
}

