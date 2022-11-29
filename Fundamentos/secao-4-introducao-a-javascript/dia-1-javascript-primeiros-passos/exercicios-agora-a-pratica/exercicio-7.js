// Exercício (7)

let note = 48

if(note < 0 || note > 100){
  console.log("Nota inválida");
}else if(note >= 90){
  console.log("Nota A");
}else if(note >= 80){
  console.log("Nota B");
}else if(note >= 70){
  console.log("Nota C");
}else if(note >= 60){
  console.log("Nota D");
}else if(note >= 50){
  console.log("Nota E");
}else{
  console.log("Nota F");
}