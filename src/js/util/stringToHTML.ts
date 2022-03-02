export const stringToHTML = (htmlAsString: string): HTMLDivElement => {
  const element: HTMLDivElement = document.createElement("div");
  element.innerHTML = htmlAsString;
  return element;
};
