/**
 * This script selects all elements with the class "swatches span" and the root element.
 * It then attaches a click event listener to each swatch element.
 * Upon clicking a swatch, the event listener changes the CSS variable "--primary-color"
 * to the background color of the clicked swatch.
 */
const swatches = document.querySelectorAll(".swatches span");
const root = document.documentElement;

swatches.forEach((swatch) => {
  swatch.addEventListener("click", (event) => {
    const newColor = event.target.style.backgroundColor;
    root.style.setProperty("--primary-color", newColor);
  });
});
