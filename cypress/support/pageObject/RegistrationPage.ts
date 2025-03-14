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
            "Filial criada com sucesso",
            `${capitalizedName} atualizado com sucesso`,
            `${capitalizedName} atualizada com sucesso`,
            "Parceiro atualizado com sucesso",
            "Veículo salvo com sucesso",
            "Operação atualizada com sucesso",
            "Filial editada com sucesso",
            "Transportadora editada com sucesso",
            `${capitalizedName} excluida com sucesso`,
            "Veículo excluido com sucesso!",
            "Produto deletado com sucesso",
            "Operação de produto deletado com sucesso",
            "Deletado com sucesso",
            "Parceiro excluido com sucesso",
          ];
          
          const messageFound = expectedMessage.some((message) => alertMessage.includes(message));
          expect(messageFound).to.be.true;
          cy.log("A mensagem de sucesso foi exibida");
          break;
        }
        
        case alertClass.includes("el-message--error"):{
          const expectedMessage = [
            `Erro: ${capitalizedName} já cadastrado.`,
            `Erro ao criar ${singularName}`,
            "Erro ao salvar Veículo",
            "Erro: Filial já cadastrada.",
          ];

          const messageFound = expectedMessage.some((message) => alertMessage.includes(message));
          expect(messageFound).to.be.true;
          cy.log("A mensagem de erro foi exibida");
          break;
        }

        default:
          cy. log("Alerta desconhecido");
        }
  
        cy.wrap(alert).invoke("remove");
      });
  }

  public static validateFilter(placeHolder: object) {
    Object.entries(placeHolder).forEach(([key, value]) => {
      cy
        .get(`input[placeholder="${key}"]`)
        .type(value)
        .should("be.visible")
        .wait(1000)
        .get("table.el-table__body")
        .contains(value)
        .should("be.visible");
    });
  }

  public static editButton(singlarName: string, submenu: string, data: FormData) {

    switch(submenu){
    case "veiculos":
      cy.get("button[title=\"editar veículo\"]")
        .eq(0)
        .click({force:true})
        .wait(1000)
        .url()
        .should("include", `/cadastros/${submenu}`)
        .get("input.el-input__inner")
        .eq(2)
        .clear()
        .type(`${data.code}1`)
        .saveButton();
      return;

    case "operacoes":
      cy.get("button[title=\"editar produto\"]")
        .eq(0)
        .click({force:true})
        .wait(1000)
        .url()
        .should("include", `/cadastros/${submenu}`)
        .get("input.el-input__inner")
        .eq(0)
        .clear()
        .type(`${data.code}1`)
        .saveButton();
      return;

    default:
      cy
        .get(`button[title="editar ${singlarName}"]`)      
        .eq(0)
        .click({force:true})
        .wait(1000)
        .url()
        .should("include", `/cadastros/${submenu}`)
        .get("input.el-input__inner")
        .eq(0)
        .clear()
        .type(`${data.name}1`)
        .saveButton();
    }
  }

  public static deleteButton(singularName: string, submenu: string) {

    switch(submenu){
    case "veiculos":
      cy.get("button[title=\"Excluir Veículo\"]")
        .eq(0)
        .click({force:true})
        .then(() =>{
          cy
            .contains("button", "Ok")
            .click({force:true});
        });
      return;

    case "produtos":
    case "operacoes":  
      cy.get("button[title=\"Excluir Produto\"]")
        .eq(0)
        .click({force:true})
        .then(() =>{
          cy
            .contains("button", "Ok")
            .click({force:true});
        });
      return;

    default:
      cy
        .get(`button[title="Excluir ${singularName}"]`)
        .eq(0)
        .click({force:true})
        .then(() =>{
          cy
            .contains("button", "Ok")
            .click({force:true});
        });
    }
  }

}
