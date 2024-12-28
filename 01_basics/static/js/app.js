import { loadPartial } from './loadPartial.js';
import { handleNavigation } from './eventHandlers.js';

console.log('app.js: Starting to load initial content');

// Load the initial partials
document.addEventListener('DOMContentLoaded', () => {
    console.log('app.js: DOMContentLoaded triggered');
    loadPartial('header', 'partials/header.html');
    loadPartial('main', 'partials/home.html');
    loadPartial('footer', 'partials/footer.html');

    // Define sections for navigation
    const sections = {
        home: {
            title: 'HTML Basics',
            description: 'This page contains all the things I am learning how to create as I learn HTML.',
        },
        about: {
            title: 'About Me',
            description: 'Learn more about this website and its creator.',
        },
        contact: {
            title: 'Contact',
            description: 'Get in touch with me.',
        },
    };

    // Attach event listeners to navigation links (after header is loaded)
    document.getElementById('header').addEventListener('click', (event) => {
        const navLink = event.target.closest('.nav-link');
        if (navLink) {
            event.preventDefault();
            handleNavigation(event, sections);
        }
    });
});
