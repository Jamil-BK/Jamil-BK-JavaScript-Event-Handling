// Mouse Events Section - Ripple Effect and Changing Message
const mouseButton = document.getElementById('mouseButton');
const messageBox = document.getElementById('messageBox');

// Hover event - change button color and message
mouseButton.addEventListener('mouseover', function () {
    // Reset classes first
    messageBox.classList.remove("clicked");
    messageBox.classList.remove("hovering");

    // Then add hover class
    messageBox.textContent = "You are hovering over the button!";
    messageBox.classList.add("hovering");  
    mouseButton.style.backgroundColor = 'lightblue';  
});

// Mouse leave event - reset button color and message
mouseButton.addEventListener('mouseout', function () {
    // Reset classes first
    messageBox.classList.remove("clicked");
    messageBox.classList.remove("hovering");

    // No hover/click class now
    messageBox.textContent = "You left the button!";
    mouseButton.style.backgroundColor = '';  
});

// Click event - add ripple effect and change message
mouseButton.addEventListener('click', function (event) {
    // Create the ripple element
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = mouseButton.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    mouseButton.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });

    // Reset hover class
    messageBox.classList.remove("hovering");
    messageBox.classList.remove("clicked");

    // Add clicked class
    messageBox.textContent = "Button clicked!";
    messageBox.classList.add("clicked");
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


// Focus and Blur Events Section
// Focus and Blur Events Section
// Focus and Blur Events Section
const focusInput = document.getElementById('focusInput');
const focusMessage = document.getElementById('focusMessage');

// When input gains focus
focusInput.addEventListener('focus', function () {
    focusMessage.textContent = "Input is active!";
    focusMessage.style.color = "#8B0000"; // Deep Red
    focusMessage.style.fontSize = "2.3rem"; // Bigger font
    focusMessage.style.backgroundColor = "#e0f7fa"; // Light background
});

// When input loses focus
focusInput.addEventListener('blur', function () {
    focusMessage.textContent = "Input is inactive.";
    focusMessage.style.color = "#004085"; // Deep Blue
    focusMessage.style.fontSize = "1.8rem"; // Reset to original smaller font
    focusMessage.style.backgroundColor = "#f9f9f9"; // Default background
});

