Feature: Login 

Scenario: Realizar login
  Given que o usuario esteja na página de login do Advantage Online Shopping
  When o usuario clique no botao de logar
  When o usuario inserir Username "leopb94" e password "123456Teste"
  When clicar no botao de Sign In
  Then o usuario deve ser autenticado com sucesso