const myFizzBuzz = require('./exercicio-2')

describe('Exercício 2', () => {
  
  test('Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz(30)).toBe('fizzbuzz');
  });

  test('Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz(18)).toBe('fizz');
  });

  test('Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });

  test('Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz(7)).toBe(7);
  })

  test('Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz('1')).toBe(false);
  });

});