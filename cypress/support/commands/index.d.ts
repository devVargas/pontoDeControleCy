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
        navigateToMenu(menu: string): Chainable<void>;

        // commandsNewAcess
        managePlate(plate: string): Chainable<JQuery<HTMLElement>> | Chainable<void>;
        manageDriver(driver: string): Chainable<JQuery<HTMLElement>> | Chainable<void>;
        manageProduct(product: string): Chainable<JQuery<HTMLElement>>;
        manageConference(conference: string): Chainable<void>;

        // formsDevices
        fillAddressPort(index: number, ip: string, port: string): Chainable<void>;
        clickSwitch(index: number): Chainable<void>;

        // simulations
        weighings(): Chainable<void>;
        concierge(): Chainable<void>;

    }
}