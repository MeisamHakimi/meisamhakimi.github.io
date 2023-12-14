// Function to handle the image click event
function enlargeImage(event) {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();

    // Get the image element that was clicked
    const image = event.target;

    // Add a CSS class to enlarge the clicked image
    image.classList.add('enlarged');

    // Remove the 'enlarged' class after a delay (e.g., 2 seconds)
    setTimeout(() => {
        image.classList.remove('enlarged');
    }, 1000); // Adjust the delay as needed
}

// Add click event listeners to the images
const htmlImage = document.getElementById('htmlImage');
const hotelImage = document.getElementById('hotelImage');
const onlineShopImage = document.getElementById('onlineShopImage');

htmlImage.addEventListener('mouseover', enlargeImage);
hotelImage.addEventListener('mouseover', enlargeImage);
onlineShopImage.addEventListener('mouseover', enlargeImage);
