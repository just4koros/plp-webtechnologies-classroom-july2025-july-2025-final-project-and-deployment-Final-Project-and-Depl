document.addEventListener('DOMContentLoaded', () => {
    // Check if the contact form exists on the current page
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();

            // Get form elements
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const formMessage = document.getElementById('form-message');

            // Simple validation logic
            // An empty string is considered a "falsy" value
            if (name === '' || email === '' || message === '') {
                formMessage.textContent = "Please fill out all fields.";
                formMessage.className = 'form-message error';
                return; // Stop the function here if validation fails
            }

            // A very simple email format check
            if (!email.includes('@')) {
                formMessage.textContent = "Please enter a valid email address.";
                formMessage.className = 'form-message error';
                return;
            }

            // If all validation passes
            formMessage.textContent = "Form submitted successfully! Thank you for your message.";
            formMessage.className = 'form-message success';
            contactForm.reset(); // Clear the form fields
        });
    }
});