/*
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.
*/
function returnIndexOfArray(arr) {
  let highestIndex = 0;
  for(let index in arr) {
    if(arr[highestIndex] < arr[index]) {
      highestIndex = index;
    }    
  }
  return highestIndex;
}
console.log(returnIndexOfArray([2, 3, 6, 7, 10, 1]));