const fs = require('fs').promises;

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const simpsonWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  const simpsonsWithMaggie = simpsonWithoutNelson.concat([{ id: '15', name: 'Maggie Simpson' }]);

  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie, null, 2));
}

async function main() { 
  await replaceNelson();
}

main();