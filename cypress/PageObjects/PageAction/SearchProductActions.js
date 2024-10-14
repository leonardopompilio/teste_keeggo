import SearchProductElements from '../../PageObjects/PageElements/SearchProductElements'

class SearchProductActions{

    acessarLogin(){
        cy.visit('https://www.advantageonlineshopping.com/#/')
    }

    BuscarItem(){
        cy.get(SearchProductElements.search).click();
    }
    
    InserirProduto(){
        cy.get(SearchProductElements.barraDeBusca).type('Game Of Thrones')
    }

    ClicarNoItem(){
        cy.get('.product').first().click()
    }

    AdicionarAoCarrinho(){
        cy.contains('ADD TO CART').click();
    }
}


export default new SearchProductActions();
