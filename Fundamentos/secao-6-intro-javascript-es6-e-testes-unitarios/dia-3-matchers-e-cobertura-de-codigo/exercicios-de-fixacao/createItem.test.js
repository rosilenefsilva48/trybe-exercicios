const createItem = require('./createItem');

describe('a função createItem', () => {
  
  it('cria um item válido', () => {
    expect(createItem('banana', 'kg', 1.99, 20)).toEqual({ name: 'banana', unit: 'kg', price: 1.99, quantity: 20 })
  });
  
  /* it('utiliza zero como quantidade padrão', () => {
    expect()
  });
  
  it('Lança um erro quando não recebe parâmetros', () => {
    expect()
  });
  
  it('Lança um erro se o nome do item não é uma string', () => {

  });
  
  it('Lança um erro se o preço é negativo', () => {

  });
  
  it('Lança um erro se o preço é zero'), () => {

  }; */
});