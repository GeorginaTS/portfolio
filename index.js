const skillsBoxes = document.getElementById("skill-boxes");
const descHtml = document.querySelectorAll(".desc-html");
descHtml.forEach((item) => {
  item.addEventListener("mouseover", () => {
    skillsDescMove(2);
  });
});
const descVue = document.querySelectorAll(".desc-vue");
descVue.forEach((item) => {
  item.addEventListener("mouseover", () => {
    skillsDescMove(-50);
  });
});
const descReact = document.getElementById("desc-react");
descReact.addEventListener("mouseover", () => {
    skillsDescMove(-100);
  });

const descExpress = document.getElementById("desc-express");
descExpress.addEventListener("mouseover", () => {
    skillsDescMove(-150);
  });

const descSql = document.getElementById("desc-sql");
descSql.addEventListener("mouseover", () => {
  skillsDescMove(-200);
});
const descMongo = document.getElementById("desc-mongo");
descMongo.addEventListener("mouseover", () => {
  skillsDescMove(-250);
});
const descNest = document.getElementById("desc-nest");
descNest.addEventListener("mouseover", () => {
  skillsDescMove(-300);
});
const descGit = document.getElementById("desc-git");
descGit.addEventListener("mouseover", () => {
  skillsDescMove(-350);
});

const descAws = document.getElementById("desc-aws");
descAws.addEventListener("mouseover", () => {
  skillsDescMove(-400);
});
const descAzure = document.getElementById("desc-azure");
descAzure.addEventListener("mouseover", () => {
  skillsDescMove(-450);
});
const skillsDescMove = (x) => {
  skillsBoxes.style.left = x + "vw";
};
