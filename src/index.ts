import "./styles.scss";

const helloWorld = () => {
  const element = document.createElement("div");
  element.innerHTML = "Hello worldd";
  element.classList.add("bg");
  return element;
};

document.body.appendChild(helloWorld());
