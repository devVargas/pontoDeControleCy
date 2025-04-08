/// <reference types="cypress" />

import { concierge, waitingRoom } from "../../../data/controlPoints";
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
    RoutePage.createRoute(variaveis.routeWaitingRoom.code, variaveis.routeWaitingRoom.nome, variaveis.routeWaitingRoom.form, variaveis.routeWaitingRoom.obs);
    RoutePage.modelRoute(waitingRoom.name);
    RoutePage.modelRoute(concierge.name);
    RoutePage.modelRoute(concierge.name);
    RoutePage.saveRoute();
  });

});