
const projectsList = [
    {
        id: 1,
        name: "TodoApp",
        description: "A brief description of Project A.",   
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://example.com/project-a",
        github: "https://github.com/username/project-a"
    },
    {
        id: 2,
        name: "TodoApp",
        description: "A brief description of Project B.",
        technologies: ["Vue.js","Tailwind", "Node.js", "Express"],
        link: "https://example.com/project-b",
        github: "https://github.com/username/project-b"             
    },     
    {
        id: 3,
        name: "Trima",
        description: "A brief description of Project C.",
        technologies: ["Vue.js","Tailwind", "Node.js", "Express"],
        link: "https://example.com/project-b",
        github: "https://github.com/username/project-b"             
    }, 
    {
        id: 4,
        name: "Portfolio",
        description: "A brief description of Project D.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://example.com/project-d",
        github: "https://github.com/username/project-d"
    },
    {
        id: 5,
        name: "Weather App",
        description: "A brief description of Project E.",
        technologies: ["React", "Tailwind", "Node.js", "Express"],
        link: "https://example.com/project-e",
        github: "https://github.com/username/project-e"
    },
    {
        id: 6,
        name: "E-commerce",
        description: "A brief description of Project F.",
        technologies: ["React", "Tailwind", "Node.js", "Express"],
        link: "https://example.com/project-f",
        github: "https://github.com/username/project-f"
    },
    {
        id: 7,
        name: "Blog Platform",
        description: "A brief description of Project G.",
        technologies: ["Vue.js", "Tailwind", "Node.js", "Express"],
        link: "https://example.com/project-g",
        github: "https://github.com/username/project-g"             
    },
    {
        id: 8,
        name: "Chat Application",
        description: "A brief description of Project H.",
        technologies: ["React", "Tailwind", "Node.js", "Express"],
        link: "https://example.com/project-h",
        github: "https://github.com/username/project-h"
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
    li.innerHTML = `<article id ="project${i}" ><h4> ${project.name} </h4><p>${project.description}</p></article>`;
    ul.appendChild(li);
    li.classList.add("skills-box");
    li.classList.add("showLeft");
  }
};
showProjects();