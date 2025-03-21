// <reference types="cypress" />

import { concierge, scale } from "../../../data/controlPoints";
import { route } from "../../../data/routes";
import { RoutePage } from "../../../support/pageObject/RoutePage";

describe("Rota", () => {
  beforeEach(() => {
    cy
      .login()
      .closeLicense();
  });

  it("Rota", () => {
    RoutePage.navigateToControlPoint();
    RoutePage.createRoute(route.code, route.nome, route.form, route.obs);
    RoutePage.modelRoute(concierge.name, scale.name);
  });

});