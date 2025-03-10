/// <reference types="cypress" />

import { RegistrationPage } from "../../support/pageObject/RegistrationPage";
import { cadastros } from "../../data/registrations";

describe("Descrição", () => {
  beforeEach(() => {
    cy
      .login();
  });

  it("Inicia o Teste", () => {
    cadastros.forEach((item) => {
      const submenu = `${item.interface}`;
      RegistrationPage.navigateToRegistration(submenu);
      RegistrationPage.navigateToCreate(submenu);
      item.fillForm(item.data);
      cy.saveButton();
      RegistrationPage.validateAlert(submenu);
    });
    
  });
  
});