/// <reference types="cypress" />

import { concierge, scale } from "../../../data/controlPoints";
import { ControlPointPage } from "../../../support/pageObject/ControlPointPage";

describe("Faz a validação do formulário de criação dos dispositivos, será montado uma S3 + Portaria", () => {
  beforeEach(() => {
    cy
      .login()
      .closeLicense();
  });

  it("Faz a criação de um ponto de controle Balança S3", () => {
    ControlPointPage.navigateToControlPoint();
    ControlPointPage.createPoint(scale.type, scale.name);
    ControlPointPage.validateAlert();
    ControlPointPage.createGroup(scale.name);
    ControlPointPage.setTabs(scale.device);
    ControlPointPage.validateAlert();
  });

  it("Faz a criação de um ponto de controle Portaria Integrada", () => {
    ControlPointPage.navigateToControlPoint();
    ControlPointPage.createPoint(concierge.type, concierge.name);
    ControlPointPage.validateAlert();
    ControlPointPage.createGroup(concierge.name);
    ControlPointPage.setTabs(concierge.device);
    ControlPointPage.validateAlert();
  });
  
});