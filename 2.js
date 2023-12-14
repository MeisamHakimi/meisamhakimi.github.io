// Add a click event to the "Contact Us" paragraph
const contactUs = document.getElementById('contactUs');
contactUs.addEventListener('click', function() {
alert('Thank you for contacting us! We will get back to you shortly.');
});

function addRoom() {
    const roomList = document.querySelector('.two');
    const newRoom = document.createElement('li');
    newRoom.textContent = 'New Room';
    roomList.appendChild(newRoom);
}

// Function to add a new service to the list of services
function addService() {
    const serviceList = document.querySelector('ol');
    const newService = document.createElement('li');
    newService.textContent = 'New Service';
    serviceList.appendChild(newService);
}

// Function to add a new quote to the blockquote
function addQuote() {
    const quote = document.querySelector('blockquote');
    const newQuote = document.createElement('p');
    newQuote.textContent = '"A new quote added to the blockquote."';
    quote.appendChild(newQuote);
}

// Function to change the header text
function changeHeaderText() {
    const header = document.querySelector('h1');
    header.textContent = 'Welcome to Hotel ABC';
}

// Function to change the text of the first room
function changeRoomText() {
    const roomList = document.querySelector('ul');
    const firstRoom = roomList.querySelector('li'); // Assuming the first room is the first 'li' element
    firstRoom.textContent = 'Updated Single Room - $120 per night'; // Change the text of the first room
}