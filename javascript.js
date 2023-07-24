const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const password = document.getElementById("password");
const email = document.getElementById("email");
const confirmPassword = document.getElementById("confirmpassword");
const phoneNumber = document.getElementById("phone-number");
const errorMessagePassword = document.getElementById("error-message-password");
const errorMessageName = document.getElementById("error-message-name");
const errorMessagelastName = document.getElementById("error-message-last-name");
const errorMessagePhone = document.getElementById("error-message-phone");
const errorMessageEmail = document.getElementById("error-message-email");
const errorMessageConfirmPassword = document.getElementById("error-message-confirm-password");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {

    if (confirmPassword.value == password.value){

        if (password.value == null || password.value === ''){
            e.preventDefault();
            password.style.borderColor = "red";
            errorMessagePassword.textContent = "Must Enter Password";
        }

        else {
        confirmPassword.style.borderColor = "green";
        password.style.borderColor = "green";
        message.textContent = "Form Submitted";
        };
    };

    if (firstName.value == null || firstName.value === ''){
        e.preventDefault();
        firstName.style.borderColor = "red";
        errorMessageName.textContent = "Must Enter Name";
    };

    if (lastName.value == null || lastName.value === ''){
        e.preventDefault();
        lastName.style.borderColor = "red";
        errorMessagelastName.textContent = "Must Enter Name";
    };

    if (email.value == null || email.value === ''){
        e.preventDefault();
        email.style.borderColor = "red";
        errorMessageEmail.textContent = "Must Enter email";
    };

    if (phoneNumber.value.length != 10){
        e.preventDefault();
        phoneNumber.style.borderColor = 'red';
        errorMessagePhone.textContent = "Phone number must be 10 digits long"
    };

    if (password.value == null || password.value === ''){
        e.preventDefault();
        password.style.borderColor = "red";
        errorMessagePassword.textContent = "Must Enter Password";
    };

    if (confirmPassword.value != password.value){
        e.preventDefault();
        confirmPassword.style.borderColor = "red";
        password.style.borderColor = "red";
        errorMessageConfirmPassword.textContent = "Passwords do not match"
    };
});