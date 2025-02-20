/// <reference types="cypress" />

import { tag } from "../helpers/points.js";

Cypress.Commands.add("weighings", () => {
  cy
    .visit("http://127.0.0.1:4040");
    
});

Cypress.Commands.add("concierge", () => {
  cy
    .visit("http://127.0.0.1:4040")
    .get("input[placeholder=\"TAG 1\"]")
    .eq(2)
    .type(tag)
    .get("div.rounded-lg")
    .filter(":contains(\"Portaria Ent/Sai\")")
    .first()
    .within(() => {
      cy.contains("button", "TAG 1").click();
    });
});