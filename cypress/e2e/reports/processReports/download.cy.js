describe("Testa o botão 'Download' do menu 'Relatorios de Processos'", () => {
  beforeEach(() => {
    cy.login();
  });
    
  it("Botão 'Download'", () => {
    cy
      .fechaLicenca();   
    
    cy
      .contains("li", "Relatórios")
      .click()
      .get("[href='/relatorios/processos/']")
      .should("be.visible")
      .click()
      .get(".el-checkbox__inner")
      .click({force:true})
      .get(".ml-2 > .el-button")
      .click({force:true})
      .get("i.fas.fa-file-excel")
      .closest("li")
      .click();
  });
});