/// <reference types="cypress" />

import { RegistrationPage } from "../../support/pageObject/RegistrationPage";
import { cadastros } from "../../data/registrations";

describe("Cadastro de novos registros em todos os menus disponíveis", () => {
  beforeEach(() => {
    cy
      .login()
      .closeLicense();
  });

  cadastros.forEach((item) => {
    it(`Navega no menu "${item.interface}" e preenche os formulários`, () => {
      const menu = item.interface;
      RegistrationPage.navigateToRegistration(menu);
      cy.wait(1000);
      RegistrationPage.navigateToCreate(menu);
      cy.wait(1000);
      item.fillForm(item.data);
      cy.saveButton();
      RegistrationPage.validateAlert(menu);
    });
  });

});