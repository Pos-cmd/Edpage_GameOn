const header = document.querySelector(".header");
const menu = document.querySelector(".header__toggle");
const overlay = document.querySelector(".overlay");
const menu__togle = document.querySelector(".header__menu--toggle");
const show_form = document.querySelectorAll(".show_form");
const valid_form = document.querySelector(".valid_form");
const quit_form = document.querySelectorAll(".quit_form");
const main_container = document.querySelector(".main__container");
const form = document.querySelector(".form");
const form_input = document.querySelector(".form__items");
const form_success = document.querySelector(".form__success");

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
    form_input.style.display = "block";
  });
});

valid_form.addEventListener("click", function (e) {
  e.preventDefault();
  form_input.style.display = "none";
  form_success.style.display = "flex";
});

quit_form.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    form_success.style.display = "none";
    form.style.display = "none";
    main_container.style.display = "flex";
  });
});
