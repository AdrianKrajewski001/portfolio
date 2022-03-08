import { changeView } from "..";

export const loadHTMLFile = (fileName: string): string => {
  const { default: htmlAsString } = require(`../../html/${fileName}.html`);
  return htmlAsString;
};
export const stringToHTML = (htmlAsString: string): HTMLElement => {
  const element: HTMLDivElement = document.createElement("div");
  element.innerHTML = htmlAsString;
  return element.firstChild as HTMLElement;
};

export const loadHTMLFromFile = (element: HTMLElement, fileName: string) => {
  element.appendChild(stringToHTML(loadHTMLFile(fileName)));
};
export const initializePage = () => {
  const container: HTMLElement = document.getElementById("container");
  loadHTMLFromFile(container, "nav");
  loadHTMLFromFile(container, "about");
  document.getElementById("about").classList.add("navbar-item-active");
  document.querySelectorAll("a.navbar-item").forEach((item) => {
    document.getElementById(item.id).onclick = () => changeView(item.id);
  });
};
export const setActiveView = (activeView: string, view: string) => {
  document.getElementById(activeView).classList.remove("navbar-item-active");
  document.getElementById(view).classList.add("navbar-item-active");
  return view;
};
