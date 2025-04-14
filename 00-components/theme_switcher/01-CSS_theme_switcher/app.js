// DOM Elements

const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const solarButton = document.getElementById("solar");
const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem("theme");
const isSolar = localStorage.getItem("isSolar");

if (theme) {
    body.classList.add(theme);
    isSolar && body.classList.add("solar");
}

// Button Event Handlers

// Toggle the dark theme on click
// Replace the light class with the dark class in the body element
// Cache the theme in localStorage
darkButton.onclick = () => {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
};

// Toggle the light theme on click
// Replace the dark class with the light class in the body element
// Cache the theme in localStorage
lightButton.onclick = () => {
    body.classList.replace("dark", "light");

    localStorage.setItem("theme", "light");
};

// Toggle the solar theme on click
// Replace the solar class with nothing in the body element
// Replace the background color of solarButton with var(--yellow)
// Change the text content of solarButton to "solarize"
// Remove "isSolar" from localStorage
// Otherwise
// Add the solar class to the body element
// Replace the background color of solarButton with white
// Change the text content of solarButton to "normalize"
// Set "isSolar" to true in localStorage
solarButton.onclick = () => {
    if (body.classList.contains("solar")) {
        body.classList.remove("solar");
        solarButton.style.cssText = `
      --bg-solar: var(--yellow);
    `;

        solarButton.innerText = "solarize";

        localStorage.removeItem("isSolar");
    } else {
        solarButton.style.cssText = `
      --bg-solar: white;
    `;

        body.classList.add("solar");
        solarButton.innerText = "normalize";

        localStorage.setItem("isSolar", true);
    }
};
