/* 1. What is an HTML form?
A form collects information from the user.
Important elements include:
- <form>: contains the complete form.
- <label>: describes a form control.
- <input>: accepts user input.
- <select>: provides a list of options.
- <textarea>: accepts multi-line text.
- <button>: performs an action.
*/


/* id : Identifies the element in the DOM
for : Connects a label with an input
name : Identifies the value when form data is collected or submitted
*/
/*
The distinction is:
- id: DOM identification.
- name: form-data key.
- for: connects a label to an input’s id.
*/


/* 3. Button types
<button type="submit">Register</button> // It submits its form.
<button type="button">Show password</button> // This button does not submit the form.
<button type="reset">Clear</button> // This resets the controls to their initial values.
*/
// const titleInput = document.querySelector("#task-title");

// console.log(titleInput.value);
// const title = titleInput.value.trim();
// console.log(title);


// const ageInput = document.querySelector("#age");

// console.log(ageInput.value);        // "25"
// console.log(typeof ageInput.value); // "string"

// const termsInput = document.querySelector("#terms");
// console.log(termsInput.checked); // true or false

// const priorityInput = document.querySelector("#priority");
// console.log(priorityInput.value);

// const form = document.querySelector("#task-form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event);
// });

// preventDefault() prevents the browser’s default submission behaviour.
// It does not stop your JavaScript handler. It lets the handler continue running.

















































const form = document.querySelector(
    "#registration-form"
);
console.log(form);
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const termsInput = document.querySelector("#terms");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const termsError = document.querySelector("#terms-error");

const formStatus = document.querySelector("#form-status");

function showError(input, errorElement, message) {
    input.classList.add("invalid");
    errorElement.textContent = message;
}

function clearError(input, errorElement) {
    input.classList.remove("invalid");
    errorElement.textContent = "";
}

function clearAllErrors() {
    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(passwordInput, passwordError);
    clearError(termsInput, termsError);

    formStatus.textContent = "";
    formStatus.classList.remove("success");
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    clearAllErrors();

    let isValid = true;

    const name = nameInput.value.trim();
    console.log(name+"ii");
    const password = passwordInput.value;

    if (name === "") {
        showError(
            nameInput,
            nameError,
            "Name is required"
        );

        isValid = false;
    } else if (name.length < 2) {
        showError(
            nameInput,
            nameError,
            "Name must contain at least 2 characters"
        );

        isValid = false;
    }

    if (emailInput.validity.valueMissing) {
        showError(
            emailInput,
            emailError,
            "Email is required"
        );

        isValid = false;
    } else if (emailInput.validity.typeMismatch) {
        showError(
            emailInput,
            emailError,
            "Enter a valid email address"
        );

        isValid = false;
    }

    if (password === "") {
        showError(
            passwordInput,
            passwordError,
            "Password is required"
        );

        isValid = false;
    } else if (password.length < 8) {
        showError(
            passwordInput,
            passwordError,
            "Password must contain at least 8 characters"
        );

        isValid = false;
    }

    if (!termsInput.checked) {
        showError(
            termsInput,
            termsError,
            "You must accept the terms"
        );

        isValid = false;
    }

    if (!isValid) {
        formStatus.textContent =
            "Please correct the errors.";

        return;
    }

    const formData = new FormData(form);

    const registration = {
        name: formData.get("name"),
        email: formData.get("email"),
        role: formData.get("role"),
        acceptedTerms: termsInput.checked
    };

    console.log(registration);

    formStatus.textContent =
        `Account created for ${registration.name}.`;

    formStatus.classList.add("success");

    form.reset();
    nameInput.focus();
});



























































  