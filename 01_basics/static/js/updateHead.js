/**
 * Updates the title and meta description of the page
 * @param {string} sectionName - Name of the section to be updated
 * @param {Object} sections - Object containing information about the sections
 * @property {string} title - The title of the page
 * @property {string} description - The meta description of the page
 */
export function updateHead(sectionName, sections) {
    const sectionData = sections[sectionName];

    if (!sectionData) {
        console.error(`Section "${sectionName}" not found.`);
        return;
    }

    const { title, description } = sectionData;

    // Set the title of the page
    document.title = title || 'HTML Basics';

    // Set the meta description of the page
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = description || 'This page contains all the things I am learning how to create as I learn HTML.';
    }
}
