import { loadPartial } from './loadPartial.js';
import { handleNavigation } from './eventHandlers.js';

console.log('app.js: Starting to load initial content');

// Load the initial partials
document.addEventListener('DOMContentLoaded', () => {
    console.log('app.js: DOMContentLoaded triggered');

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

    // Get the current section from the URL hash or fallback to 'home'
    const hash = window.location.hash.slice(1) || 'home';
    console.log(`app.js: Loading section "${hash}" from URL hash`);
    loadPartial('header', 'partials/header.html');
    loadPartial('main', `partials/${hash}.html`);
    loadPartial('footer', 'partials/footer.html');

    // Attach event listeners to navigation links (after header is loaded)
    document.getElementById('header').addEventListener('click', (event) => {
        const navLink = event.target.closest('.nav-link');
        if (navLink) {
            event.preventDefault();
            const sectionName = navLink.dataset.section;
            handleNavigation(event, sections);

            // Update the URL hash without reloading the page
            window.location.hash = sectionName;
        }
    });
});
