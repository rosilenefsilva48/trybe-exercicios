/* 
Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

Exemplo de palíndromo: arara

verificaPalindrome('arara')
Retorno esperado: true

verificaPalindrome('desenvolvimento')
Retorno esperado: false
*/
function verificaPalindrome(str) {
  let revert = str.split('').reverse().join('');
  if(str === revert) {
    return true;
  }
  return false;
}

console.log(verificaPalindrome('desenvolvimento'));