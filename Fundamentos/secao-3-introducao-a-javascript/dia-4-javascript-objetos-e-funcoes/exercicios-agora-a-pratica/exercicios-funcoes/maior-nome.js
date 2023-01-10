/*
Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

Valor esperado no retorno da função: Fernanda.
*/
function findBiggestName(names) {
  let biggestName = names[0];
  for(let index in names) {
    if(biggestName.length < names[index].length) {
      biggestName = names[index];
    }
  }
  return biggestName
}
console.log(findBiggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));