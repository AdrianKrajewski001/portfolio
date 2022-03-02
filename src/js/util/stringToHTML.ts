export const stringToHTML = (htmlAsString: string): HTMLDivElement => {
  const element = document.createElement("div");
  element.innerHTML = htmlAsString;
  console.log(element);
  return element;
};
