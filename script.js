// HAMBURGERMENYN

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".navlink").forEach((e) =>
  e.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// E-MAILADRESSFÄLTET

const signUpField = document.querySelector(".email-input-field");

signUpField.addEventListener("keyup", (submit) => {
  if (submit.key === "Enter") {
    console.log(submit.target.value);
    signUpField.value = "";
  }
});
