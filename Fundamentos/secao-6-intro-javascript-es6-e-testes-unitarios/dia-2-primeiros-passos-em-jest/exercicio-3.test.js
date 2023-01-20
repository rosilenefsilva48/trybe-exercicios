const {encode, decode} = require('./exercicio-3');

/* Para as funções encode e decode, crie os seguintes testes em Jest:
1. Teste se encode e decode são funções;
2. Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
3. Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
4. Teste se as demais letras/números não são convertidos para cada caso;
5. Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro. */

describe('Testes para ambas as funções', () => {
  test('Testa se encode e decode são funções', () => {
    expect(typeof encode).toEqual('function');
    expect(decode).toBeDefined();
  });

  test('Testa se encode e decode retornam o mesmo número de caracteres que a string passada por parâmetro', () => {
    expect(encode('chupeta').length).toEqual(7);
    expect(decode('4v4').length).toEqual(3);
  });
});

describe('Testes para a função encode', () => {
  test('Para a função encode, testa se a vogal "a" é convertida em 1', () => {
    expect(encode('abacaxi')).toEqual('1b1c1x3');
  });

  test('Para a função encode, testa se a vogal "e" é convertida em 2', () => {
    expect(encode('elefante')).toEqual('2l2f1nt2');
  });

  test('Para a função encode, testa se a vogal "i" é convertida em 3', () => {
    expect(encode('infantil')).toEqual('3nf1nt3l');
  });

  test('Para a função encode, testa se a vogal "o" é convertida em 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });

  test('Para a função encode, testa se a vogal "u" é convertida em 5', () => {
    expect(encode('urubu')).toEqual('5r5b5');
  });
});

describe('Testes para a função decode', () => {
  test('Para a função decode, testa se o número "1" é convertido na vogal "a"', () => {
    expect(decode('1b1c1x3')).toEqual('abacaxi');
  });

  test('Para a função decode, testa se o número "2" é convertido na vogal "e"', () => {
    expect(decode('2l2f1nt2')).toEqual('elefante');
  });

  test('Para a função decode, testa se o número "3" é convertido na vogal "i"', () => {
    expect(decode('3nf1nt3l')).toEqual('infantil');
  });

  test('Para a função decode, testa se o número "4" é convertido na vogal "o"', () => {
    expect(decode('4v4')).toEqual('ovo');
  });

  test('Para a função decode, testa se o número "5" é convertido na vogal "u"', () => {
    expect(decode('5r5b5')).toEqual('urubu');
  });
});