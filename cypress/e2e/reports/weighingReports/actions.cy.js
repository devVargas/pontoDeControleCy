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
      .get("[href='/relatorios/pesagens/']")
      .should("be.visible")
      .click()
      .get("span[data-v-a411b0f2]")
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
      .get("[href='/relatorios/pesagens/']")
      .should("be.visible")
      .click()
      .get("span[data-v-a411b0f2]")
      .get(".el-select-dropdown__item")
      .get(".el-link--inner")
      .contains("Acesso")
      .click({force:true});
  });
});