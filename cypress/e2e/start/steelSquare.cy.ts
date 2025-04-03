/// <reference types="cypress" />

import { start } from "../../data/start";
import { StartPage } from "../../support/pageObject/StartPage";

describe("Square", () => {
  beforeEach(() => {
    cy
      .login()
      .closeLicense();
  });
   
  start.forEach((item) => {
    it(`${item.square}`, () => {
      cy.wait(1000);
      StartPage.steelSquare(item.square);
    }); 
  });

  it.only("Supervisório", () => {
    StartPage.openSupervisory();
  });

});