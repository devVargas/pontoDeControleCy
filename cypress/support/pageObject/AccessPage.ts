/// <reference types="cypress" />

import { acess } from "../../data/acess";

export class AccessPage {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static readonly variaveis: any = acess.reduce((acc, curr) => {
    return { ...acc, ...curr };
  }, {});

  public static navigateToAcess() {
    cy.contains("a", "Acessos")
      .click()
      .url()
      .should("include", "/acessos/?interval=,&status=all");
  }
    
  public static newAccess() {
    

    cy.get(".self-end > .el-button--primary").click()
      .url()
      .should("include", "/acessos/novo")
      .get("input[placeholder=\"Template da rota.\"]")
      .click()
      .selectList(this.variaveis.route)
      .forwardButton();
    this.manageRegistrations(this.variaveis.placeHolder.plate, this.variaveis.vehicle);
    this.manageRegistrations(this.variaveis.placeHolder.driver, this.variaveis.driver);
    cy.get("input[placeholder=\"Tag\"]")
      .type(this.variaveis.tag)
      .forwardButton({force: true});
    this.manageRegistrations(this.variaveis.placeHolder.product, this.variaveis.product);
    cy.forwardButton({force: true});
    this.manageConference(this.variaveis.conferenceButton.modulo2);
    cy.forwardButton({force: true})
      .get("div[role='alert']")
      .should("be.visible")
      .then((alert) => {
        const alertClass = alert.attr("class");
        const alertMessage = alert.find("p.el-message__content").text();

        if(alertClass!.includes("el-message--success")) {
          cy
            .url()
            .should("include", "/acessos/");
          expect(alertMessage).to.equal("Acesso criado com sucesso");
          cy.log("Acesso criado com sucesso");
        } 
        if (alertClass!.includes("el-message--error")) {
          if(alertMessage.includes("PLACA já possui outro acesso aberto")){
            cy.log("Placa ja possui outro acesso aberto");
          } 
          if (alertMessage.includes("TAG já possui outro acesso aberto.")) {
            cy.log("Tag já possui outro acesso aberto");
          }
        }
      });      
  }

  private static manageRegistrations(placeHolder: string, variavel: string) {
    cy.get(`input[placeholder="${placeHolder}"]`)
      .click()
      .get("ul > li")
      .then(($li) => {
        const match = $li.toArray().find(el => el.innerText.includes(variavel));

        if(match) {
          cy.selectList(variavel);

        } else {
          if(placeHolder === "Veículo") {
            cy.log(`${placeHolder} nao encontrado`)
              .get(`button[title="Cadastrar ${placeHolder}"]`)
              .click()
              .get(".is-required > .el-form-item__content > .el-input > .el-input__inner")
              .type(variavel)
              .saveButton();

          } else if (placeHolder === "Motorista") {          
            cy.log(`${placeHolder} nao encontrado`)
              .get(`button[title="Cadastrar ${placeHolder}"]`)
              .click()
              .get(".is-required > .el-form-item__content > .el-input > .el-input__inner")
              .type(variavel)
              .saveButton();

          } else if (placeHolder === "Produto") {
            cy.log(`${placeHolder} nao encontrado`)
              .get(`button[title="Cadastrar ${placeHolder}"]`)
              .click()
              .get(".is-required > .el-form-item__content > .el-input > .el-input__inner")
              .type(variavel)
              .get("button > span")
              .contains("Criar")
              .click()
              .get("div[role='alert']")
              .should("be.visible")
              .then((alert) => {
                const alertClass = alert.attr("class");
                const alertMessage = alert.find("p.el-message__content").text();

                if(alertClass && alertClass.includes("el-message--success")) {
                  expect(alertMessage).to.equal("Produto adicionado");
                  cy
                    .wrap(alert)
                    .invoke("remove");
                } 
              });

          } else {
            cy.log("Placeholder nao encontrado");
          }
        }
      });
  }

  private static manageConference(conference: string) {
    if(conference === this.variaveis.conferenceButton.modulo1){
      cy.log("ok");
    }else {
      cy
        .get("div[role=\"radiogroup\"] label")
        .contains(conference)
        .click();
  
      const campos = [
        { titulo: "Carregamento Desejado", valor: "74000" },
        { titulo: "Carregamento Mínimo", valor: "73800" },  
        { titulo: "Carregamento Máximo", valor: "74100" },
      ];
  
      campos.forEach((campo) => {
        cy
          .get(`div[title="${campo.titulo}"]`)
          .find("input[type=\"number\"]")
          .type(campo.valor);
      });
    };
  }

}