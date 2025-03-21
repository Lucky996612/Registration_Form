document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    // Name validation
    let name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Email validation
    let email = document.getElementById("email").value;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Password validation
    let password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
        isValid = false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }

    // Gender validation
    let gender = document.getElementById("gender").value;
    if (gender === "") {
        document.getElementById("genderError").innerText = "Please select a gender.";
        isValid = false;
    } else {
        document.getElementById("genderError").innerText = "";
    }

    // Terms validation
    let terms = document.getElementById("terms").checked;
    if (!terms) {
        document.getElementById("termsError").innerText = "You must agree to the terms.";
        isValid = false;
    } else {
        document.getElementById("termsError").innerText = "";
    }

    // If all inputs are valid, submit the form
    if (isValid) {
        alert("Registration successful!");
    }
});
