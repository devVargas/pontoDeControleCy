/// <reference types="cypress" />

describe("Pesagem", () => {
  beforeEach(() => {
    cy
      .visit("127.0.0.1:4040");
  });

  it("Acesso com Tara: 30.000 Kg e Bruto: 70.000 Kg", () => {
    const numeroAleatorio = Math.floor(Math.random() * 41) * 100 + 70000;
    const bruto = numeroAleatorio.toString();

    // Portaria 1°
    cy.get(":nth-child(1) > .rounded-lg > .pt-0 > :nth-child(3) > .flex")
      .type("889790670001600000712564");
    cy.get(":nth-child(4) > .rounded-lg > .pt-0 > :nth-child(3) > .inline-flex")
      .click();
    cy.wait(1000);
    cy.get(":nth-child(4) > .rounded-lg > .pt-0 > :nth-child(2) > .w-full", { timeout: 30000 })
      .should("contain", "FECHADA");

    // Balança 1° 
    cy.get(":nth-child(2) > .rounded-lg > .pt-0 > :nth-child(4) > .flex")
      .clear()
      .type("30000");
    cy.get(":nth-child(2) > .rounded-lg > .pt-0 > :nth-child(5) > .flex")
      .clear()
      .type(bruto);
    cy.get(":nth-child(1) > .rounded-lg > .pt-0 > :nth-child(3) > .inline-flex")
      .click();
    cy.get(":nth-child(1) > .rounded-lg > .pt-0 > :nth-child(2) > .w-full", { timeout: 30000 })
      .should("contain", "ABERTA");

    cy.get(":nth-child(4) > :nth-child(3)")
      .click();
    cy.get(":nth-child(3) > .rounded-lg > .pt-0 > :nth-child(2) > .w-full", { timeout: 30000 })
      .should("contain", "ABERTA");
    cy.get(":nth-child(3) > :nth-child(3)")
      .click();
    cy.get(":nth-child(3) > .rounded-lg > .pt-0 > :nth-child(2) > .w-full", { timeout: 30000 })
      .should("contain", "FECHADA");


    // Balança 2°
    cy.get(":nth-child(1) > .rounded-lg > .pt-0 > :nth-child(3) > .inline-flex")
      .click();
    cy.get(":nth-child(1) > .rounded-lg > .pt-0 > :nth-child(2) > .w-full", { timeout: 30000 })
      .should("contain", "ABERTA");

    cy.get(":nth-child(5) > :nth-child(3)")
      .click();
    cy.get(":nth-child(3) > .rounded-lg > .pt-0 > :nth-child(2) > .w-full", { timeout: 30000 })
      .should("contain", "ABERTA");
    cy.get(":nth-child(3) > :nth-child(3)")
      .click();
    cy.get(":nth-child(3) > .rounded-lg > .pt-0 > :nth-child(2) > .w-full", { timeout: 30000 })
      .should("contain", "FECHADA");

    // Portaria 2°
    cy.wait(2000);
    cy.get(":nth-child(4) > .rounded-lg > .pt-0 > :nth-child(3) > .inline-flex")
      .click();
    cy.wait(3000);
    cy.get(":nth-child(4) > .rounded-lg > .pt-0 > :nth-child(2) > .w-full", { timeout: 30000 })
      .should("contain", "FECHADA");

  });

  it("Acesso com Tara: 40.000 Kg e Bruto: 74.000 Kg", () => {
    const numeroAleatorio = Math.floor(Math.random() * 41) * 100 + 70000;
    const bruto = numeroAleatorio.toString();

    // Portaria 1°
    cy.get(":nth-child(1) > .rounded-lg > .pt-0 > :nth-child(4) > .flex")
      .type("889790670001600011001719");
    cy.get(":nth-child(4) > .rounded-lg > .pt-0 > :nth-child(4) > .inline-flex")
      .click(); 
    cy.wait(1000);
    cy.get(":nth-child(4) > .rounded-lg > .pt-0 > :nth-child(2) > .w-full", { timeout: 30000 })
      .should("contain", "FECHADA");


    // Balança 1° 
    cy.get(":nth-child(2) > .rounded-lg > .pt-0 > :nth-child(4) > .flex")
      .clear()
      .type("40000");
    cy.get(":nth-child(2) > .rounded-lg > .pt-0 > :nth-child(5) > .flex")
      .clear()
      .type(bruto);
    cy.get(":nth-child(1) > .rounded-lg > .pt-0 > :nth-child(4) > .inline-flex")
      .click();
    cy.get(":nth-child(1) > .rounded-lg > .pt-0 > :nth-child(2) > .w-full", { timeout: 30000 })
      .should("contain", "ABERTA");

    cy.get(":nth-child(4) > :nth-child(3)")
      .click();
    cy.get(":nth-child(3) > .rounded-lg > .pt-0 > :nth-child(2) > .w-full", { timeout: 30000 })
      .should("contain", "ABERTA");
    cy.get(":nth-child(3) > :nth-child(3)")
      .click();
    cy.get(":nth-child(3) > .rounded-lg > .pt-0 > :nth-child(2) > .w-full", { timeout: 30000 })
      .should("contain", "FECHADA");


    // Balança 2°
    cy.get(":nth-child(1) > .rounded-lg > .pt-0 > :nth-child(4) > .inline-flex")
      .click();
    cy.get(":nth-child(1) > .rounded-lg > .pt-0 > :nth-child(2) > .w-full", { timeout: 30000 })
      .should("contain", "ABERTA");

    cy.get(":nth-child(5) > :nth-child(3)")
      .click();
    cy.get(":nth-child(3) > .rounded-lg > .pt-0 > :nth-child(2) > .w-full", { timeout: 30000 })
      .should("contain", "ABERTA");
    cy.get(":nth-child(3) > :nth-child(3)")
      .click();
    cy.get(":nth-child(3) > .rounded-lg > .pt-0 > :nth-child(2) > .w-full", { timeout: 30000 })
      .should("contain", "FECHADA");

    // Portaria 2°
    cy.wait(2000);
    cy.get(":nth-child(4) > .rounded-lg > .pt-0 > :nth-child(4) > .inline-flex")
      .click();
    cy.wait(3000);
    cy.get(":nth-child(4) > .rounded-lg > .pt-0 > :nth-child(2) > .w-full", { timeout: 30000 })
      .should("contain", "FECHADA");

  });

});