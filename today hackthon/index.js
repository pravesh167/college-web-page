// Scroll to section function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Form validation function
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const messageDiv = document.getElementById('form-message');

    // Basic validation
    if (!name || !email || !message) {
        messageDiv.innerHTML = "<p style='color: red;'>All fields are required!</p>";
        return false;
    } else {
        messageDiv.innerHTML = "<p style='color: green;'>Thank you for contacting us. We will get back to you soon!</p>";
        return false; // Prevent form submission for demo purposes
    }
}
