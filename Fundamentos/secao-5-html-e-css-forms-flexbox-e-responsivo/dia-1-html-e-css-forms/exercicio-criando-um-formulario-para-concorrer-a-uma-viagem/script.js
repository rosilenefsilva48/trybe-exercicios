window.onload = function () {
  const submitBtn = document.getElementById("enviar"); 
  submitBtn.addEventListener('click', submit);
  const clearBtn = document.querySelector('#reset');
  clearBtn.addEventListener('click', clearFields);
  const divulgacao = document.getElementById('divulgacao');
  divulgacao.addEventListener("change",submitInformation);
};

function submit(event) {
  event.preventDefault();
  const validation = textValidation();
  if(validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso Trybe Trip.');
  }
};

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    if(formElements[index].type === 'radio' || formElements[index].type === 'checkbox'){
      userInput.checked = false;
    } else {
      userInput.value = '';
    }
  }
  textArea.value = '';
};

function submitInformation() {  
  const submitBtn = document.getElementById('enviar');
  const divulgacao = document.getElementById('divulgacao');
  submitBtn.disabled = !divulgacao.checked;
};

function textValidation() {
  const nameField = document.getElementById('input-name');
  const emailField = document.getElementById('input-email');
  const textAreaField = document.getElementById('text-area');

  const email = emailField.value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = nameField.value.length;
  const invalidName = name < 10 || name > 40;

  const textArea = textAreaField.value.length;
  const invalidTextArea = textArea > 500;

  if(invalidEmail || invalidName || invalidTextArea) {
    return false;
  } else {
    return true;
  }
};
