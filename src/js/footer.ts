export const footer = (): string => {
  const { default: htmlAsString } = require("../html/footer.html");
  console.log(htmlAsString);
  return htmlAsString;
};
