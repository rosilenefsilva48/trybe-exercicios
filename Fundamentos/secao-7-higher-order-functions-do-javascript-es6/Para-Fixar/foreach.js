//Use o método forEach para exibir a lista de emails com a seguinte frase: O email ${email} está cadastrado em nosso banco de dados!.

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const listDatabase = (email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
}

emailListInData.forEach(listDatabase);