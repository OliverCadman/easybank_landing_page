document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");

  form.addEventListener("submit", function (event) {
    let isValid = true;

    // Clear any previous error messages
    const previousErrors = form.querySelectorAll(".error-message");
    previousErrors.forEach((error) => error.remove());

    // First Name validation
    const firstName = form.querySelector("#firstName");
    if (firstName.value.trim() === "") {
      isValid = false;
      displayError(firstName, "First Name is required.");
    }

    // Last Name validation
    const lastName = form.querySelector("#lastName");
    if (lastName.value.trim() === "") {
      isValid = false;
      displayError(lastName, "Last Name is required.");
    }

    // Telephone validation
    const telephone = form.querySelector("#telephone");
    if (telephone.value.trim() === "") {
      isValid = false;
      displayError(telephone, "Telephone is required.");
    } else if (!/^\d{11,12}$/.test(telephone.value.trim())) {
      isValid = false;
      displayError(
        telephone,
        "Telephone should contain only 11 or 12 numbers."
      );
    }

    // Email validation
    const email = form.querySelector("#email");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email.value.trim())) {
      isValid = false;
      displayError(email, "Please enter a valid email.");
    }

    // Dropdown validation
    const hearAboutUs = form.querySelector("#hearAboutUs");
    if (hearAboutUs.value.trim() === "") {
      isValid = false;
      displayError(hearAboutUs, "Please select an option.");
    }

    if (!isValid) {
      event.preventDefault(); // Prevent form submission
    } else {
      alert("Form submitted successfully!");
      // You can remove the alert and handle further AJAX submission or any other logic here
    }
  });

  function displayError(element, message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.innerText = message;
    errorDiv.style.color = "red"; // Adjust styling as needed
    element.parentElement.appendChild(errorDiv);
  }
});
