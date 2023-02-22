const header = document.querySelector(".header");
const menu = document.querySelector(".header__toggle");
const overlay = document.querySelector(".overlay");
const menu__togle = document.querySelector(".header__menu--toggle");

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
