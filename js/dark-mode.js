const night = document.querySelector('#mudarcor');
let mudarimagem = document.querySelector('#img');

function mudar_cores() {
  let fundo = document.querySelector('body');
  let resultado = document.querySelector('#resultado');
  let numeros = document.querySelector('#numeros');
  let numerosDoResultado = document.querySelector('#numbers');
  let buttons = document.querySelectorAll('#numeros button');
  let funcoes = document.querySelector('#funcoes');

  fundo.classList.toggle('active');
  resultado.classList.toggle('active');
  numerosDoResultado.classList.toggle('active');
  numeros.classList.toggle('active');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle('active');
  };
  funcoes.classList.toggle('active');

  if (night.checked == true) {
    mudarimagem.src = ('img/night-mode.png');
  } else {
    mudarimagem.src = ('img/sunny.png');
  };
};

night.addEventListener("click", function() {
  mudar_cores()
});
