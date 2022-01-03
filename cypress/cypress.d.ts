/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * @description Custom command to select DOM element by data-cy attribute.
     * @param {string} dataTestAttribute - Attribute name.
     * @param {*} args - Other options.
     * @example cy.dataCy('greeting')
     */
    getBySelector(
      dataTestAttribute: string,
      args?: any
    ): Chainable<JQuery<HTMLElement>>;

    /**
     * @description Custom command to select DOM element by specified data-cy attribute.
     * @param {string} dataTestAttribute - Attribute name.
     * @param {*} args - Other options.
     * @example cy.dataCy('like-###')
     */
    getBySelectorLike(
      dataTestAttribute: string,
      args?: any
    ): Chainable<JQuery<HTMLElement>>;

  }
}
