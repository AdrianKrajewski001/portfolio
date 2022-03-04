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
