/// <reference types="cypress" />

Cypress.Commands.add("closeLicense", () => { 
  cy
    .wait(1000)
    .contains("button", "Continuar sem Licença")
    .click({force: true});
});

Cypress.Commands.add("login", () => {
  const user = Cypress.env("username");
  const password = Cypress.env("password");

  cy
    .visit("/")
    .closeLicense();
  cy
    .get("input[name=\"username\"]")
    .type(user)
    .get("input[name=\"password\"]")
    .type(password, { log: false })
    // .get("form > .flex > .shadow-material") // Versão 3.8
    .get(".flex > .el-button") // Versão 3.9
    .click();
});

Cypress.Commands.add("selectList", (listItem: string) => {
  cy
    .get("ul > li") 
    .each(($li) => {
      const texto = $li.text().trim(); 
      if (texto.includes(listItem)) {
        cy.wrap($li).click(); 
      } 
    });  
});

Cypress.Commands.add("saveButton", () => {
  cy
    .get("button > span")
    .contains("Salvar")
    .click(); 
});

Cypress.Commands.add("forwardButton", (x?: Partial<Cypress.ClickOptions>) => {
  cy
    .get(".el-button--success")
    .should("not.be.disabled")
    .contains("Avançar")
    .click(x);
});

Cypress.Commands.add("applyButton", () => {
  cy
    .get("button > span")
    .contains("Aplicar")
    .click(); 
});