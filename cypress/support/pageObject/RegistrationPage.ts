/// <reference types="cypress" />

import { FormData } from "../../data/registrations";

export class RegistrationPage {

  public static navigateToRegistration(menu: string) {
    cy
      .contains("a", "Cadastro")
      .click()
      .get(`ul.submenu a.item-menu[href="/cadastros/${menu}/"]`)
      .should("be.visible")
      .click();     
  }

  public static navigateToCreate(menu: string) {
    cy
      .get("button.el-button.el-button--primary.is-round")
      .contains("Novo")
      .click()
      .url()
      .should("include", `/cadastros/${menu}/novo`)
      .wait(1000);
  }

  public static fillForm(data: FormData): void {
    Object.entries(data).forEach(([key, value], index) => {
      const stringValue = String(value);

      if(key === "variety" || key === "fields"){
        return;
      }
  
      switch (key) {
      case "vehicleType":
        if (typeof value === "object") {
          cy.get("button[title=\"Cadastrar Modelo\"]").click()
            .get("form.el-form--label-top")
            .eq(1)
            .should("be.visible")
            .within(() => {
              Object.values(value).forEach((val, index) => {
                cy.get("input.el-input__inner").eq(index).type(String(val));
              });
              cy.saveButton();
            });
        }
        return;
  
      case "year":
        RegistrationPage.validateAlert("veiculos"); // Mantém aqui pela execução do Cypress
        cy.get("input[placeholder=\"Selecione o ano\"]")
          .click()
          .get("ul > li")
          .contains("span", stringValue)
          .click();
        return;

      default:
        cy.get("input.el-input__inner").eq(index).type(stringValue);
      }
    });
  }
  
  public static validateAlert(submenu: string) {
    const singularName = submenu.endsWith("s") ? submenu.slice(0, -1) : submenu;
    const capitalizedName = singularName.charAt(0).toUpperCase() + singularName.slice(1);
  
    cy.url()
      .should("include", `/cadastros/${submenu}`)
      .get("div[role='alert']")
      .should("be.visible")
      .then((alert) => {
        const alertClass = alert.attr("class");
        const alertMessage = alert.find("p.el-message__content").text();
  
        if (!alertClass) return;
  
        switch (true) {
        case alertClass.includes("el-message--success"): {
          const expectedMessage = [
            `${capitalizedName} criada com sucesso`,
            `${capitalizedName} criado com sucesso`,
            "Tipo de veículo criado com sucesso",
            "Operação criada com sucesso",
            "Filial criada com sucesso"
          ];
          
          const messageFound = expectedMessage.some((message) => alertMessage.includes(message));
          expect(messageFound).to.be.true;
          cy.log("Item criado com sucesso");
          break;
        }
  
        case alertClass.includes("el-message--error"):{
          const expectedMessage = [
            `Erro: ${capitalizedName} já cadastrado.`,
            `Erro ao criar ${singularName}`,
            "Erro ao salvar Veículo",
            "Erro: Filial já cadastrada."
          ];

          const messageFound = expectedMessage.some((message) => alertMessage.includes(message));
          expect(messageFound).to.be.true;
          cy.log("Erro: Item já cadastrado");
          break;
        }

        default:
          cy. log("Alerta desconhecido");
        }
  
        cy.wrap(alert).invoke("remove");
      });
  }

}