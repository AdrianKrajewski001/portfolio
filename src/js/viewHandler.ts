import { loadHTMLFromFile, setActiveView } from "./utils/viewUtils";
import { formHandler } from "./formHandler";
import Card, { Project } from "./projectCard";
import Technology, { Technologies } from "./technologies";
import { debounce } from "lodash";
enum View {
  ABOUT = "about",
  PROJECTS = "projects",
  TECHNOLOGIES = "technologies",
  CONTACT = "contact",
}

const cardsArray = require("../assets/json/projects.json").map(
  (project: Project) => {
    return new Card(project);
  }
);
const technologiesArray = require("../assets/json/technologies.json").map(
  (technology: Technologies) => {
    return new Technology(technology);
  }
);
let activeView: string = View.ABOUT;

export const initializePage = () => {
  const container: HTMLElement = document.getElementById("container");
  loadHTMLFromFile(container, "particles");
  loadHTMLFromFile(container, "nav");
  loadHTMLFromFile(container, "about");
  document.querySelectorAll("a.navbar-item").forEach((item) => {
    document.getElementById(item.id).onclick = () => changeView(item.id);
  });
};

const changeViewUsingWheel = (e: WheelEvent) => {
  const viewsArray: View[] = Object.values(View);
  const indexOfCurrentView: number = viewsArray.findIndex(
    (item) => item === activeView
  );
  if (e.deltaY > 0 && indexOfCurrentView < 3 && !e.ctrlKey) {
    changeView(viewsArray[indexOfCurrentView + 1]);
  } else if (e.deltaY < 0 && indexOfCurrentView > 0 && !e.ctrlKey) {
    changeView(viewsArray[indexOfCurrentView - 1]);
  }
};

window.addEventListener("wheel", debounce(changeViewUsingWheel, 100));

const changeView = (view: string): void => {
  if (view !== activeView) {
    document.querySelector("main").remove();
    activeView = setActiveView(activeView, view);
    const container: HTMLElement = document.getElementById("container");
    loadHTMLFromFile(container, view);

    switch (view) {
      case View.PROJECTS: {
        cardsArray.forEach((card: Card) => {
          document.getElementById("cards").appendChild(card.generateHTML());
        });
        Card.count = 0;
        break;
      }
      case View.TECHNOLOGIES: {
        technologiesArray.forEach((technology: Card) => {
          document
            .getElementById("technologiesContainer")
            .appendChild(technology.generateHTML());
        });
        break;
      }
      case View.CONTACT: {
        document
          .getElementById("contact-form")
          .addEventListener("submit", formHandler);
      }
    }
  }
};
