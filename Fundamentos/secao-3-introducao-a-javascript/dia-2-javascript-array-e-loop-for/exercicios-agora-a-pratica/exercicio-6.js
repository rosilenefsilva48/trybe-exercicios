// Exercício (6)

//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumber = 0
for (let index = 0; index < numbers.length; index += 1){
  
  if(numbers[index] % 2 !== 0){
   oddNumber += 1  
  }
}

if(oddNumber === 0){
  console.log(`Nenhum valor ímpar encontrado`);
}else{
  console.log(oddNumber);
}

    

