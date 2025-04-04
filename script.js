// ===================
// Mouse Events Section - Ripple Effect and Changing Message
// ===================
const mouseButton = document.getElementById('mouseButton');
const messageBox = document.getElementById('messageBox');

// Hover event - change button color and message
mouseButton.addEventListener('mouseover', function () {
    messageBox.textContent = "You are hovering over the button!";
    messageBox.classList.add("hovering");  // Add hover class to message box
    mouseButton.style.backgroundColor = 'lightblue';  // Change button color on hover
});

// Mouse leave event - reset button color and change message
mouseButton.addEventListener('mouseout', function () {
    messageBox.textContent = "You left the button!";
    messageBox.classList.remove("hovering");
    mouseButton.style.backgroundColor = '';  // Reset button color when mouse leaves
});

// Click event - add ripple effect and change message
mouseButton.addEventListener('click', function (event) {
    // Create the ripple element
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    // Get button dimensions and position
    const rect = mouseButton.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    // Set ripple size and position
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Append ripple to the button
    mouseButton.appendChild(ripple);

    // Remove ripple after animation ends
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });

    // Change message on click
    messageBox.textContent = "Button clicked!";
    messageBox.classList.add("clicked");  // Add clicked class to message box
});

// ===================
// Keyboard Events Section - Display last key pressed
// ===================
const keyboardInput = document.getElementById("keyboardInput");
const keyPressed = document.getElementById("keyPressed");

// Event listener for any key press
keyboardInput.addEventListener("keydown", function(event) {
    // Update the result box with the pressed key
    keyPressed.textContent = `Last key pressed: ${event.key}`;
});

// ===================
// Form Events Section
const userForm = document.getElementById('userForm');
const usernameInput = document.getElementById('username');
const formMessageBox = document.getElementById('formMessageBox');
const resetButton = document.getElementById('resetButton');

// Handle form submission
userForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page from refreshing

    // Show success message and Reset button
    formMessageBox.style.display = 'block';
    resetButton.style.display = 'inline-block';
});

// Handle Reset button click
resetButton.addEventListener('click', function() {
    usernameInput.value = '';             // Clear the username input
    formMessageBox.style.display = 'none'; // Hide the success message
    resetButton.style.display = 'none';    // Hide the reset button again
});

