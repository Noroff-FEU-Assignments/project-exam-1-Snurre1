const form = document.querySelector("form");
const peepsname = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const nameError = document.querySelector("#nameError");
const subjectError = document.querySelector("#subjectError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");
const passed = document.querySelector(".passed");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(peepsname.value, 4) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (checkLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
  if (checkLength(message.value, 25) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (
    checkLength(peepsname.value, 4) === true &&
    checkLength(subject.value, 15) === true &&
    checkLength(message.value, 25) &&
    validateEmail(email.value) === true
  ) {
    passed.style.display = "block";
  }
}
form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
