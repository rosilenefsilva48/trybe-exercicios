// Exercício (6)

let chessPieces = "Bispo".toLowerCase()

switch (chessPieces) {
  case "peao":
    console.log("O peão se movimenta para frente em linha reta");
    break;
  case "bispo":
    console.log("O bispo se move em diagonal");
    break;
  case "torre":
    console.log("A torre se move vertical e horizontalmente")
    break;
  case "cavalo":
    console.log("O cavalo se move em L");
    break;
  case "rainha":
    console.log("A rainha se move horizontal, vertical e diagonalmente");
    break;
  case "rei":
    console.log("O rei se move para qualquer direção apenas uma casa por vez");
    break
  default:
    console.log("Não corresponde a uma peça de xadrez")
}