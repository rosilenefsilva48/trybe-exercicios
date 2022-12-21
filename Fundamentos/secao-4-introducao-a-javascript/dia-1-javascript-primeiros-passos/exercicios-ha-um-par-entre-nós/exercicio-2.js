/* 
Exercício (2)

Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.

Bonus: use somente um if.

*/
const number1 = 4;
const number2 = 6;
const number3 = 3;

if(number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0){
  console.log(true);
}else{
  console.log(false);
}