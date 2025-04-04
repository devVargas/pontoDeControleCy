/* eslint-disable */
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {       
        closeLicense(): Chainable<void>
        login(): Chainable<void>;
        selectList(listItem: string): Chainable<JQuery<HTMLElement>>; 
        saveButton(): Chainable<void>;
        forwardButton(options?: Partial<Cypress.ClickOptions>): Chainable<void>;
        applyButton(): Chainable<void>;

    }
}