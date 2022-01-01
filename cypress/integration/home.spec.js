describe('Display home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('select query', () => {
    cy.get('[data-cy=dropdown]').click()
    cy.get('[data-cy=dropdown-item-reactjs]').click()
  })
})
