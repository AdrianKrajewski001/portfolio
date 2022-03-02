export const nav = (): string => {
  const { default: htmlAsString } = require("../html/nav.html");
  console.log(htmlAsString);
  return htmlAsString;
};
