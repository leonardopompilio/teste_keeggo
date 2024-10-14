//acoes de interacao com a pagina
import CartElements from '../PageElements/CartElements'

class CartActions{
    paginaInicial(){
        cy.visit('https://www.advantageonlineshopping.com/#/')
    }

    iconeCarrinho(){
        cy.get(CartElements.carrinho).click();
    }

    botaoCheckout(){
        cy.get(CartElements.checkout).click();
    }
    
    botaoNext(){
        cy.get(CartElements.next).click();
    }

    GameOfThrones(){
        cy.get('.ng-binding').should('be.visible')
    }
}

export default new CartActions();