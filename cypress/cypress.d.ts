/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * @description Custom command to select DOM element by data-cy attribute.
     * @param {string} dataTestAttribute - Selector name.
     * @param {*} args - Other options.
     * @example cy.dataCy('greeting')
     */
    dataCy(
      dataTestAttribute: string,
      args?: any
    ): Chainable<JQuery<HTMLElement>>;
  }
}
