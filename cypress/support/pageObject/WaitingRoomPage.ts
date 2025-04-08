/// <reference types="cypress" />

export class WaitingRoomPage {

  public static navigateToWaitingRoom() {
    cy.get("a[href=\"/waiting-rooms/\"]")
      .should("be.visible")
      .click();
  }

}