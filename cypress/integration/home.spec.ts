/* eslint-disable @typescript-eslint/no-explicit-any */
const newsApiUrl = `${Cypress.env(
  'newsApiUrl'
)}/search_by_date?query=angular&page=0`

describe(
  'Home page',
  {
    env: {
      baseUrl: 'http://localhost:3000'
    }
  },
  () => {
    beforeEach(() => {
      cy.intercept('GET', newsApiUrl).as('getNews')
      cy.visit(`${Cypress.env('baseUrl')}`)
      cy.getBySelectorLike('skeleton-0').should('be.visible')
      cy.wait('@getNews').then(({ response }: any) => {
        expect(response.statusCode).to.eq(200)
        assert.isNotNull(response.body, 'getNews API call has data')
      })
    })
    it('display hits', () => {
      cy.getBySelector('skeleton-0').should('not.exist')
      cy.getBySelector('hits')
        .children()
        .each(($li) => {
          cy.wrap($li)
        })
    })
  }
)

export {}
