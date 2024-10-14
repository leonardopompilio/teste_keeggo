/// <reference types="cypress" />

describe('Teste API GET', () => {

  it('Rodar a API', () => {
    cy.request({
      method: 'GET',
      url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=game%20of%20thrones&quantityPerEachCategory=1'
    })
      .then((response) => {
        expect(response.status).to.equal(200)
        expect(response.status).to.exist

   })
 })
})


