// Exercício (5)

let angulo1 = 100;
let angulo2 = 80;
let angulo3 = 60;

let somaDosAngulos = angulo1 + angulo2 + angulo3;
let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0

if (angulosPositivos  && somaDosAngulos === 180) {
  console.log(true);
}else if(angulosPositivos && somaDosAngulos < 180 > 0){
  console.log(false)
}else{
  console.log("Ângulo inválido");
}

console.log(somaDosAngulos);