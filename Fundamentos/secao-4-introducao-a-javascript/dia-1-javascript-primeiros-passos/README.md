# Exercícios - agora, a prática

> Nos exercícios de hoje, você vai elaborar alguns códigos de acordo com o que é pedido no enunciado. Todos trabalham a lógica condicional `(if/else e switch/case)`, operadores aritméticos `(+, -, *, /, %)` e operadores lógicos `(>, <, &&, ||)`. Para que consiga executar seus códigos, recomendamos que utilize a extensão `Code Runner`. Você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code.

1. Elabore alguns códigos e imprima o resultado no console usando o `console.log`, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:

* Adição (a + b)
* Subtração (a - b)
* Multiplicação (a * b)
* Divisão (a / b)
* Módulo (a % b)

**De olho na dica** 👀: Neste [link](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math) você encontra mais detalhes sobre operadores matemáticos 😉

**De olho na dica** 👀: Use o `console.log()` para exibir o que cada o exercício pede.

2. Utilize `if/else` para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

3. Utilize `if/else` para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

4. Utilize `if/else` para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

5. 🚀 Utilize `if/else` para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
  * [Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.](https://blogdoenem.com.br/triangulos-propriedades/)

  * Um ângulo será considerado inválido se não tiver um valor positivo.

6. Utilize `switch/case` para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

  * Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

  * Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

  * Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
  Exemplo: `bishop` (bispo) -> `diagonals` (diagonais)

7. Utilize `if/else` para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

  * Porcentagem >= 90 -> A
  * Porcentagem >= 80 -> B
  * Porcentagem >= 70 -> C
  * Porcentagem >= 60 -> D
  * Porcentagem >= 50 -> E
  * Porcentagem < 50 -> F
  
  * O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.