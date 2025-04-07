/// <reference types="cypress" />

import { route } from "../../data/routes";
import { AccessPage } from "../../support/pageObject/AccessPage";

describe("filter", () => {
  beforeEach(() => {
    cy
      .login()
      .closeLicense();
  });

  it("Filtro Acesso", 
    () => {
      AccessPage.navigateToAcess();
      cy.get("input[placeholder=\"Acesso\"]")
        .type("2")
        .get("a[href='/acessos/2']")
        .should("be.visible");
    });
  it("Filtro Data", () => {
    AccessPage.navigateToAcess();
    cy.get("td.el-table_1_column_2")
      .first()
      .find("span")
      .invoke("text")
      .then((capturaData) => {
        const dividiDataEmPartes = capturaData.trim().split(" ")[0];
        const [dia, mes, ano] = dividiDataEmPartes.split("/");
        const dataFormatada = `${ano}-${mes}-${dia}`;
        cy
          .get("input[placeholder=\"Data de Início\"]")
          .type(`${dataFormatada}{enter}`)
          .get("input[placeholder=\"Data de Fim\"]")
          .type(`${dataFormatada}{enter}`)
          .wait(1000)
          .url()
          .should("include", `interval=${dataFormatada}`);
      });     
  }); 
  it("Filtro Processo", () => {
    AccessPage.navigateToAcess();
    cy.get("input[placeholder=\"Processo\"]")
      .click()
      .get(".el-select-dropdown__item")
      .contains("span", route.nome) 
      .click()
      .then(($el) => {
        const textoCompleto = $el.text();
        const textoProcessado = textoCompleto.replace(/\[.*?\]\s*/, "");
        cy
          .get("td .cell")
          .filter(`:visible:contains('${textoProcessado}')`)
          .should("contain.text", textoProcessado);
      });
  });
  it("Filtro TAG", () => {
    AccessPage.navigateToAcess();
    cy.get(".el-table__body-wrapper > .el-table__body > tbody > .el-table__row > .el-table_1_column_4 > .cell > div")
      .eq(1)
      .invoke("text")
      .then((text) => {
        cy
          .get("input[placeholder=\"TAG\"]")
          .type(text)
          .get("td .cell")
          .filter(`:visible:contains('${text}')`)
          .should("contain.text", text);
      });
  });
  it("Filtro Placa", () => {
    AccessPage.navigateToAcess();
    cy.get("td.el-table_1_column_5")
      .children("div.cell")
      .eq(1)
      .invoke("text")
      .then((text) => {
        cy
          .get("input[placeholder=\"Placa\"]")
          .type(text)
          .get("td .cell")
          .filter(`:visible:contains('${text}')`)
          .should("contain.text", text);
      });
  });
  it.only("Filtro Status", () => {
    AccessPage.navigateToAcess();
    cy.get("input[placeholder=\"Selecione\"]")
      .click();
    cy
      .selectList("Abertos")
      .eq(1)
      .get("td.el-table_1_column_6")
      .children("div.cell")
      .eq(1)
      .invoke("text")
      .then((text) => {
        cy
          .get("td .cell")
          .filter(`:visible:contains('${text}')`)
          .should("contain.text", text);
      });
  });
 

});