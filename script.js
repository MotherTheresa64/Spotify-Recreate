// Validate email format
function validateEmail(email) {
  const pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return pattern.test(email);
}

// Validate password requirements
function validatePassword(password) {
  return password.length >= 6;
}

// Collect form data into an object
function collectFormData() {
  return {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value.trim(),
    agreedToTerms: document.getElementById("termsCheck").checked
  };
}

// Main handler for form submission
function handleFormSubmission(event) {
  event.preventDefault();
  const formData = collectFormData();

  if (!validateEmail(formData.email)) {
    alert("Invalid email format.");
    return;
  }

  if (!validatePassword(formData.password)) {
    alert("Password must be at least 6 characters.");
    return;
  }

  if (!formData.agreedToTerms) {
    alert("You must agree to the terms.");
    return;
  }

  console.log("Form submitted successfully:", formData);
  alert("Form submitted successfully!");
}
