const night = document.querySelector('#mudarcor');
let mudarimagem = document.querySelector('#img');

function mudar_cores() {
  let fundo = document.querySelector('body');
  let resultado = document.querySelector('#resultado');
  let numeros = document.querySelector('#numeros');
  let buttons = document.querySelector('.num');
  let funcoes = document.querySelector('#funcoes');

  fundo.classList.toggle('active')
  resultado.classList.toggle('active');
  numeros.classList.toggle('active');
  buttons.classList.toggle('active');
  funcoes.classList.toggle('active');
  
  if (night.checked == true) {
    mudarimagem.src = ('img/night-mode.png');
  }
  else{
    mudarimagem.src = ('img/sunny.png');
  };
};

const calcular = document.getElementById('confirmar');

night.addEventListener("click", function() {
  mudar_cores()
});

calcular.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = `teste`
});
