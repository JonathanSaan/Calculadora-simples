let h3 = document.querySelector('h3');

const number_buttons = document.querySelectorAll('[data-number]');
const delete_buttons = document.querySelector('[data-delete]');
const operator_buttons = document.querySelectorAll('[data-operator]');
const equals_button = document.querySelector('[data-equals]');

for (const numberButton of number_buttons) {
  numberButton.addEventListener("click", () => {
     h3[numberButton].innerHTML += number_buttons.value;
  });
}

/*equals_button.addEventListener("click", function() {
  event.preventDefault();
  h3.innerHTML += `teste`
});*/