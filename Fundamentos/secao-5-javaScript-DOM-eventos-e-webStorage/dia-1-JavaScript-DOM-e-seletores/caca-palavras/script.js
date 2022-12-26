const arrayWords = ['LARANJA', 'PERA', 'LARANJA', 'UVA', 'MANGA']

// função para gerar células dento da matriz
const generateCells = () => {
  const matriz = document.querySelector('.matriz');
  for(let index = 0; index < 10; index +=1){
    const line = document.createElement('div');
    line.className = 'line';
    for(let index1 = 0; index1 < 10; index1 +=1){
      const cell = document.createElement('div');
      cell.className = 'cell';
      line.appendChild(cell)
    }
    matriz.appendChild(line)
  }
}
generateCells();

const addWords = () => {
  const lines = document.querySelectorAll('.line');
  const indexLine = Math.floor(Math.random() * lines.length);
  
  const indexWord = Math.floor(Math.randon() * arrayWords.length);
  const word = arrayWords[indexWord];

  const cells = lines[indexLine].querySelectorAll('.cell');
  const indexCell = Math.floor(Math.randon() * (cells.length - word.length + 1));
  
  for(let index = 0; index < word.length; index += 1){
    cells[indexCell + index].innerText = word[index];
  }
}

for(let index = 0; index < arrayWords.length; index += 1){
  addWords();
}
addWords();