const sum = require('./sum');

describe('Testes para a função sum', () => {
  
  test('Verifica se a função soma dois números', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Verifica se a soma de zero + zero é zero ', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Verifica se um erro é lançado caso um dos parâmetros não seja um número', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });

  test('Verifica se o erro "parameters must be numbers" é lançado caso  tentemos somar uma string e um número', () => {
    expect(() => { sum(4, '5') }).toThrow(new Error('parameters must be numbers'));
  });
});