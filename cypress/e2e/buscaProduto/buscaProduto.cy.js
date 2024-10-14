import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import SearchProductActions from "../../PageObjects/PageAction/SearchProductActions"
import LoginActions from "../../PageObjects/PageAction/LoginActions";
import LoginElements from "../../PageObjects/PageElements/LoginElements";

Given('que o usuario esteja na pagina de login do Advantage Online Shopping', () => {
        LoginActions.paginaInicial();
        cy.login(LoginElements.mockusername,LoginElements.mockpassword);
});

When('eu clicar na lupa para pesquisa de produto',() => {
        SearchProductActions.BuscarItem();
});

When('o usuario digitar game of thrones na barra de busca',() => {
        SearchProductActions.InserirProduto();
});

When('clicar no primeiro produto',() => {
        SearchProductActions.ClicarNoItem();
});

Then('direcionar para a pagina e inserir o produto no carrinho',() => {
        SearchProductActions.AdicionarAoCarrinho();

});

