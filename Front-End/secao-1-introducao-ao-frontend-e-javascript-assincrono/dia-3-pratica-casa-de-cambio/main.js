import Swal from 'sweetalert2';
// captura dos elementos que serão usados

const input = document.getElementById('input');
const button = document.getElementById('btnSearch');
const ul = document.getElementById('list');
// Armazena o endereço da API em uma constante

const callEndPoint = () => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    ul.innerHTML = '';
    const inputValue = input.value;
    const BASE_URL = `https://api.exchangerate.host/latest?base=${inputValue}`;
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        const { rates } = data;
        if (Object.keys(rates).includes(inputValue)) {
          const ratesArray = Object.entries(rates);
          ratesArray.forEach((rate) => {
            const li = document.createElement('li');
            li.innerText = `${rate}`;
            ul.appendChild(li);
          });
        } else {
          throw new Error('Voce precisa passar uma moeda válida');
        }
      })
      .catch((error) => Swal.fire({
        title: 'Ops...',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK',
      }));
  });
};

window.onload = () => {
  callEndPoint();
};
