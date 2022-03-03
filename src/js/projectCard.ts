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
    const htmlAsString = loadHTMLFile("projectCard");
    const element = stringToHTML(htmlAsString);
    return element;
  }
}
