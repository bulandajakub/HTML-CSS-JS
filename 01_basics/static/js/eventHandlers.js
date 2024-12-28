import { updateHead } from './updateHead.js';
import { loadPartial } from './loadPartial.js';

// Function to handle navigation events
export const handleNavigation = (event, sections) => {
    event.preventDefault();
    const sectionName = event.target.dataset.section;
    console.log(`handleNavigation: Navigation clicked for section "${sectionName}"`);
    if (sectionName) {
        updateHead(sectionName, sections);
        console.log(`handleNavigation: Updating head and loading content for section "${sectionName}"`);
        loadPartial('main', `partials/${sectionName}.html`);
    }
};