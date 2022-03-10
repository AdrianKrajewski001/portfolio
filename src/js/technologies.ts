import { loadHTMLFile, stringToHTML } from "./utils/viewUtils";

export enum Proficency {
  JUNIOR = "20",
  MID = "40",
  SENIOR = "60",
  EXPERT = "80",
}
export interface Technologies {
  name: string;
  icon: string;
  proficency: keyof typeof Proficency;
}
export default class Technology {
  name: string;
  icon: string;
  proficency: Proficency;
  constructor({ name, icon, proficency }: Technologies) {
    this.name = name;
    this.icon = icon;
    this.proficency =
      Proficency[proficency.toUpperCase() as keyof typeof Proficency];
  }
  generateHTML(): HTMLElement {
    const htmlAsString: string = loadHTMLFile("progressBar");
    const element: HTMLElement = stringToHTML(htmlAsString);
    element.querySelector(
      "h3"
    ).innerHTML += `<i class="fa-brands ${this.icon}"></i> ${this.name}`;

    const progress = element.getElementsByClassName(
      "progress"
    )[0] as HTMLElement;
    progress.style.width = `${this.proficency}%`;

    return element;
  }
}
