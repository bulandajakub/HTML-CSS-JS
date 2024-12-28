/**
 * Updates the title and meta description of the page
 * @param {string} sectionName - Name of the section to be updated
 * @param {Object} sections - Object containing information about the sections
 * @property {string} title - The title of the page
 * @property {string} description - The meta description of the page
 */
export function updateHead(sectionName, sections) {
    console.log(`updateHead: Updating head for section "${sectionName}"`);

    // Check if the section exists
    const sectionData = sections[sectionName];
    if (!sectionData) {
        console.error(`updateHead: Section "${sectionName}" not found.`);
        return;
    }

    // Destructure title and description with fallback values
    const { title = 'HTML Basics', description = 'This page contains all the things I am learning how to create as I learn HTML.' } = sectionData;

    // Set the title of the page
    document.title = title;
    console.log(`updateHead: Updated page title to "${title}"`);

    // Set the meta description of the page
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = description;
        console.log(`updateHead: Updated meta description to "${description}"`);
    } else {
        console.warn('updateHead: Meta description element not found.');
    }
}
