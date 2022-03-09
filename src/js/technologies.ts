import { loadHTMLFile, stringToHTML } from "./utils/viewUtils";

export enum Proficency {
  JUNIOR = "20",
  MID = "40",
  SENIOR = "60",
  EXPERT = "80",
}
export interface Technologies {
  name: string;
  color: string;
  proficency: keyof typeof Proficency;
}
export default class Technology {
  name: string;
  color: string;
  proficency: Proficency;
  constructor({ name, color, proficency }: Technologies) {
    this.name = name;
    this.color = color;
    this.proficency =
      Proficency[proficency.toUpperCase() as keyof typeof Proficency];
  }
  generateHTML(): HTMLElement {
    const htmlAsString: string = loadHTMLFile("progressBar");
    const element: HTMLElement = stringToHTML(htmlAsString);
    element.querySelector("h3").innerText = this.name;
    const progress = element.getElementsByClassName(
      "progress"
    )[0] as HTMLElement;
    progress.style.width = `${this.proficency}%`;
    // progress.style.backgroundColor = this.color;
    return element;
  }
}
