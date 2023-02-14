import Swal from 'sweetalert2';
import '@sweetalert2/theme-dark/dark.min.css';
import { renderCoins } from './components';
import { fetchRates } from './services/exchange';
import './style.css';

const searchBtn = document.querySelector('.search-btn');
const coinInput = document.querySelector('#coin-input');

function handleSearch() {
  const searchedCoin = coinInput.value;

  if (!searchedCoin) {
    Swal.fire({
      title: 'Erro',
      text: 'Você precisa digitar uma moeda!',
      icon: 'error',
    });
    return;
  }

  // Buscando a moeda pesquisada pelo usuário
  fetchRates(searchedCoin)
    .then((dados) => {
      // Reagindo a resposta da API
      const { rates, base } = dados;

      // Transforma o objeto em array de [[chave, valor]]
      const ratesArray = Object.entries(rates);

      // Transformando o array em um array no formato [{ name: 'EUR', value: 5.570 }]
      const ratesArrayObject = ratesArray.map((rate) => (
        { name: rate[0], value: rate[1] }
      ));

      renderCoins(ratesArrayObject, base);
    })
    .catch((error) => {
      Swal.fire({
        title: 'Erro',
        text: error.message,
        icon: 'error',
      });
    });
}

searchBtn.addEventListener('click', handleSearch);
