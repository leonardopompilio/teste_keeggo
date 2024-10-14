/// <reference types="cypress" />

describe('Teste API PUT', () => {

    it('Rodar a API', () => {
      cy.request({
        method: 'PUT',
        url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/{974877526}/{source}/{545195}'
      })
        .then((response) => {
          expect(response.status).to.equal(200)
  
     })
   })
  })