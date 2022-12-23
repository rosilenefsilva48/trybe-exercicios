/*
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.
*/
function returnIndexOfArray(arr) {
  let smallestIndex = 0;
  for(let index in arr) {
    if(arr[smallestIndex] > arr[index]) {
      smallestIndex = index;
    }    
  }
  return smallestIndex;
}
console.log(returnIndexOfArray([2, 3, 6, 7, 10, 1]));