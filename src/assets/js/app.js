import "../scss/imports.scss";

// Load Event - run script once window has loaded
window.addEventListener("load", () => {
  function hamburger() {
    const hamburgerBtn = document.querySelector("#hamburger");
    const headerLinks = document.querySelector(".header__links");
    hamburgerBtn.addEventListener("click", () => {
      if (hamburgerBtn.classList.contains("open")) {
        hamburgerBtn.classList.remove("open");
        headerLinks.classList.remove("mobile-nav--animate");
      } else {
        hamburgerBtn.classList.add("open");
        headerLinks.classList.add("mobile-nav--animate");
      }
    });
  }

  hamburger();
});
