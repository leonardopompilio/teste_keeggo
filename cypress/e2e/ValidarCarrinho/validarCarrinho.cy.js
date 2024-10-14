import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import SearchProductActions from "../../PageObjects/PageAction/SearchProductActions"
import LoginElements from "../../PageObjects/PageElements/LoginElements";
import CartActions from "../../PageObjects/PageAction/CartActions";

Given('que o usuário tenha realizado uma busca por game of thrones', () => {
        SearchProductActions.acessarLogin();
        cy.login(LoginElements.mockusername,LoginElements.mockpassword);
});

When('eu clico no carrinho para ver os itens',() => {
        CartActions.iconeCarrinho();
});

When('eu devo prosseguir para o checkout',() => {
       CartActions.botaoCheckout();
});

When('devo clicar em next para seguir para o pagamento',() => {
        CartActions.botaoNext();
});

Then('Devo validar se o produto Game Of Thrones esta no pagamento',() => {
        CartActions.GameOfThrones();
        cy.log('Produto "Game of Thrones" encontrado na tela de pagamento');
});

