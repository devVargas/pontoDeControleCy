import "./commands/utilCommands";

Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("Cannot read properties of null (reading 'scrollTo')")) {
    return false;
  }
  if (err.message.includes("Avoided redundant navigation to current location")) {
    return false;
  }
});