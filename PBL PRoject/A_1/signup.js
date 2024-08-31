document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle signup logic here (e.g., form validation, sending data to server)
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    alert('Sign-up button clicked. Implement sign-up functionality here.');
});
