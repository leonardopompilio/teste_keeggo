Feature: Buscar produto na aba de pesquisa

Scenario: Buscar um produto existente
  Given que o usuario esteja na pagina de login do Advantage Online Shopping
  When eu clicar na lupa para pesquisa de produto
  When o usuario digitar game of thrones na barra de busca
  When clicar no primeiro produto
  Then direcionar para a pagina e inserir o produto no carrinho