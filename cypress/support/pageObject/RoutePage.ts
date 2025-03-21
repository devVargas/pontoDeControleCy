/// <reference types="cypress" />

export class RoutePage {

  public static navigateToControlPoint() {
    cy.get("a[href=\"/processos/\"]")
      .should("be.visible")
      .click()
      .get("#tab-routes")
      .click()
      .url()
      .should("include", "/processos/?tab=routes")
      .get("#pane-routes button.el-button.el-button--primary.is-round")
      .contains("Novo")
      .should("be.visible")
      .click()
      .url()
      .should("include", "/rotas/novo")
      .wait(1000);
  }

  public static createRoute(code: string, nome: string, form: string, desc: string) {
    cy.get("input[placeholder=\"Código da rota\"]")
      .type(code)
      .get("input[placeholder=\"Nome da rota\"]")
      .type(nome)
      .get("input[placeholder=\"Selecione\"]")
      .click()  
      .selectList(form)
      .get("textarea[name=\"routeDescription\"]")
      .type(desc)
      .get(".justify-end > .shadow-material")
      .click();
  }

  public static modelRoute(portaria: string, balanca: string) {
    cy.get("input[placeholder=\"Adicionar Ponto de Controle a rota\"]")
      .click()
      .selectList(portaria)
      .get("input[placeholder=\"Adicionar Ponto de Controle a rota\"]")
      .click()
      .selectList(balanca)
      .get("input[placeholder=\"Adicionar Ponto de Controle a rota\"]")
      .click()
      .selectList(balanca)
      .get("input[placeholder=\"Adicionar Ponto de Controle a rota\"]")
      .click()
      .selectList(portaria)
      .get(".justify-end > .bg-primary")
      .click()
      .get(":nth-child(3) > .bg-primary")
      .click();
  }

}