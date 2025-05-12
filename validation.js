function Validation_login() {
    const email = document.querySelector("input[name='email']");
    const password = document.querySelector("input[name='user-password']");
    let validationMsg = document.querySelector(".validation-msg");
    let valid = true;
    let message = "";
    if (email.value === "" && password.value === "") {
        message = "please enter your email and password";
        valid = false;
    } else if (password.value === "") {
        message = "please enter your password";
        valid = false;
    } else if (email.value === "") {
        message = "please enter your email";
        valid = false;
    }
    validationMsg.textContent = message;
    validationMsg.style.color = "red";
    return valid;
}

function Validation_infos() {
    const firstName = document.querySelector("input[name='firstName']");
    const lastName = document.querySelector("input[name='familyName']");
    const email = document.querySelector("input[name='email']");
    const validationFirstName=document.querySelector(".validationFirstName");
    const validationLastName=document.querySelector(".validationLastName");
    const validationEmail=document.querySelector(".validationEmail");
    const addresse = document.querySelector("input[name='addresse']");
    const validationMsg = document.querySelector(".validation-msg");
    const age = document.querySelector("input[name='age']");
    const phoneNumber = document.querySelector("input[name='phoneNumber']");
    const password = document.querySelector("input[name='password']");
    const passwordConfiramation = document.querySelector("input[name='passwordConfirmation']");
    const ageValidation = document.querySelector(".age-validation");
    const phoneValidation = document.querySelector(".phoneValidation");
    const passwordValidation = document.querySelector(".passwordValidation");
    const passwordCnfValidation = document.querySelector(".passwordCnfValidation");
    const wilaya = document.querySelector("select[name='wilaya']");
    const wilayaValidation = document.querySelector(".wilayaValidation");
    const gender = document.querySelectorAll("input[name='gender']");
    const genderValidation = document.querySelector(".genderValidation");
    validationFirstName.textContent = "";
    validationLastName.textContent = "";
    validationEmail.textContent = "";
    ageValidation.textContent = "";
    phoneValidation.textContent = "";
    passwordValidation.textContent = "";
    passwordCnfValidation.textContent = "";
    wilayaValidation.textContent = "";
    genderValidation.textContent = "";
    var valid = true;
    // Check if the First Name, Last Name, E-mail, and Address fields are empty. 
    if (firstName.value === "" ) {
        validationFirstName.textContent = "enter your first name.";
        validationFirstName.style.color = "red";
        valid = false;
    }
    if (lastName.value === "" ) {
        validationLastName.textContent = "enter your family name.";
        validationLastName.style.color = "red";
        valid = false;
    }
    if (email.value === "" ) {
        validationEmail.textContent = "enter your email.";
        validationEmail.style.color = "red";
        valid = false;
    }
    // Verify if the user’s age is between 17 and 100 years. 
    if (age.value < 17 || age.value > 100) {
        ageValidation.textContent = "age must be between 17 and 100";
        ageValidation.style.color = "red";
        valid = false;
    }
    //Check if the phone number consists of 9 or 10 digits
    if (phoneNumber.value.length < 9 || phoneNumber.value.length > 10) {
        phoneValidation.textContent = "phone number must be consist of 9 or 10 digits";
        phoneValidation.style.color = "red";
        valid = false;
    }
    // ensure password contains at least 8 characters
    if (password.value.length < 8) {
        passwordValidation.textContent = "password must contain at least 8 characters";
        passwordValidation.style.color = "red";
        valid = false;
    } else if (passwordConfiramation.value !== password.value) {
        passwordCnfValidation.textContent = "password confirmation must be the same as password";
        passwordCnfValidation.style.color = "red";
        valid = false;
    }
    //Display a message to confirm the selections for the Wilaya and Gender fields.
    if (wilaya.value === "") {
        wilayaValidation.textContent = "you have to select your wilaya";
        wilayaValidation.style.color = "red";
        valid = false;
    }
    let genderSelected = false;
    for (i = 0; i < 2; i++) {
        if (gender[i].checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        genderValidation.textContent = "you have to select your gender";
        genderValidation.style.color = "red";
        valid = false;
    }
    return valid;
}
function Validation_order() {
    let valid = true;
    const language = document.querySelectorAll("input[name='language']");
    const languageValidation = document.querySelector(".languageValidation");
    const quantity = document.querySelector("select[name='quantity']");
    const quantityValidation = document.querySelector(".quantityValidation");
    //Display a message to confirm the selections for the language and Quantity fields. 
    var languageSelected = false;
    languageValidation.textContent = "";
    quantityValidation.textContent = "";
    for (i = 0; i < 4; i++) {
        if (language[i].checked) {
            languageSelected = true;
            break;
        }
    }
    if (!languageSelected) {
        languageValidation.textContent = "select a language";
        languageValidation.style.color = "red";
        valid = false;
    }
    if (quantity.value === "") {
        quantityValidation.textContent = "choose quantity ";
        quantityValidation.style.color = "red";
        valid = false;
    }
    return valid;
}