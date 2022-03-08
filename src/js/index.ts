import "../styles/styles.scss";
import {
  loadHTMLFromFile,
  initializePage,
  setActiveView,
} from "./utils/viewUtils";
import { formHandler } from "./utils/formUtils";
import Card, { Project } from "./projectCard";
import Technology, { Technologies } from "./technologies";
import { debounce } from "lodash";
enum View {
  ABOUT = "about",
  PROJECTS = "projects",
  TECHNOLOGIES = "technologies",
  CONTACT = "contact",
}
let activeView: string = View.ABOUT;

const cardsArray = require("../json/projects.json").map((project: Project) => {
  return new Card(project);
});
const technologiesArray = require("../json/technologies.json").map(
  (technology: Technologies) => {
    return new Technology(technology);
  }
);

window.addEventListener("load", initializePage);

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

export const changeView = (view: string): void => {
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
          .getElementById("contactForm")
          .addEventListener("submit", formHandler);
      }
    }
  }
};
