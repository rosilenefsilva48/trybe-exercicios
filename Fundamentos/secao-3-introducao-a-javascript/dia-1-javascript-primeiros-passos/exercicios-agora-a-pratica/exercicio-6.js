// Exercício (6)

/*
Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

let chessPieces = "Bispo".toLowerCase()

switch (chessPieces) {
  case "pawn":
    console.log("O peão se movimenta para frente em linha reta");
    break;
  case "bishop":
    console.log("O bispo se move em diagonal");
    break;
  case "rook":
    console.log("A torre se move vertical e horizontalmente")
    break;
  case "knight":
    console.log("O cavalo se move em L");
    break;
  case "queen":
    console.log("A rainha se move horizontal, vertical e diagonalmente");
    break;
  case "king":
    console.log("O rei se move para qualquer direção apenas uma casa por vez");
    break
  default:
    console.log("Não corresponde a uma peça de xadrez")
}