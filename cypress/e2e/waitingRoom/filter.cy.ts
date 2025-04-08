/// <reference types="cypress" />

import { WaitingRoomPage } from "../../support/pageObject/WaitingRoomPage";

describe("filter", () => {
  beforeEach(() => {
    cy
      .login()
      .closeLicense();
  });

  it("filter", () => {
    WaitingRoomPage.navigateToWaitingRoom();
  });

});