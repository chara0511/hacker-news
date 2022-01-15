/* eslint-disable @typescript-eslint/no-explicit-any */
const newsApiUrl = `${Cypress.env(
  'newsApiUrl'
)}/search_by_date?query=angular&page=0`

const histPerPage = 20

describe('Home page', () => {
  beforeEach(() => {
    cy.intercept('GET', newsApiUrl).as('getNews')
    cy.visit('/')
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
    cy.getBySelector('hit').should('have.length', histPerPage)
  })

  it('display dark mode', () => {
    cy.getBySelector('theme-toggler').click()
    cy.document().then((doc) => {
      expect(doc.body.dataset.theme).to.equal('dark')
    })
  })

  it('close dropdown menu when click outside', () => {
    cy.getBySelector('dropdown-button').click()
    cy.get('body').click(0, 0)
  })

  it('fetches hits on scroll', () => {
    cy.getBySelector('hit').then((hits) => {
      cy.intercept(
        'GET',
        `${Cypress.env('newsApiUrl')}/search_by_date?query=angular&page=1`
      ).as('getNewHits')
      cy.window().scrollTo('bottom')
      cy.getBySelector('loader').should('be.visible')
      cy.wait('@getNewHits')
      cy.getBySelector('hit').should('have.length', hits.length + histPerPage)
    })
  })
})
