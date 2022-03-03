export const stringToHTML = (htmlAsString: string): ChildNode => {
  const element: HTMLDivElement = document.createElement("div");
  element.innerHTML = htmlAsString;
  return element.firstChild;
};
