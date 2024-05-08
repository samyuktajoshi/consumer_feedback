// script.js



// Function to toggle the menu for small screens

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const panel = document.getElementById('panel');

    menuButton.addEventListener('click', function () {
      // Toggle the visibility of the panel
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
  });

// You can add more JavaScript functions as needed
