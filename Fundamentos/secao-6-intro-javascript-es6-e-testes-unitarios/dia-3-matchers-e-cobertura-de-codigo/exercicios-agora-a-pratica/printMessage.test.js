const { info, printMessage } = require("./printMessage");

describe('testes para a função printMessage', () => {
  test('Verifica se o objeto passado como parâmetro possui a propriedade "personagem"', () => {
    expect(info).toHaveProperty("personagem");
  });

  test('Verifica se a resposta contém a informação "Boas vindas," antes de chamar o nome da personagem', () => {
    expect(printMessage(info)).toMatch('Boas vindas');
  });

  test('Verifica se a resposta contém o nome correto da personagem', () => {
    expect(printMessage(info)).toMatch('Margarida');
  });

  test('Verifica se a mensagem de erro "objeto inválido" é lançada caso a função seja chamada com um objeto inválido.', () => {
    const invalidObj = {
      origem: "Pato Donald",
      nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    };
    expect(() => { printMessage(invalidObj)}).toThrow(new Error('objeto inválido'));
    expect(() => { printMessage() }).toThrow(new Error('objeto inválido'));
  });
});
