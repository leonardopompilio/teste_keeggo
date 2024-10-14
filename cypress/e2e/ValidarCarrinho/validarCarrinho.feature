Feature: Adicionar produtos ao carrinho de compras

Scenario: Adicionar um produto ao carrinho de compras a partir da lista de resultados
  Given que o usuário tenha realizado uma busca por game of thrones
  When eu clico no carrinho para ver os itens
  When eu devo prosseguir para o checkout
  When devo clicar em next para seguir para o pagamento
  Then Devo validar se o produto Game Of Thrones esta no pagamento
