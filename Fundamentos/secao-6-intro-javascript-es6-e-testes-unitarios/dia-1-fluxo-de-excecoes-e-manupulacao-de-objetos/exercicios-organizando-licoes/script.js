const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addNightShift(obj, key, value) {
  obj[key] = value;
}

addNightShift(lesson2,'turno', 'noite');
// console.log(lesson2);

const listKeys = (obj) => Object.keys(obj);
// console.log(listKeys(lesson3));

const objectSize = (obj) => Object.keys(obj).length;
// console.log(objectSize(lesson1));

const listValues = (obj) => Object.values(obj);
// console.log(listValues(lesson3));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// console.log(allLessons);

const getNumberOfStudents = (obj) => {
  let total = 0;
  const keys = Object.keys(obj);

  for (index in keys) {
    total += obj[keys[index]].numeroEstudantes;
  }
  return total;
};
getNumberOfStudents(allLessons);

// console.log(getNumberOfStudents(allLessons));

const getValueByNumber = (obj, number) => Object.values(obj)[number];
getValueByNumber(lesson3, 2);

// console.log(getValueByNumber(lesson3, 2));

const verifyPair = (obj, key, value) => {
  const entries = Object.entries(obj);
  let isEqual = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) {
      isEqual = true;
    }
  }
  return isEqual;
};
verifyPair(lesson2, 'professor', 'Carlos');

// console.log(verifyPair(lesson2, 'professor', 'Carlos'));