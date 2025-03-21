const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Validate form inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const state = document.getElementById('state').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const address = document.getElementById('address').value.trim();
    const subject = document.getElementById('subject').value;

    if (!name || !email || !phone || !state || !gender || !address || !subject) {
        alert('Please fill in all required fields.');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate phone number format
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    // If all validations pass, submit the form
    alert('Registration successful!');
    form.reset();
});
