const {encode, decode} = require('./exercicio-3');

describe('Exercício 3', () => {
  // Teste se encode e decode são funções;
  test('Testa se encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });

  test('Testa se decode é uma função', () => {
    expect(decode).toBeDefined();
  });

  // Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente
  test('Testa se a vogal "a" se converte no número 1', () => {
    expect(encode('ama')).toEqual('1m1');
  });

  test('Testa se a vogal "e" se converte no número 2', () => {
    expect(encode('este')).toEqual('2st2');
  });
// Teste se as demais letras/números não são convertidos para cada caso;
  test('Testa se a vogal "i" se converte no número 3', () => {
    expect(encode('imita')).toEqual('3m3t1');
  });

  test('Testa se a vogal "o" se converte no número 4', () => {
    expect(encode('olho')).toEqual('4lh4');
  });

  test('Testa se a vogal "u" se converte no número 5', () => {
    expect(encode('urubu')).toEqual('5r5b5');
  });

  // Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
  test('Testa se o numero "1" se converte na vogal a', () => {
    expect(decode('1m1')).toEqual('ama');
  });

  test('Testa se o numero "2" se converte na vogal e', () => {
    expect(decode('2st2')).toEqual('este');
  });

  test('Testa se o numero "3" se converte na vogal i', () => {
    expect(decode('3m3t1')).toEqual('imita');
  });

  test('Testa se o numero "4" se converte na vogal o', () => {
    expect(decode('4lh4')).toEqual('olho');
  });

  test('Testa se o numero "5" se converte na vogal u', () => {
    expect(decode('5r5b5')).toEqual('urubu');
  });

  // Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.
  test('Testa se o número de caracteres do retorno da função é o mesmo número de caracteres passado como parâmetro', () => {
    expect(encode('amigo').length).toEqual(5);
  });

  test('Testa se o número de caracteres do retorno da função é o mesmo número de caracteres passado como parâmetro', () => {
    expect(decode('amores').length).toEqual(6);
  });
});