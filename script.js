// HAMBURGERMENYN

const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuActive = document.querySelector(".hamburger-menu-active");
const navMenu = document.querySelector(".nav-menu");
const picture = document.querySelector(".logo-hamburger");
const contact = document.querySelector(".hamburger-contact");

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  picture.classList.toggle("active");
  contact.classList.toggle("active");
});

hamburgerMenuActive.addEventListener("click", () => {
  navMenu.classList.remove("active");
  picture.classList.remove("active");
  contact.classList.remove("active");
});

// document.querySelectorAll(".navlink").forEach((e) =>
//   e.addEventListener("click", () => {
//     hamburgerMenu.classList.remove("active");
//     navMenu.classList.remove("active");
//   })
// );

// E-MAILADRESSFÄLTET

const signUpField = document.querySelector(".email-input-field");

signUpField.addEventListener("keyup", (submit) => {
  if (submit.key === "Enter") {
    console.log(submit.target.value);
    signUpField.value = "";
  }
});

/* KOLLA VARFÖR DETTA INTE FUNKAR*/
const signUpFieldSecond = document.querySelector(".bottom-email-input-field");

signUpFieldSecond.addEventListener("keyup", (submit) => {
  if (submit.key === "Enter") {
    console.log(submit.target.value);
    signUpField.value = "";
  }
});
