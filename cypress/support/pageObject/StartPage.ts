/// <reference types="cypress" />

import { concierge } from "../../data/controlPoints";
import { cadastros } from "../../data/registrations";

export class StartPage {

  public static menuTopBar(title: string) {
    cy.get(`div[title="${title}"]`)
      .click();

    if(title === "QRCode App") {
      cy.get("img.qrcode-screenimage")
        .should("be.visible")
        .and("have.attr", "src", "/api/v2/app/qrcode.png"); 
        
      cy.log("QRCode App aberto");
    }

    if(title === "Abertura Manual") {
      const user = Cypress.env("username");
      const password = Cypress.env("password");
      const plateNumber = String(cadastros.find(item => item.interface === "veiculos")?.data.plateNumber);

      cy.get("#user")
        .type(user)
        .get("#password")
        .type(password, { log: false })
        .get("#plate")
        .type(plateNumber)
        .get("input[name=\"selectPoint\"]")
        .click()
        .selectList(concierge.name)
        .get("input[name=\"reason\"]")
        .click()
        .selectList("Morador")
        .get(".el-button.sucess")
        .click();

      cy.log("Abertura Manual realizada");
    }

    if(title === "Sair") {
      cy.closeLicense()
        .get("img.h-full")
        .should("be.visible")
        .and("have.attr", "src", "/img/logo.3b081f5a.png");   

      cy.log("Logout feito");
    }
  }

  public static steelSquare(square: string) {
    cy.get("h3")
      .each(($h3) => {
        const text = $h3.text().trim();

        if(text === square) {
          cy.log(square);
          if(square === "Novo acesso") {
            cy.wrap($h3)
              .click();
          } else if (text === square) {
            cy.wrap($h3)
              .closest("div")
              .find("a[href*=\"/acessos/\"]")
              .click()
              .url()
              .should("include", "/?interval=,&status=complete");
          } else {
            cy.wrap($h3)
              .closest("div")
              .find("a[href*=\"/acessos/\"]")
              .click()
              .url()
              .should("include", "/?interval=,&status=open");
          }
        }
      });    
  }

  public static openSupervisory() {
    cy.get("p")
      .each(($p) => {
        cy.wrap($p)
          .closest("a")
          .invoke("removeAttr", "target")
          .click()
          .url()
          .should("include", "/apps/weight-link/");     
      });
  }
  
}


