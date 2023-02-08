import validator from 'validator';
import './style.css';

// captura de elementos HTML

const input = document.querySelector('input');
const select = document.querySelector('select');
const button = document.querySelector('button');
const messsage = document.querySelector('h2');

// configurando o UUID
const UUIDVersion = 4;

button.addEventListener('click', (event) => {
  event.preventDefault();

  const campos = {
    cpf: validator.isTaxID(input.value, 'pt-BR'),
    hexColor: validator.isHexColor(input.value),
    email: validator.isEmail(input.value),
    uuid: validator.isUUID(input.value, UUIDVersion),
    url: validator.isURL(input.value),
  };

  messsage.innerHTML = `A validação retornou ${campos[select.value]}`;
});
