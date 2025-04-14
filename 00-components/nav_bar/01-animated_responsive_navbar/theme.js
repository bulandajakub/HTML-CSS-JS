const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark",
};

// This code checks if there is already a theme set in localStorage.
// If not, it takes the first key from the themeMap object (which is "dark")
// and sets it as the current theme in localStorage.
// Then it adds the current theme as a class to the document's body element.
const theme =
  localStorage.getItem("theme") ||
  ((tmp = Object.keys(themeMap)[0]), localStorage.setItem("theme", tmp), tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

/*
 * Toggles the current theme to the next theme in the sequence.
 * Retrieves the current theme from localStorage, determines the next theme
 * using the themeMap, updates the document's body class, and saves the new theme
 * back to localStorage.
 */

function toggleTheme() {
  const current = localStorage.getItem("theme");
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem("theme", next);
}

document.getElementById("themeButton").onclick = toggleTheme;
