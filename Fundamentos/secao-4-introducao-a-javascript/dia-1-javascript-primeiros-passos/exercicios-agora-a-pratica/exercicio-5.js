// Exercício (5)

let angulo1 = 40;
let angulo2 = 80;
let angulo3 = -60;

if (angulo1 + angulo2 + angulo3 === 180) {
  console.log(true);
}else if(angulo1 + angulo2 + angulo3 > 0 && angulo1 + angulo2 + angulo3 < 180){
  console.log(false)
}else if(angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0){
  console.log("Ângulo inválido");
}


console.log(angulo1 + angulo2 + angulo3);