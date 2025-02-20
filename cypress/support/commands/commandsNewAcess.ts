/// <reference types="cypress" />

import { conferenceButton } from "../helpers/points.js";

Cypress.Commands.add("managePlate", (plate: string) => {
  cy
    .get("input[placeholder=\"Veículo\"]")
    .click()
    .get("ul > li")
    .then(($li) => {
      const plateExists = $li.map((_, el) => Cypress.$(el).text().trim()).get();
      if(plateExists.includes(plate)){
        cy
          .get("ul > li")
          .each(($li) => {
            const texto = $li.text().trim(); 
            if (texto == plate) {
              cy.wrap($li).click(); 
            } 
          }); 
      } else {
        cy
          .log("Placa não encontrada")
          .get("button[title=\"Cadastrar Veículo\"]")
          .click()
          .get(".is-required > .el-form-item__content > .el-input > .el-input__inner")
          .type(plate)
          .saveButton();
      }
    });
});

Cypress.Commands.add("manageDriver", (driver: string) => {
  cy
    .get("input[placeholder=\"Motorista\"]")
    .click()
    .get("ul > li")
    .then(($li) => {
      const driverExists = $li.map((_, el) => Cypress.$(el).text().trim()).get();
      if(driverExists.includes(driver)){
        cy
          .get("ul > li")
          .each(($li) => {
            const text = $li.text().trim(); 
            if (text ==  driver) {
              cy.wrap($li).click(); 
            } 
          }); 
      } else {
        cy
          .log("Motorista não encontrada")
          .get("button[title=\"Cadastrar Motorista\"]")
          .click()
          .get(".is-required > .el-form-item__content > .el-input > .el-input__inner")
          .type(driver)
          .saveButton();
      }
    });
});

Cypress.Commands.add("manageProduct", (product: string) => {
  cy
    .get("input[placeholder=\"Produto\"]")
    .click()
    .get("ul > li")
    .then(($li) => {
      const productExists = $li.map((_, el) => Cypress.$(el).text().trim()).get();
      if(productExists.includes(product)){
        cy
          .get("ul > li")
          .each(($li) => {
            const text = $li.text().trim(); 
            if (text ==  product) {
              cy.wrap($li).click();   
            } 
          }); 
      } else {
        cy
          .log("Produto não encontrada")
          .get("button[title=\"Cadastrar Produto\"]")
          .click()
          .get(".is-required > .el-form-item__content > .el-input > .el-input__inner")
          .type(product)
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
      }
    });
});

Cypress.Commands.add("manageConference", (conference: string) => {
  if(conference === conferenceButton.modulo1){
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
});