import "./commands/utilCommands";
import "./commands/commandsNewAcess";
import "./commands/formsDevices";
// import "./commands/simulations";

Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("Cannot read properties of null (reading 'scrollTo')")) {
    return false;
  }
});