const body = document.querySelector("body");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav__link-page");

function openNav() {
  body.style.gridTemplateColumns = "225px auto";
  const nav = document.querySelector(".nav");
  nav.classList.remove("collapsed");
  nav.classList.add("expanded");
}

function closeNav() {
  body.style.gridTemplateColumns = "60px auto";
  const nav = document.querySelector(".nav");
  nav.classList.remove("expanded");
  nav.classList.add("collapsed");
}

function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}

function handleScroll() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", debounce(handleScroll, 50));
handleScroll();
