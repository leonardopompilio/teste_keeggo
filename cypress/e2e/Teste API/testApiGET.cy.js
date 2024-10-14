/// <reference types="cypress" />

describe('Teste API PUT', () => {

it("Rodar a API", () => {
  cy.api({
    method: "GET",
    url: "https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=game%20of%20thrones&quantityPerEachCategory=1",
  }).then((response) => {
    expect(response.status).to.equal(200);
  });
 })
})
