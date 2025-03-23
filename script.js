document.getElementById("registrationForm").onsubmit = function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const dob = document.getElementById("dob").value;
            const state = document.getElementById("state").value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const address = document.getElementById("address").value;
            const subject = document.getElementById("subject").value;

            if (name && email && phone && state && gender && address && subject) {
                alert(`Registration Successful!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nState: ${state}\nGender: ${gender}\nAddress: ${address}\nSubject: ${subject}`);
            } else {
                alert("Please fill out all fields correctly.");
            }
        };