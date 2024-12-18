/**
 * Asynchronously loads and inserts HTML content from a file into a specified DOM element.
 *
 * @param {string} id The ID of the DOM element where the content will be loaded.
 * @param {string} filePath The path to the HTML file to be loaded.
 * @returns {Promise<void>}
 */
export async function loadPartial(id, filePath) {
    const element = document.getElementById(id);

    // Fetch the content from the provided file path
    const response = await fetch(filePath);

    // Check if the response is not ok, throw an error
    if (!response.ok) {
        throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
    }

    // Extract text content from the response
    const content = await response.text();

    // Insert the fetched content into the specified DOM element
    element.innerHTML = content;
}

// Load partials
loadPartial('header', 'partials/header.html');
loadPartial('main', 'partials/main.html');
loadPartial('footer', 'partials/footer.html');
