import { veiculo, motorista} from "../../../support/helpers/points";
describe("Valida os filtros do menu 'Relatório de Acessos'", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Filtro Processo", () => {
    cy
      .fechaLicenca();
    cy
      .contains("li", "Relatórios")
      .click()
      .get("[href='/relatorios/acessos/']")
      .should("be.visible")
      .click()
      .get("input[placeholder=\"Processo\"]")
      .click({force:true})
      .get(".el-select-dropdown__item")
      .contains("span", "[R01] Pesagem")
      .should("be.visible")
      .click({force:true});
  });

  it("Filtro Placa", () => {
    cy
      .fechaLicenca();
    cy
      .contains("li", "Relatórios")
      .click()
      .get("[href='/relatorios/acessos/']")
      .should("be.visible")
      .click()
      .get("input[placeholder=\"Placa\"]")
      .type(`${veiculo.placa}`, {force:true});
  });

  it("Filtro Motorista", () => {
    cy
      .fechaLicenca();
    cy
      .contains("li", "Relatórios")
      .click()
      .get("[href='/relatorios/acessos/']")
      .should("be.visible")
      .click()
      .get("input[placeholder=\"Motorista\"]")
      .type(`${motorista.name}`, {force:true});
  });
});