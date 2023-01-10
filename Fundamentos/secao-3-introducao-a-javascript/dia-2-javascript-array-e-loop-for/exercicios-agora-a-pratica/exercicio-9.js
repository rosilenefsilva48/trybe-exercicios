// Exercício (9)

// 9. Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

const myArray = []

for(let index = 1; index <= 25; index +=1){
  myArray.push(index)

}
console.log(myArray);

for (let index = 0; index < myArray.length; index += 1) {
  console.log(myArray[index] / 2);
};