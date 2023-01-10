/*
 Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero.

Dica: você vai precisar de fazer um loop que vá de 0 ao número definido. Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
*/

let number = 3;
let divisors = 1;
for(let index = 2; index <= number; index += 1) {
  if(number % index === 0)  {
    divisors += 1;   
  }
};

if (divisors === 2) {
  console.log(number + ' é primo');
} else {
  console.log(number + ' não é primo');
};