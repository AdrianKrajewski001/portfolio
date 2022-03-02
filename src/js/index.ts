import "../styles/styles.scss";
import { stringToHTML } from "./util/stringToHTML";
import { loadHTMLFile } from "./util/loadHTMLFile";

window.addEventListener("load", () => {
  document.body.appendChild(stringToHTML(loadHTMLFile("nav")));
  document.body.appendChild(stringToHTML(loadHTMLFile("footer")));
});
