import { loadPartial } from "./loadPartial.js";
import './eventHandlers.js'

// Load partials into the page
document.addEventListener('DOMContentLoaded', () => {
    loadPartial('header', 'partials/header.html');
    loadPartial('main', 'partials/main.html');
    loadPartial('footer', 'partials/footer.html');
})