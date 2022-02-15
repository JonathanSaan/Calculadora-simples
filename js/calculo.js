let screenTotal = document.querySelector('p');
let screen = document.querySelector('#numbers');
let btn = document.querySelectorAll('.num');


for (item of btn) {
  item.addEventListener('click', (e)=> {
    btntext = e.target.innerText;

    if (btntext == '×') {
      btntext = '*';
    };

    if (btntext == '÷') {
      btntext = '/';
    };

    screen.value += btntext;
  });
};

function backspc() {
  screen.value = screen.value.substr(0,
    screen.value.length-1);
};

function Resultado() {
  let resultado = eval(screen.value);
  screenTotal.innerHTML = resultado;
  screen.value = screen.value.substr(0,
    screen.value.length-300);
  if (typeof resultado == 'undefined') {
    screenTotal.innerHTML = ' ';
  };
};
