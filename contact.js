// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the form and all the inputs
  const form = document.getElementById("contact-form");

  // Get each field from the form
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  // Get the paragraph elements that will show error messages
  const nameError = document.getElementById("test-contact-error-name");
  const emailError = document.getElementById("test-contact-error-email");
  const subjectError = document.getElementById("test-contact-error-subject");
  const messageError = document.getElementById("test-contact-error-message");

  // Get the success message paragraph
  const successMessage = document.getElementById("test-contact-success");

  // This pattern checks if an email looks like "something@something.com"
//   const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  // When the form is submitted, run this function
  form.addEventListener("submit", function (event) {
    // Stop the form from reloading the page
    event.preventDefault();

    // Before checking, clear all old error messages
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    successMessage.hidden = true;

    // This variable will track if all inputs are valid
    let isFormValid = true;

    // ✅ Check Full Name
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Full name is required.";
      isFormValid = false;
    }

    // ✅ Check Email
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Email is required.";
      isFormValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email (name@example.com).";
      isFormValid = false;
    }

    // ✅ Check Subject
    if (subjectInput.value.trim() === "") {
      subjectError.textContent = "Subject is required.";
      isFormValid = false;
    }

    // ✅ Check Message
    if (messageInput.value.trim() === "") {
      messageError.textContent = "Message is required.";
      isFormValid = false;
    } else if (messageInput.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      isFormValid = false;
    }

    // 🚫 If something is wrong, focus the first field with an error
    if (!isFormValid) {
      if (nameError.textContent) {
        nameInput.focus();
      } else if (emailError.textContent) {
        emailInput.focus();
      } else if (subjectError.textContent) {
        subjectInput.focus();
      } else if (messageError.textContent) {
        messageInput.focus();
      }
      return; // stop here, don't show success
    }

    // ✅ If everything is valid:
    // Clear the form fields
    form.reset();

    // Show the success message
    successMessage.hidden = false;

    // Move the screen reader / keyboard focus to the success message
    successMessage.focus();
  });
});
