/// <reference types="cypress" />

describe('Teste API PUT', () => {

    it('Rodar a API', () => {
      cy.api('PUT','https://www.advantageonlineshopping.com/catalog/api/v1/product/image/{974877526}/{source}/{545195}',){
      }
      })
        .then((response) => {
          expect(response.status).to.equal(200)
  
     })
   })


   //não consegui fazer o teste dessa API, todas as requests que tentei mesmo no SWAGGER retornaram erro mesmo após fazer o login e pegar o Bearer Token,
   //a mesma retorna como se o token estivesse errado, com isso não consegui fazer a autenticação para poder fazer a request PUT.
   //irei mandar um documento separado mostrando o erro com a chamada da API.
  