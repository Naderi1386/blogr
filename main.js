// show header box
const myLi = document.querySelector(".li-js");
const myMenuBox = document.querySelector(".header__links_box");
const myArrowBtn = document.querySelector(".header__menu__arrow-open");
let count_menu = 0;

myLi.addEventListener("click", (e) => {
  e.preventDefault();
  if (count_menu == 0) {
    count_menu++;
    myMenuBox.classList.add("show-box");
    myArrowBtn.classList.add("rotate");
  } else {
    count_menu = 0;
    myMenuBox.classList.remove("show-box");
    myArrowBtn.classList.remove("rotate");
  }
});

// header menu mobile
const Open_btn = document.querySelector(".header_open-btn");
const close_btn = document.querySelector(".header_close-btn");
const myLi_mobile = document.querySelector(".li-js-mobile");
const mySecondBox = document.querySelector(".header__second__box");
const myMobileMenu = document.querySelector(".header__menu__mobile-wrraper");
const myArrow_openBtn = document.querySelector(
  ".header__menu__arrow-open-mobile"
);
let count_mobile = 0;

Open_btn.addEventListener("click", () => {
  myMobileMenu.classList.add("show");
  Open_btn.classList.add("hide");
  close_btn.classList.add("show");
});
close_btn.addEventListener("click", () => {
  myMobileMenu.classList.remove("show");
  Open_btn.classList.remove("hide");
  close_btn.classList.remove("show");
  mySecondBox.classList.remove("flex-second-box");
  myArrow_openBtn.classList.remove("rotate");
  count_mobile = 0;
});
myLi_mobile.addEventListener("click", (e) => {
  e.preventDefault();
  if (count_mobile == 0) {
    count_mobile++;
    myArrow_openBtn.classList.add("rotate");
    mySecondBox.classList.add("flex-second-box");
  } else {
    count_mobile = 0;
    myArrow_openBtn.classList.remove("rotate");
    mySecondBox.classList.remove("flex-second-box");
  }
});
