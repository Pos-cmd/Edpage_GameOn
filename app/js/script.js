const header = document.querySelector(".header");
const menu = document.querySelector(".header__toggle");
const overlay = document.querySelector(".overlay");
const menu__togle = document.querySelector(".header__menu--toggle");
const show_form = document.querySelectorAll(".show_form");
const quit_form = document.querySelectorAll(".quit_form");
const main_container = document.querySelector(".main__container");
const form_input = document.querySelector(".form__items");
const form_success = document.querySelector(".form__success");
const townInputs = document.querySelectorAll(".town");
const townList = document.querySelector(".radio");
const smallList = document.querySelectorAll("small");
const inputList = document.querySelectorAll("input");

const form = document.getElementById("form");
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const birthdayInput = document.getElementById("birthday");
const nb_ParticipationInput = document.getElementById("nb-participation");
const validCheckbox = document.getElementById("validCheckbox");

//*************Function***************//

function isValidName(name) {
  // le nom et prénom doivent avoir plus de 3 caractères et ne contenant pas de chiffre
  const regex = /^[a-zA-Z'\-]{3,}$/;
  return regex.test(name.value);
}

function isValidEmail(email) {
  // L’email doit avoir un format valide
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.value);
}

function isValidDate(input) {
  let selectDate = new Date(input.value);
  let age = new Date().getFullYear() - selectDate.getFullYear();
  if (age >= 10) {
    return true;
  }
  return false;
}

function isTownSelected() {
  // Au moins une ville doit être choisie
  return [...townInputs].some((town) => town.checked);
}

function isValidNumber(input) {
  if (
    input.value != "" &&
    Number.isInteger(Number(input.value)) &&
    input.value >= 0
  ) {
    return true;
  }
  return false;
}

function setError(input, message) {
  const formItem = input.parentElement;
  const small = formItem.querySelector("small");

  if (formItem.classList.contains("success")) {
    formItem.classList.remove("success");
  }

  if (!formItem.classList.contains("error")) {
    formItem.className += " error";
  }
  small.innerText = message;
}

function setSuccess(input) {
  const formItem = input.parentElement;
  const small = formItem.querySelector("small");

  if (formItem.classList.contains("error")) {
    formItem.classList.remove("error");
  }

  if (!formItem.classList.contains("success")) {
    formItem.className += " success";
  }
  small.innerText = "Champ valide.";
}

//*************EventListener***************//

menu.addEventListener("click", function () {
  header.classList.toggle("open");
  if (header.classList.contains("open")) {
    overlay.style.display = "block";
    overlay.style.opacity = 1;
    menu__togle.style.transform = "translateY(0)";
  } else {
    menu__togle.style.transform = "translateY(-200%)";
    overlay.style.opacity = 0;
  }
});

show_form.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("click");
    main_container.style.display = "none";
    form.style.display = "block";
    form_input.style.display = "grid";
  });
});

let hasError = {};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!isValidName(firstNameInput)) {
    let msg =
      "Le prénom doit avoir plus de 3 caractères et ne doit pas contenir de chiffres.";
    setError(firstNameInput, msg);
    hasError.firstNameInput = true;
  } else {
    setSuccess(firstNameInput);
    hasError.firstNameInput = false;
  }

  if (!isValidName(lastNameInput)) {
    let msg =
      "Le nom doit avoir plus de 3 caractères et ne doit pas contenir de chiffres.";
    setError(lastNameInput, msg);
    hasError.lastNameInput = true;
  } else {
    setSuccess(lastNameInput);
    hasError.lastNameInput = false;
  }

  if (!isValidEmail(emailInput)) {
    let msg = "L'e-mail doit avoir un format valide.";
    setError(emailInput, msg);
    hasError.emailInput = true;
  } else {
    setSuccess(emailInput);
    hasError.emailInput = false;
  }

  if (!isValidDate(birthdayInput)) {
    let msg = "Vous devez avoir plus de 10 ans.";
    setError(birthdayInput, msg);
    hasError.birthdayInput = true;
  } else {
    setSuccess(birthdayInput);
    hasError.birthdayInput = false;
  }

  if (!isValidNumber(nb_ParticipationInput)) {
    let msg = "Veuillez renseignez votre nombre de participation.";
    setError(nb_ParticipationInput, msg);
    hasError.nb_ParticipationInput = true;
  } else {
    setSuccess(nb_ParticipationInput);
    hasError.nb_ParticipationInput = false;
  }

  if (!isTownSelected()) {
    let msg = "Veuillez sélectionner au moins une ville.";
    setError(townList, msg);
    hasError.townList = true;
  } else {
    setSuccess(townList);
    hasError.townList = false;
  }

  if (!validCheckbox.checked) {
    let msg = "Veuillez lire et valider les conditions d'utilisation.";
    setError(validCheckbox, msg);
    hasError.validCheckbox = true;
  } else {
    setSuccess(validCheckbox);
    hasError.validCheckbox = false;
  }

  if (!Object.entries(hasError).some(error => error[1])) {
    form_input.style.display = "none";
    form_success.style.display = "flex";
    [...smallList].forEach((small) => (small.innerText = ""));
    [...inputList].forEach((input) => {
      (input.value = ""), (input.checked = false);
    });
  }
});

quit_form.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    form_success.style.display = "none";
    form.style.display = "none";
    main_container.style.display = "flex";
    [...smallList].forEach((small) => (small.innerText = ""));
  });
});
