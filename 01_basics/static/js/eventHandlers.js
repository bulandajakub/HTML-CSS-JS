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
            description: 'This page contains all the things I am learning how to create as I learn HTML.'
        },
        about: {
            title: 'About Me',
            description: 'Learn more about this website and its creator',
        },
        // Add more sections as needed    
    };

    // Attach event listeners to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            handleNavigation(event, sections);
        });
    });
});
