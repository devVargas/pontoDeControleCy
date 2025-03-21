/* eslint-disable */
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        
        // utilCommands
        closeLicense(): Chainable<void>
        login(): Chainable<void>;
        selectList(listItem: string): Chainable<JQuery<HTMLElement>>; 
        saveButton(): Chainable<void>;
        forwardButton(): Chainable<void>;
        applyButton(): Chainable<void>;

        // commandsNewAcess
        managePlate(plate: string): Chainable<JQuery<HTMLElement>> | Chainable<void>;
        manageDriver(driver: string): Chainable<JQuery<HTMLElement>> | Chainable<void>;
        manageProduct(product: string): Chainable<JQuery<HTMLElement>>;
        manageConference(conference: string): Chainable<void>;

        // simulations
        // weighings(): Chainable<void>;
        // concierge(): Chainable<void>;

    }
}