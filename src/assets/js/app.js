import "../scss/imports.scss";

// Load Event - run script once window has loaded
window.addEventListener("load", () => {
  function hamburger() {
    const hamburgerBtn = document.querySelector("#hamburger");
    hamburgerBtn.addEventListener("click", () => {
      if (hamburgerBtn.classList.contains("open")) {
        hamburgerBtn.classList.remove("open");
      } else {
        hamburgerBtn.classList.add("open");
      }
    });
  }

  hamburger();
});
