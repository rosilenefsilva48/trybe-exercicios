const { info, printMessage } = require('./printMessage');

describe('testes para a função printMessage', () => {
  
  test('Verifica se o objeto passado como parâmetro possui a propriedade "personagem"', () => {
    expect(info).toHaveProperty('personagem');
  });
});