//Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let n = 4;
let asteriscos = '*';
let linhaPreenchida = '';

for(let linha = 0; linha < n; linha +=1) {
  linhaPreenchida += asteriscos
};

for(let coluna = 0; coluna < n; coluna +=1) {
  console.log(linhaPreenchida);
};