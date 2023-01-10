/*
Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true

verificaFimPalavra('trybe', 'be');
Retorno esperado: true

verificaFimPalavra('joaofernando', 'fernan');
Retorno esperado: false
*/
function checkStringEnding(str, strEnd) {
  str = str.split('').reverse().join('');
  strEnd = strEnd.split('').reverse().join('');
  let control = true;

  for(let index = 0; index < strEnd.length; index += 1) {
    if(str[index] !== strEnd[index]) {
      control = false;
      break;
    }
  }
  return control;
}
console.log(checkStringEnding('joaofernando', 'fernan'));