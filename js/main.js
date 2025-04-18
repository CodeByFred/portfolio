const body = document.querySelector("body");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav__link-page");
const form = document.querySelector(".contact-form");

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

form.addEventListener("submit", () => {
  setTimeout(() => {
    form.reset();
  }, 1500);
});

const projects = [
  {
    image: "../assets/images/tpcc.jpg",
    title: "The Pink Coffee Corner",
    description:
      "As part of learning foundational web development skills, a fictional café website was developed from an image.",
    tools: ["HTML", "CSS"],
  },
  {
    image: "../assets/images/hangman.jpg",
    title: "Hangman",
    description:
      "The classic hangman game made with a clean design and interactive vanilla JavaScript",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "../assets/images/morse.jpg",
    title: "Morse Code Translator",
    description:
      "A Morse code translator that allows users to convert between English text and Morse code.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "../assets/images/project-placeholder.png",
    title: "Google Books API",
    description:
      "This is a sample project holder. The project will be built at a later date.",
    tools: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    image: "../assets/images/project-placeholder.png",
    title: "E-Commerce Site",
    description:
      "This is a sample project holder. The project will be built at a later date.",
    tools: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    image: "../assets/images/project-placeholder.png",
    title: "Minesweeper",
    description:
      "This is a sample project holder. The project will be built at a later date.",
    tools: ["HTML", "CSS", "JavaScript", "Java"],
  },
  {
    image: "../assets/images/mqsf.jpg",
    title: "MQ Safety First",
    description:
      "An honours degree thesis developing a duress alarm mobile app to enhance the safety of lone workers.",
    tools: ["Figma", "Dart", "Flutter", "Firebase"],
  },
  {
    image: "../assets/images/flashback.jpg",
    title: "Flashback",
    description:
      "A basic photo storage app built to learn the fundamentals of the framework and to implement CRUD functionality",
    tools: ["React Native"],
  },
];

const container = document.querySelector("#projects-container");
const template = document.querySelector("#project-template");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  clone.querySelector(".projects-card__image").src = project.image;
  clone.querySelector(".projects-card__title").textContent = project.title;
  clone.querySelector(".projects-card__text").textContent = project.description;

  const toolsContainer = clone.querySelector(".projects-card__container-tool");
  project.tools.forEach((tool) => {
    const toolTag = document.createElement("p");
    toolTag.className = "projects-card__text--tool";
    toolTag.textContent = tool;
    toolsContainer.appendChild(toolTag);
  });

  container.appendChild(clone);
});
