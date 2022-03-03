import "../styles/styles.scss";
import { stringToHTML } from "./util/stringToHTML";
import { loadHTMLFile } from "./util/loadHTMLFile";

const container = document.getElementById("container");

window.addEventListener("load", () => {
  container.appendChild(stringToHTML(loadHTMLFile("nav")));
  container.appendChild(stringToHTML(loadHTMLFile("about")));
  document.getElementById("about").onclick = () => changeView("about");
  document.getElementById("projects").onclick = () => changeView("projects");
  document.getElementById("contact").onclick = () => changeView("contact");
});

const changeView = (view: string) => {
  container.querySelector("main").remove();
  container.appendChild(stringToHTML(loadHTMLFile(view)));
};
