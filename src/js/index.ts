import "../styles/styles.scss";
import { loadHTMLFromFile } from "./util/loadHTMLFromFile";
import Card from "./projectCard";

const container: HTMLElement = document.getElementById("container");
const project: Card = new Card({
  projectName: "nazwa",
  projectImage: "zdjecia",
  githubLink: "link",
  projectDescription: "opis",
});

window.addEventListener("load", () => {
  loadHTMLFromFile(container, "nav");
  loadHTMLFromFile(container, "about");

  document.getElementById("about").onclick = () => changeView("about");
  document.getElementById("projects").onclick = () => changeView("projects");
  document.getElementById("contact").onclick = () => changeView("contact");
  document.getElementById("technologies").onclick = () =>
    changeView("technologies");
});

const changeView = (view: string) => {
  container.querySelector("main").remove();
  loadHTMLFromFile(container, view);
  if (view === "projects") {
    console.log(document.querySelector("main"));
    document.querySelector("main").appendChild(project.generateHTML());
    document.querySelector("main").appendChild(project.generateHTML());
    document.querySelector("main").appendChild(project.generateHTML());
    document.querySelector("main").appendChild(project.generateHTML());
  }
};
