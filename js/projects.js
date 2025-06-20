
const projectsList = [
    {
        id: 1,
        name: "TodoApp",
        description: "Little Todo App, with Drag and Drop functionality, created with Vue.js, Tailwind, Node.js and Express.",   
        technologies: ["Vue.js","Tailwind", "Node.js", "Express", "JavaScript"],
        link: "https://calm-smoke-01af5fd10.6.azurestaticapps.net/#/",
        github: "https://github.com/GeorginaTS/todo-app"
    },
    {
        id: 2,
        name: "Mels del Montnegre",
        description: "Responsive website for a local business, created with html, css and javascript.",
        technologies: ["HTML","CSS", "JavaScript"],
        link: "https://georginats.github.io/mels_montnegre/",
        github: "https://github.com/GeorginaTS/mels_montnegre"             
    },     
    {
        id: 3,
        name: "FakestoreAPI",
        description: "Vue.js application that consumes the Fakestore API, displaying products, searching and filtering.",
        technologies: ["Vue.js","Tailwind", "JavaScript"],
        link: "https://ashy-ground-02cd81d10.6.azurestaticapps.net/",
        github: "https://github.com/GeorginaTS/Vue-project1"             
    }
]

const header = document.querySelector("header");
const projectsSection = document.getElementById("projects");
const showProjects = () => {
  console.log("showProjects called");
  header.style.display = "flex";  
  header.classList.add("showLeft");
  projectsSection.style.display = "flex";
  projectsSection.classList.add("showTop");

  const ul = document.createElement("ul");
  projectsSection.appendChild(ul);

  let i = 0;
  for (project of projectsList) {
    i++;
    const li = document.createElement("li");
    li.innerHTML = `<article id ="project${i}" ><h4> ${project.name} </h4><hr><p>${project.description}</p><hr><div><a href="${project.link}" target="_blank"><img src="./assets/img/logos/browser-window-2-svgrepo-com.svg" alt="New Browser" /></a> <a href="${project.github}" target="_blank"><img src="./assets/img/logos/github-142-svgrepo-com.svg" alt="Github" /></a></div></article>`;
    ul.appendChild(li);
    li.classList.add("skills-box");
    li.classList.add("showLeft");
  }
};
showProjects();