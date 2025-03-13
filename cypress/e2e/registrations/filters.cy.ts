/// <reference types="cypress" />

import { RegistrationPage } from "../../support/pageObject/RegistrationPage";
import { cadastros } from "../../data/registrations";

describe("validação dos filtros nos submenus do menu Cadastro", () => {
  beforeEach(() => {
    cy
      .login()
      .closeLicense();
  });

  cadastros.forEach((item) => {
    it(`Filtro do Submenu: "${item.interface}" `, () => {
      const menu = item.interface;
      RegistrationPage.navigateToRegistration(menu);
      cy.wait(1000);
      RegistrationPage.validateFilter(item.placeHolder!);
    });
  });

});