export function updateHead(sectionName, sections) {
    const sectionData = sections[sectionName];

    if (!sectionData) {
        console.error(`Section "${sectionName}" not found.`);
        return;
    }

    const { title, description } = sectionData;

    document.title = title || 'HTML Basics';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = description || 'This page contains all the things I am learning how to create as I learn HTML.';
    }
}
