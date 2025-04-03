describe("Testa o botão 'ações' do menu 'Relatorios de pesagem'", () => {
  beforeEach(() => {
    cy.login();
  });
  
  it("Botão 'Ticket'", () => {
    cy
      .fechaLicenca();   
  
    cy
      .contains("li", "Relatórios")
      .click()
      .get("[href='/relatorios/acessos-ponto-de-controle/']")
      .should("be.visible")
      .click()
      .get("[data-v-e4d47ac6]")
      .get(".el-select-dropdown__item")
      .get(".el-link--inner")
      .contains("Ticket")
      .click({force:true});
  });
  
  it("Botão 'Acesso'", () => {
    cy
      .fechaLicenca();   
  
    cy
      .contains("li", "Relatórios")
      .click()
      .get("[href='/relatorios/acessos-ponto-de-controle/']")
      .should("be.visible")
      .click()
      .get("[data-v-e4d47ac6]")
      .get(".el-select-dropdown__item")
      .get(".el-link--inner")
      .contains("Acesso")
      .click({force:true});
  });
});