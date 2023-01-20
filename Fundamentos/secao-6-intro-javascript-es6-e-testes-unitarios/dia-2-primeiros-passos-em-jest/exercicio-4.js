function techList(technologiesList, name) {
  if(technologiesList.length === 0) return 'Vazio!';

  const sortedArray = technologiesList.sort();
  const newList = [];

  for (let index = 0; index < sortedArray.length; index += 1) {
    newList.push({
      tech: sortedArray[index],
      name,
    });
  }

  return newList;
};

module.exports = techList;