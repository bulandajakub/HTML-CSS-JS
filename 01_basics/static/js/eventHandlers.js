import { updateHead } from './updateHead.js';
import { loadPartial } from './loadPartial.js';

// Function to handle navigation events
export const handleNavigation = (event, sections) => {
    event.preventDefault();
    const sectionName = event.target.dataset.section;
    if (sectionName) {
        updateHead(sectionName, sections);
        loadPartial('main', `partials/${sectionName}.html`);
    }
};

// Automatically set up event listeners when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
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

    // Attach event listeners to navigation links
    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('nav-link')) {
            handleNavigation(event, sections);
        }
    });
});
