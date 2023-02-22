const header = document.querySelector(".header");
const menu = document.querySelector(".header__toggle");
const overlay = document.querySelector(".overlay");
const menu__togle = document.querySelector(".header__menu--toggle");

menu.addEventListener("click", function () {
  header.classList.toggle("open");
  if (header.classList.contains("open")) {
    overlay.style.display = "block";
    overlay.style.opacity = 1;
    menu__togle.style.display = "flex";
  } else {
    menu__togle.style.display = "none";
    overlay.style.opacity = 0;
    overlay.style.display = "none";
  }
});
