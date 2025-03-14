/// <reference types="cypress" />

import { RegistrationPage } from "../../support/pageObject/RegistrationPage";
import { cadastros } from "../../data/registrations";

describe("Botão de Ação", () => {
  beforeEach(() => {
    cy
      .login()
      .closeLicense();
  });

  cadastros.forEach((item) => {
    it(`Botão de Ação (Editar) do Submenu: "${item.interface}" `, () => {
      const menu = item.interface;
      const singularName = menu.endsWith("s") ? menu.slice(0, -1) : menu;
      RegistrationPage.navigateToRegistration(menu);
      cy.wait(1000);
      RegistrationPage.editButton(singularName, menu, item.data);
      RegistrationPage.validateAlert(menu);
    });
  });

  cadastros.forEach((item) => {
    it(`Botão de Ação (Excluir) do Submenu: "${item.interface}" `, () => {
      const menu = item.interface;
      const singularName = menu.endsWith("s") ? menu.slice(0, -1) : menu;
      RegistrationPage.navigateToRegistration(menu);
      cy.wait(1000);
      RegistrationPage.deleteButton(singularName, menu);
      RegistrationPage.validateAlert(menu);
    });
  });

});