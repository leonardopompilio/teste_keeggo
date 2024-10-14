/// <reference types="cypress" />

describe('Teste API PUT', () => {

    it('Rodar a API', () => {
      cy.api({
        method: "PUT",
        url: "https://www.advantageonlineshopping.com/catalog/api/v1/product/image/974877526/source/3683D1?product_id=20"
      })
        .then((response) => {
          expect(response.status).to.equal(200)
  
     })
   })
  })

  //não consegui pegar onde fica o "source" para realizar a chamada PUT.