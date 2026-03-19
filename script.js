'use strict';

// Function to handle form submission
const handleSubmit = async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    // You can add code here to send the email to your server
    console.log(`Email collected: ${email}`);
};

// Event listener for the form
document.getElementById('emailForm').addEventListener('submit', handleSubmit);
