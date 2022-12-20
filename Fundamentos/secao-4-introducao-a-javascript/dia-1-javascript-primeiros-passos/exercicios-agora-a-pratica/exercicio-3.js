// Exercício (3)

/* Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.
*/
const numberOne = 52;
const numberTwo = 45;
const numberThree = 74;

if (numberOne > numberTwo && numberOne > numberThree) {
  console.log(numberOne);  
}else if(numberTwo > numberOne && numberTwo > numberThree){
  console.log(numberTwo);
}else{
  console.log(numberThree);
}