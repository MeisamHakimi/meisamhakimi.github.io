const welcomeHeader = document.getElementById('welcome');

// Adding a mouseout event to the "welcome" header
welcomeHeader.addEventListener('mouseout', function() {
    // Modify the style on mouseout
    this.style.fontSize = '1em'; // Change the font size to 2em
});

// Function to create an object from input pairs and display it
function createObject1() {
    const nameInput = document.getElementById('name1').value;
    const valueInput = document.getElementById('value1').value;

    // Create an object from the inputs
    const newObj = {};
    newObj[nameInput] = valueInput;

    // Create a new element to display the object
    const displayDiv = document.getElementById('displayObject1');
    const newObjElement = document.createElement('p');
    newObjElement.textContent = JSON.stringify(newObj);

    // Append the object element to the display area
    displayDiv.appendChild(newObjElement);
}

function createObject2() {
    const nameInput = document.getElementById('name2').value;
    const valueInput = document.getElementById('value2').value;

    // Create an object from the inputs
    const newObj = {};
    newObj[nameInput] = valueInput;

    // Create a new element to display the object
    const displayDiv = document.getElementById('displayObject2');
    const newObjElement = document.createElement('p');
    newObjElement.textContent = JSON.stringify(newObj);

    // Append the object element to the display area
    displayDiv.appendChild(newObjElement);
}

function createObject3() {
    const nameInput = document.getElementById('name3').value;
    const valueInput = document.getElementById('value3').value;

    // Create an object from the inputs
    const newObj = {};
    newObj[nameInput] = valueInput;

    // Create a new element to display the object
    const displayDiv = document.getElementById('displayObject3');
    const newObjElement = document.createElement('p');
    newObjElement.textContent = JSON.stringify(newObj);

    // Append the object element to the display area
    displayDiv.appendChild(newObjElement);
}