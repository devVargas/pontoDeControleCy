/// <reference types="cypress" />

import { Device } from "../../data/controlPoints";

export class ControlPointPage {
    
  public static navigateToControlPoint() {
    cy.get("a[href=\"/processos/\"]")
      .should("be.visible")
      .click()
      .url()
      .should("include", "/processos/?tab=controlpoints")
      .get("button.el-button.el-button--primary.is-round")
      .contains("Novo")
      .should("be.visible")
      .click()
      .url()
      .should("include", "/pontos-de-controle/novo");
  }

  public static createPoint(type: string, name: string) {
    cy.get("input[placeholder=\"Selecione\"]")
      .eq(0)
      .click()
      .selectList(type)
      .get("input.el-input__inner")
      .eq(1)
      .type(name)
      .get("textarea.el-textarea__inner")
      .type(name + " Descrição")
      .saveButton();
  }

  public static validateAlert() {
    cy.get("div[role='alert']")
      .should("be.visible")
      .then((alert) => {
        const alertClass = alert.attr("class");
        const alertMessage = alert.find("p.el-message__content").text();
  
        if (!alertClass) return;
  
        switch (true) {
        case alertClass.includes("el-message--success"): {
          const expectedMessage = [
            "Ponto de Controle salvo com sucesso",
          ];
          
          const messageFound = expectedMessage.some((message) => alertMessage.includes(message));
          expect(messageFound).to.be.true;
          cy.log("A mensagem de sucesso foi exibida");
          break;
        }
        
        case alertClass.includes("el-message--error"):{
          const expectedMessage = [
            "Falha ao salvar Ponto de Controle",
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

  public static createGroup (point: string) {
    cy.get("button.el-button--medium")
      .click()
      .get("div[role=\"dialog\"][aria-label=\"Grupo de Integrações\"]")
      .should("be.visible")
      .within(() => {
        cy.get("input.el-input__inner")
          .eq(0)
          .type(point)
          .applyButton();
      });
    cy.get("button.el-button > i.el-icon-plus")
      .click()
      .selectList(point);
  }

  public static setTabs (devices: Device[]) {
    devices.forEach((device) => {
      const fillInputs = (idx: number, address: string, port: string) => {
        cy.get("div.input-host.el-input > input[placeholder='Endereço']")
          .eq(idx)
          .clear()
          .type(address);

        cy.get("div.input-port.el-input > input[placeholder='Porta']")
          .eq(idx)
          .clear()
          .type(port);
      };

      cy.get(`[aria-controls="pane-${device.pane}"]`)
        .click()
        .get(`#pane-${device.pane}`)
        .within(() => {
          if(this.isTower(device)) {
            this.switch(0);
            fillInputs(0, device.ip1, device.port1);
            this.switch(1);
            fillInputs(1, device.ip2, device.port2);
          } else {
            fillInputs(0, device.ip, device.port);
          }
        });
    });
    cy.applyButton()
      .get("div.justify-end > button.el-button--success > span")
      .click();  
  };

  private static isTower(device: Device) {
    return "ip1" in device;
  }

  private static switch (key: number) {
    cy.get("div[role=\"switch\"]")
      .eq(key)
      .click();
  }

}