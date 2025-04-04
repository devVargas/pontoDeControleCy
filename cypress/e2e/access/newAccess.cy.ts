/// <reference types="cypress" />

import { AccessPage } from "../../support/pageObject/AccessPage";

describe("Acesso", () => {
  beforeEach(() => {
    cy
      .login()
      .closeLicense();
  });

  it("acesso", () => {
    AccessPage.navigateToAcess();
    AccessPage.newAccess();
  });

});