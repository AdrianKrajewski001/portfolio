export const loadHTMLFile = (fileName: string): string => {
  const { default: htmlAsString } = require(`../../html/${fileName}.html`);
  return htmlAsString;
};
