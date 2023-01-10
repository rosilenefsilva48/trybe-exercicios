//Agora inverta o lado do triângulo.

const tamanho = 5;
const asterisco = '*';
let linhaPreenchida = '';
let posicao = tamanho -1;

for(let linha = 0; linha < tamanho; linha +=1) {
  for(let coluna = 0; coluna < tamanho; coluna +=1) {
    if(coluna < posicao) {
      linhaPreenchida += ' ';
    } else  {
      linhaPreenchida += asterisco;
    }
  }
  console.log(linhaPreenchida);
  linhaPreenchida = '';
  posicao -= 1;
}