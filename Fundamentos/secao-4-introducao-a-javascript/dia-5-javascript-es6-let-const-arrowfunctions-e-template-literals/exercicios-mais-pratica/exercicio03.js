/*
 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

Exemplo:

  longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
De olho na dica: Nesse exercício, será necessário utilizar os conhecimentos sobre array, método split e loop for/of.

Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort().
*/

const longestWord = (phrase) => {
  const wordArray = phrase.split(' ');
  let result = '';
  let maxLengthWord = 0;

  for(let word of wordArray) {
    if(word.length > maxLengthWord) {
      maxLengthWord = word.length;
      result = word;
    }
  }
  return result;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
