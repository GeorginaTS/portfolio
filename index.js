const projects = false
const header = document.querySelector("header");
const hello = document.getElementById("hello");
const intro = document.getElementById("intro");
const stack = document.getElementById("stack");
const skillSection = document.getElementById("skill-desc-section");
const projectsSection = document.getElementById("projects");

if (!projects) {
  header.style.display = "none";
  projectsSection.style.display = "none";

} else {  
  header.style.display = "flex";
  hello.style.display = "none";
  intro.style.display = "none";  
  stack.style.display = "none";
  skillSection.style.display = "none";
}




// +++ event listeners +++

const skillsBoxes = document.getElementById("skill-boxes");

//Skills buttons
const descHtml = document.querySelectorAll(".btn-html");
descHtml.forEach((item) => {
  item.addEventListener("mouseover", () => {
    skillsDescMove(15);
    const skill = document.getElementById("htmlcss");
    skill.addEventListener("mouseover", () => {
      
    });
    skill.addEventListener("mouseout", () => {

    });
  });
});
const descVue = document.querySelectorAll(".btn-vue");
descVue.forEach((item) => {
  item.addEventListener("mouseover", () => {
    skillsDescMove(-38);
  });
});
const descReact = document.getElementById("btn-react");
descReact.addEventListener("mouseover", () => {
    skillsDescMove(-92);
  });

const descExpress = document.getElementById("btn-express");
descExpress.addEventListener("mouseover", () => {
    skillsDescMove(-143);
  });

const descSql = document.getElementById("btn-sql");
descSql.addEventListener("mouseover", () => {
  skillsDescMove(-197);
});
const descMongo = document.getElementById("btn-mongo");
descMongo.addEventListener("mouseover", () => {
  skillsDescMove(-250);
});
const descNest = document.getElementById("btn-nest");
descNest.addEventListener("mouseover", () => {
  skillsDescMove(-303);
});
const descGit = document.getElementById("btn-git");
descGit.addEventListener("mouseover", () => {
  skillsDescMove(-355);
});

const descAws = document.getElementById("btn-aws");
descAws.addEventListener("mouseover", () => {
  skillsDescMove(-408);
});
const descAzure = document.getElementById("btn-azure");
descAzure.addEventListener("mouseover", () => {
  skillsDescMove(-460);
});
const descDocker = document.getElementById("btn-docker");
descDocker.addEventListener("mouseover", () => {
  skillsDescMove(-509);
});

// ----- FUNCTIONS -----
// Function to move the skills description boxes
const skillsDescMove = (x) => {
  skillsBoxes.style.left = x + "vw";
  skillsBoxes.style.transition = "all 0.3s ease-in";
};
skillsDescMove(0);

// const skillDescGrow = (skill) => {
//     skill.addEventListener("mouseover", () => {
//       skill.style.scale = "1.1";
//       skill.style.transition = "all 0.3s ease-in-out ";
//     });
//     skill.addEventListener("mouseout", () => {
//       skill.style.scale = "1";
//       skill.style.transition = "all 0.3s ease-in-out";
//     //   skill.removeEventListener("mouseover");
//     //   skill.removeEventListener("mouseout");
//      }
//     );
// }
