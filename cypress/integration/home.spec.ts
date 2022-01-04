/* eslint-disable @typescript-eslint/no-explicit-any */
const newsApiUrl = 'https://hn.algolia.com/api/v1//search_by_date?query=angular&page=0'

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept(newsApiUrl).as('getNews')
    // cy.getBySelectorLike('skeleton-0').should('be.visible')
    cy.wait('@getNews').then(({ response }: any) => {
      expect(response.statusCode).to.eq(200)
      assert.isNotNull(response.body, 'getNews API call has data')
    })
  })
  it('display hits', () => {
    // cy.getBySelector('skeleton-0').should('not.exist')
    cy.getBySelector('hits')
      .children()
      .each(($li) => {
        cy.wrap($li)
      })
  })
})
