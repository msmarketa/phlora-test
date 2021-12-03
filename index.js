const hamburger = document.querySelector(".mobile__hamburger");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  body.classList.toggle("overflow-hidden");
  hamburger.classList.contains("active") ? (hamburger.textContent = "×") : (hamburger.textContent = "☰");

  if (hamburger.classList.contains("active")) {
    document.querySelector(".header__link").addEventListener("click", () => {
      hamburger.classList.remove("active");
      body.classList.remove("overflow-hidden");
      hamburger.textContent = "☰";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const splide = new Splide(".splide", {
    width: "100%",
    fixedWidth: "25%",
    type: "loop",
    perPage: 1,
    breakpoints: {
      768: {
        fixedWidth: "100%",
      },
      1024: {
        fixedWidth: "50%",
      },
    },
    gap: "2px",
    pagination: false,
    cover: true,
  });
  splide.mount();
});
