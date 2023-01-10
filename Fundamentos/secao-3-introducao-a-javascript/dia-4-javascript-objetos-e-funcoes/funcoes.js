/* Desenvolva cada exercício a seguir utilizando funções:
Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter  duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*/

function sum(a, b) {
  return a + b;
};
console.log(sum(5, 10))

function sub(a, b) {
  return a - b;
};
console.log(sub(5, 10));

function multi(a, b) {
  return a * b;
};
console.log(multi(5, 10));

function div(a, b) {
  return a / b;
};
console.log(div(5, 10));

function mod(a, b) {
  return a % b;
};
console.log(mod(5, 10))

//Faça um programa que retorne o maior de dois números.

function biggestNumber (number1, number2) {
  if(number1 > number2) {
    return number1;
  }
  return number2
}
console.log(biggestNumber(6, 4));

//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function biggestof3Numbers(valueA, valueB, valueC) {
  if(valueA > valueB && valueA > valueC) {
    return valueA;
  } else if(valueB > valueA && valueB > valueC) {
    return valueB;
  }
  return valueC;
}

//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function positiveNegative(value) {
  if(value > 0) {
    return 'Positive';
  } else if(value < 0) {
    return 'Negative';
  }
  return 'Zero';
}
/*
Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

Um ângulo será considerado inválido se não tiver um valor positivo.
*/

function triangle(ang1, ang2, ang3) {
  if(ang1 + ang2 + ang3 === 180){
    return true;
  } else if(ang1 < 0 || ang2 < 0 || ang3 < 0) {
    return 'Erro: Ângulo de valor inválido.'
  }
  return false;
}