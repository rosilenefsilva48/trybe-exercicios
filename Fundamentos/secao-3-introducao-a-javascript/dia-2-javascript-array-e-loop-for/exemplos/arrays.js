let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

//Sempre que precisar armazenar várias informações, o Array é uma boa alternativa e será uma ferramenta muito útil. Observamos que, por meio do .length, conseguimos ter acesso à quantidade de elementos contidos nele. Agora, como podemos acessar essas informações? Veja este exemplo:

let tasksList1 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask1 = tasksList1[0];
console.log(searchForFirstTask1);


let searchForLastTask1 = tasksList[tasksList1.length - 1];
console.log(searchForLastTask1);


// Repare que o método .push() adiciona um novo item no final do array. Se precisarmos adicionar no início, podemos usar o .unshift(). Teste em seu console e veja o resultado.


let tasksList2 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList2.unshift('Fazer pausas durante o dia');
tasksList2.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList2);

// O método .pop() nos permite remover o último item do array. Mas se precisarmos remover o primeiro item da lista, podemos usar o .shift(). Faça em seu console e veja o resultado.

let tasksList3 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList3.shift();
tasksList3.pop();  // remove a última tarefa
console.log(tasksList3);

// Outra importante ferramenta é o indexOf(), usado para procurar o índice de um item no Array. Veja o exemplo:

let tasksList4 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask4 = tasksList.indexOf('Reunião');
console.log(indexOfTask4);

//Para fixar, faça os próximos exercícios:

// 1-Obtenha o valor “Serviços” do array menu:
// 2-Procure o índice do valor “Portfólio” do array menu:
// 3-Adicione o valor “Contato” no final do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
let indexOfMenu = menu.indexOf('Portfólio')
menu.push('contato');
console.log(menuServices);
console.log(indexOfMenu);
console.log(menu)