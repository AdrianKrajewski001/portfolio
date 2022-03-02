import "../styles/styles.scss";
import { stringToHTML } from "./util/stringToHTML";
import { footer } from "./footer";
import { nav } from "./nav";

window.addEventListener("load", () => {
  document.body.appendChild(stringToHTML(nav()));
  document.body.appendChild(stringToHTML(footer()));
});
