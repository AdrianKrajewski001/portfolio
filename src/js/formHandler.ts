export const formHandler = (e: SubmitEvent) => {
  e.preventDefault();
  const name = (document.getElementById("full-name") as HTMLInputElement).value;
  const company = (document.getElementById("company") as HTMLInputElement)
    .value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const message = (document.getElementById("message") as HTMLTextAreaElement)
    .value;
  console.log({ name, company, email, message });
  (document.getElementById("contact-form") as HTMLFormElement).reset();
};
