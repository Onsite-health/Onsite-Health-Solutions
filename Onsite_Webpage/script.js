document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('form-message').textContent = 'Thank you for contacting us! We will get back to you soon.';
    this.reset();
});
