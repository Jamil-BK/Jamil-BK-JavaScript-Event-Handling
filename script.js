// Mouse Events Section - Ripple Effect and Changing Message
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
