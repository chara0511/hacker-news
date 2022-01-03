const newsApiUrl = `${Cypress.env(
  'newsApiUrl'
)}/search_by_date?query=angular&page=0`

describe('Home page', () => {
  beforeEach(() => {
    cy.intercept('GET', newsApiUrl).as('getNews')
    cy.visit('/')
    cy.wait('@getNews').then(({ response }: any) => {
      expect(response.statusCode).to.eq(200)
      assert.isNotNull(response.body, 'getNews API call has data')
    })
  })
  it('display hits', () => {
    cy.getBySelector('hits')
      .children()
      .each(($li) => {
        cy.wrap($li)
      })
  })
})
