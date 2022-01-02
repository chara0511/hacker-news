describe('Home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'search_by_date?query=angular&page=0').as('getNews')
    cy.visit('/')
    cy.wait('@getNews').then(({ response }) => {
      assert.isNotNull(response.body, 'getNews API call has data')
    })
  })
  it('display hits', () => {
    cy.dataCy('hits')
  })
})
