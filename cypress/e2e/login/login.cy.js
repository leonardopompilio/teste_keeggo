import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import LoginActions from "../../PageObjects/PageAction/LoginActions"

Given('que o usuario esteja na página de login do Advantage Online Shopping', () => {
    LoginActions.paginaInicial();
});

When('o usuario clique no botao de logar', () => {
    LoginActions.botaologin();
});

When('o usuario inserir Username {string} e password {string}', (username, password) => {
    LoginActions.inserirUsuario(username);
    LoginActions.inserirSenha(password);
});

When('clicar no botao de Sign In', () => {
    LoginActions.apertarBotao();
});

Then('o usuario deve ser autenticado com sucesso', () => {
    cy.contains('leopb94');
})

