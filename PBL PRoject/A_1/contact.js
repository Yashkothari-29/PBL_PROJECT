// Placeholder for form submission functionality

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        alert('Thank you for reaching out! We will get back to you soon.');
        contactForm.reset(); // Reset the form after submission
    });
});
