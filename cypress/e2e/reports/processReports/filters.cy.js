describe ("Valida os filtros do menu 'Relatórios de Processos'", () => {
  beforeEach(() => {
    cy.login();
  });

  it ("Filtro Processo", () => {
    cy
      .fechaLicenca();
    cy
      .contains("li", "Relatórios")
      .click()
      .get("[href='/relatorios/processos/']")
      .should("be.visible")
      .click()
      .get("input[placeholder=\"Processo\"]")
      .click({force:true})
      .get(".el-select-dropdown__item")
      .contains("span", "[R01] Pesagem")
      .should("be.visible")
      .click({force:true});
  });

  it.only("Filtro Data", () => {
    cy
      .fechaLicenca();
    cy
      .contains("li", "Relatórios")
      .click()
      .get("[href='/relatorios/processos/']")
      .should("be.visible")
      .click()    
      .get("input[placeholder=\"Data de Início\"]")
      .type("2025-01-13")
      .get("input[placeholder=\"Data de Fim\"]")
      .type("2025-01-16, {enter}");
  }); 

  
});