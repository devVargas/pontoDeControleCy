/// <reference types="cypress" />

import { concierge, scale } from "../../../data/controlPoints";
import { route } from "../../../data/routes";
import { RoutePage } from "../../../support/pageObject/RoutePage";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const variaveis: any = route.reduce((acc, curr) => {
  return { ...acc, ...curr };
}, {});

describe("Rota", () => {
  beforeEach(() => {
    cy
      .login()
      .closeLicense();
  });

  it("Rota", () => {
    RoutePage.navigateToControlPoint();
    RoutePage.createRoute(variaveis.routePadrao.code, variaveis.routePadrao.nome, variaveis.routePadrao.form, variaveis.routePadrao.obs);
    RoutePage.modelRoute(concierge.name);
    RoutePage.modelRoute(scale.name);
    RoutePage.modelRoute(scale.name);
    RoutePage.modelRoute(concierge.name);
    RoutePage.saveRoute();
  });

});