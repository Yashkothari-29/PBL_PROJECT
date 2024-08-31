// Placeholder for future payment processing logic

document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.querySelector('.payment-form');

    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        alert('Your payment has been successfully processed!');
        paymentForm.reset(); // Reset the form after submission
    });
});
