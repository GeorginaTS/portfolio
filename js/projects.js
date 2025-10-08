const projectsList = [
  {
    id: 3,
    name: "FakestoreAPI",
    description:
      "Vue.js application that consumes the Fakestore API, displaying products, searching and filtering.",
    technologies: ["Vue.js", "Tailwind", "JavaScript"],
    link: "https://ashy-ground-02cd81d10.6.azurestaticapps.net/",
    github: "https://github.com/GeorginaTS/Vue-project1",
  },
  {
    id: 2,
    name: "Mels del Montnegre",
    description:
      "Responsive website for a local business, created with html, css and javascript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://georginats.github.io/mels_montnegre/",
    github: "https://github.com/GeorginaTS/mels_montnegre",
  },
  {
    id: 1,
    name: "TodoApp",
    description:
      "Little Todo App, with Drag and Drop functionality, created with Vue.js, Tailwind, Node.js and Express.",
    technologies: ["Vue.js", "Tailwind", "Node.js", "Express", "JavaScript"],
    link: "https://calm-smoke-01af5fd10.6.azurestaticapps.net/#/",
    github: "https://github.com/GeorginaTS/todo-app",
  },
  {
    id: 4,
    name: "Caseus",
    description:
      "A comprehensive hybrid application built with Ionic 8 and Angular 20 for artisan cheese enthusiasts. Caseus enables users to document their cheese-making journey, explore global cheese varieties, and connect with a vibrant community of cheese makers and enthusiasts.",
    technologies: [
      "Angular.js",
      "Tailwind",
      "Typescript",
      "Ionic",
      "Express",
      "Node.js",
      "MongoDB",
      "firebase",
      "Leaflet",
    ],
    link: "https://cheese-29925.web.app/",
    github: "https://github.com/GeorginaTS/ionic-cheese",
  },
  {
    id: 5,
    name: "Boletus",
    description:
      "A modern hybrid mobile application built with Ionic React and TypeScript for mushroom enthusiasts to discover, track, and share mushroom locations with an integrated Google Maps system and comprehensive location management.",
    technologies: [
      "React.js",
      "Typescript",
      "Ionic",
      "Capacitor",
      "Firebase Authentication",
      "Firebase Storage",
      "GoogleMaps API",
    ],
    link: "https://boletus-eb305.web.app/",
    github: "https://github.com/GeorginaTS/boletus",
  },
];

const header = document.querySelector("header");
const projectsSection = document.getElementById("projects");
const showProjects = () => {
  console.log("showProjects called");
  header.style.display = "flex";
  //header.classList.add("showLeft");
  projectsSection.style.display = "flex";
  // projectsSection.classList.add("showTop");

  const ul = document.createElement("ul");
  projectsSection.appendChild(ul);

  let i = 0;
  for (project of projectsList.reverse()) {
    i++;
    const li = document.createElement("li");
    li.innerHTML = `<article id ="project${i}">
                    <div class="project-img">
                        <img src="./assets/img/projects/project${project.id}.png" alt="${project.name}" />
                        <h4> <span>${project.name} </span></h4></div>
                        <p>${project.description}</p><hr>
                        <div class="project-links"><a href="${project.link}" target="_blank"><img src="./assets/img/logos/browser-window-2-svgrepo-com.svg" alt="New Browser" /></a> <a href="${project.github}" target="_blank"><img src="./assets/img/logos/github-142-svgrepo-com.svg" alt="Github" /></a></div>
                        </article>`;
    ul.appendChild(li);
    li.classList.add("skills-box");
    li.classList.add("showBottom");
  }
};
showProjects();

const avatar = document.getElementById("avatar");
avatar.addEventListener("click", () => {
  document.location.href = "index.html";
});
