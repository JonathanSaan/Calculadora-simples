const night = document.querySelector('#mudarcor')
let mudarimagem = document.querySelector('#img')


function mudar_cores(){
  let pontinho = document.querySelector('*')
  let fundo = document.querySelector('body')
  let resultado = document.querySelector('#resultado')
  let numeros = document.querySelector('#numeros')
  let buttons = document.querySelector('.num');
  let funcoes = document.querySelector('#funcoes')
  
  pontinho.classList.toggle('active') //mudar a cor dos numeros/letras
  fundo.classList.toggle('active')
  resultado.classList.toggle('active');
  numeros.classList.toggle('active');
  funcoes.classList.toggle('active');
}

const calcular = document.getElementById('confirmar');

night.addEventListener("click", function() {
  mudar_cores()
  mudarimagem.src = ('img/night-mode.png');
});

calcular.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = `teste`
});