let screenTotal = document.querySelector('p');
let screen = document.querySelector('#numbers');
let btn = document.querySelectorAll('.num');


for (item of btn) {
  item.addEventListener('click', (e)=> {
    btnTotal = e.target.innerHTML;
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
  let resultado = screen.value = eval(screen.value);
  screenTotal.innerHTML = resultado;
  if (typeof resultado == 'undefined') {
    screenTotal.innerHTML = ' ';
    screen.innerHTML = ' ';
  };
};
