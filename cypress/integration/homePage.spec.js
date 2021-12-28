/// <reference types="cypress" />

describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('successfully loads', () => {
    cy.get('[data-cy=title]')
  })
})
