const navBtn = document.querySelector(".nav-icon-btn");
const nav = document.querySelector(".header__top-row");
const navIcon = document.querySelector(".nav-icon");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("header__top-row--mobile");
  navIcon.classList.toggle("nav-icon--active");

  document.body.classList.toggle("no--scroll");
});
