import "../styles/styles.scss";
import { loadHTMLFromFile } from "./util/loadHTMLFromFile";
import Card from "./projectCard";
import { debounce } from "lodash";
enum View {
  ABOUT = "about",
  PROJECTS = "projects",
  TECHNOLOGIES = "technologies",
  CONTACT = "contact",
}

const container: HTMLElement = document.getElementById("container");
let activeView: string = View.ABOUT;

const projectsArray = require("../json/projects.json");
const cardsArray = projectsArray.map((project: Card) => {
  return new Card(project);
});

window.addEventListener("load", () => {
  loadHTMLFromFile(container, "nav");
  loadHTMLFromFile(container, "about");
  document.getElementById(activeView).classList.add("navbar-item-active");
  document.querySelectorAll("a.navbar-item").forEach((item) => {
    document.getElementById(item.id).onclick = () => changeView(item.id);
  });
});

const changeViewWithWheel = (e: WheelEvent) => {
  console.log(e);
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

window.addEventListener("wheel", debounce(changeViewWithWheel, 100));

const changeView = (view: string): void => {
  if (view !== activeView) {
    container.querySelector("main").remove();
    loadHTMLFromFile(container, view);

    document.getElementById(activeView).classList.remove("navbar-item-active");
    activeView = view;
    document.getElementById(activeView).classList.add("navbar-item-active");

    if (view === View.PROJECTS) {
      cardsArray.forEach((card: Card) => {
        document.getElementById("cards").appendChild(card.generateHTML());
      });
      Card.count = 0;
    }
  }
};
