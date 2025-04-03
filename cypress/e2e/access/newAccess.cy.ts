/// <reference types="cypress" />

describe("Acesso", () => {
  beforeEach(() => {
    cy
      .login()
      .closeLicense();
  });

  

});