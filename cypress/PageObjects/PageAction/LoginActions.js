//acoes de interacao com a pagina
import LoginElements from '../PageElements/LoginElements'

class LoginActions{
    paginaInicial(){
        cy.visit(LoginElements.urlPagina)
    }
    
    botaologin(){
        cy.get(LoginElements.iconeUser).click();
    }
    
    preencherLogin(){
        cy.get(LoginElements.search).click();
    }

    inserirUsuario (username){
        cy.get(`input[name = "${LoginElements.username}"]`).type(username)
    }

    inserirSenha(password) {
        cy.get(`input[name = "${LoginElements.password}"]`).type(password)
    }

    apertarBotao(){
        cy.get(LoginElements.botaoSignIn).click()
    }
}

export default new LoginActions();

