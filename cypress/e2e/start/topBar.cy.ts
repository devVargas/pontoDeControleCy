/// <reference types="cypress" />

import { start } from "../../data/start";
import { StartPage } from "../../support/pageObject/StartPage";

describe("topBar", () => {
  beforeEach(() => {
    cy
      .login()
      .closeLicense();
  });
   
  start.forEach((item) => {
    it(`${item.topBar}`, () => {
      StartPage.menuTopBar(item.topBar);
    }); 
  });

});