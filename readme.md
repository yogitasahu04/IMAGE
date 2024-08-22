## Documentation for Image Gallery Project

This documentation outlines the structure and functionality of the image gallery project, encompassing the HTML, CSS, and JavaScript files that constitute its implementation.

### 1. File Structure:

- `animal.html`: Contains images related to animals and birds.
- `cortoon.html`: Contains images related to cartoon characters.
- `fasion.html`: Contains images related to fashion.
- `food.html`: Contains images related to food.
- `front.html`: Serves as the landing page, providing navigation to different galleries.
- `nature.html`: Contains images related to nature.
- `place.html`: Contains images related to famous places.
- `second.html`: Displays thumbnails for each category and provides search functionality.
- `styles.css`: Defines the visual styling of the gallery elements and the lightbox.
- `script.js`: Handles the JavaScript logic for image display, lightbox functionality, and search functionality.

### 2. HTML Structure:

- **Common Structure:** 
    - `<!DOCTYPE html>`: Declares the document type as HTML5.
    - `<html lang="en">`: Defines the root element of the HTML document, specifying English as the language.
    - `<head>`: Contains metadata about the page, including the title, character set, viewport settings, and stylesheet link.
    - `<body>`: Contains the visible content of the page.
    - `<header class="header">`: Defines the header section, typically displaying the title or logo.
    - `<div class="gallery">`: Houses the collection of image thumbnails.
    - `</body>`: Ends the body section.
    - `</html>`: Ends the HTML document.

- **Image Thumbnails:**
    - Each image is represented by a `<div>` element inside the `.gallery` container.
    - `<h1>`: Display the name of the category.
    - `<img>`: Represents the image itself, including the `src` (image source) and `alt` (alternative text for accessibility).
    - `data-caption`: Custom attribute storing the caption text for the image.
    - `<div>`: Holds the title of the image in the gallery.

- **Lightbox:**
    - `<div id="lightbox" class="lightbox">`: The lightbox container, hidden by default.
    - `<span class="close">&times;</span>`: The close button for the lightbox.
    - `<img class="lightbox-content" id="lightbox-img" />`: Displays the enlarged image.
    - `<div id="caption">`: Holds the caption text.
    - `<a class="prev">&#10094;</a>`: The previous image button.
    - `<a class="next">&#10095;</a>`: The next image button.
    - `<button class="fullscreen" onclick="toggleFullScreen()">&#x26F6;</button>`: The fullscreen toggle button.
    - `<script src="script.js"></script>`: Includes the JavaScript file for dynamic functionality.

### 3. CSS Styling:

- **General Styling:**
    - Defines basic font, margin, padding, and background color for the body.
    - Styles the `.header` with background color, text color, padding, text alignment, and font size.

- **Gallery Styling:**
    - Sets the width, margin, display (grid), grid template columns, gap, and padding for `.gallery`.
    - Styles the image thumbnails (`img`) with width, height, cursor, border-radius, and hover effects.
    - Styles the image titles (`div`) with text alignment, margin, font size, font weight, and text color.

- **Lightbox Styling:**
    - Defines styles for the lightbox container, image, caption, close button, previous/next buttons, and fullscreen button, including positioning, visibility, background, padding, and hover effects.

### 4. JavaScript Functionality:

- **Image Display:**
    - Event listener attached to `.gallery` to detect clicks on images.
    - When an image is clicked, the lightbox is displayed, and the image source, caption, and current index are updated.

- **Lightbox Navigation:**
    - Event listeners attached to the close button, previous button, and next button to handle their respective actions.
    - `updateLightbox()` function updates the lightbox image and caption based on the current index.
    - Keyboard event listener for arrow keys (left/right) and Escape key to navigate the lightbox or close it.

- **Fullscreen Mode:**
    - `toggleFullScreen()` function handles the fullscreen mode, utilizing the `requestFullscreen()` and `exitFullscreen()` methods.
    - Adjusts the image width and height and padding for the lightbox accordingly.

- **Search Functionality (on second.html):**
    - Uses an `input` field for search input and an `onkeyup` event listener to trigger the search function.
    - The `searchImages()` function filters the image boxes based on the entered search term.
    - A "no matches found" message is displayed if no images match the search.

### 5. Usage:

- **Front Page:** Users navigate to the desired gallery using the links on the front page (`front.html`).
- **Gallery Pages:** Each gallery page (`animal.html`, `cortoon.html`, etc.) displays a grid of image thumbnails.
- **Lightbox:** Clicking on an image thumbnail opens the lightbox, displaying the enlarged image and caption.
- **Navigation:** Users can navigate through images using the previous/next buttons or arrow keys.
- **Fullscreen:** The fullscreen toggle button expands the lightbox image to full screen.

### 6. Additional Notes:

- **Image Optimization:** Images should be optimized for size and file format to ensure fast loading times.
- **Accessibility:** Use appropriate `alt` text for images to provide context for users who cannot see them.
- **Responsiveness:** Ensure the gallery is responsive and adapts well to different screen sizes.

This documentation provides a comprehensive overview of the image gallery project. For more detailed insights, refer to the individual code files.
