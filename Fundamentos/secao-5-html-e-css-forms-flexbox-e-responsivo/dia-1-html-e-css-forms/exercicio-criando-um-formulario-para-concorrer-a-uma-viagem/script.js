function submit(event) {
  event.preventDefault();
};

window.onload = function () {
  const submitBtn = document.getElementById("enviar");
  submitBtn.addEventListener('click', submit);
};