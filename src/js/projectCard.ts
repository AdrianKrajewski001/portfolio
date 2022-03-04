import { loadHTMLFile, stringToHTML } from "./util/loadHTMLFromFile";

interface Project {
  projectName: string;
  projectImage: string;
  githubLink: string;
  projectDescription: string;
}

export default class Card {
  projectName: string;
  projectImage: string;
  githubLink: string;
  projectDescription: string;
  static count: number = 0;
  constructor({
    projectName,
    projectImage,
    githubLink,
    projectDescription,
  }: Project) {
    this.projectName = projectName;
    this.projectImage = projectImage;
    this.githubLink = githubLink;
    this.projectDescription = projectDescription;
  }
  generateHTML() {
    Card.count++;
    const htmlAsString = loadHTMLFile("projectCard");
    const element = stringToHTML(htmlAsString);
    console.log(Card.count);
    element.setAttribute("id", `card-${Card.count}`);
    element.setAttribute("for", `item-${Card.count}`);

    // element.querySelector("h2").innerText = this.projectName;
    // element.querySelector("p").innerText = this.projectDescription;
    return element;
  }
}
