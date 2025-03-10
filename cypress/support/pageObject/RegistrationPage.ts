/// <reference types="cypress" />

export class RegistrationPage {

  public static navigateToRegistration(submenu: string) {
    cy
      .contains("a", "Cadastro")
      .click()
      .get(`ul.submenu a.item-menu[href="/cadastros/${submenu}/"]`)
      .should("be.visible")
      .click();     
  }

  public static navigateToCreate(submenu: string) {
    cy
      .get("button.el-button.el-button--primary.is-round")
      .contains("Novo")
      .click()
      .url()
      .should("include", `/cadastros/${submenu}/novo`)
      .wait(1000);
  }

  public static fillForm(data: Record<string, string | number | object>) {
    Object.entries(data).forEach(([, value], index) => {
      const stringValue = String(value);
      cy
        .get("input.el-input__inner")
        .eq(index)
        .type(stringValue);
    });
  }

  public static validateAlert(submenu: string) {
    const singularName = submenu.endsWith("s") ? submenu.slice(0, -1) : submenu;

    cy
      .get("div[role='alert']")
      .should("be.visible")
      .then((alert) => {
        const alertClass = alert.attr("class");
        const alertMessage = alert.find("p.el-message__content").text();

        if(alertClass?.includes("el-message--success")) {
          cy
            .url()
            .should("include", `/cadastros/${submenu}`);
          expect(alertMessage).to.equal(`${singularName.charAt(0).toUpperCase() + singularName.slice(1)} criado com sucesso`);
        } 
        if(alertClass?.includes("el-message--error")) {
          alertMessage.includes(`Erro: ${singularName.charAt(0).toUpperCase() + singularName.slice(1)} já cadastrado.`);
          cy.log(`${singularName.charAt(0).toUpperCase() + singularName.slice(1)} ja cadastrado`);
        }
      });
  }
  
}