function getInputValue() {
  let input = event.target.innerText
  printValue(input);
}

let buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].setAttribute('onclick', 'getInputValue()');
}

function printValue(val) {
  let outRespost = document.querySelector("p");
  let currentRespost = outRespost.innerHTML;
  
  let out = document.querySelector("h3");
  let current = out.innerHTML;
  if (out.innerHTML == "0") {
    if (val != "[name='DEL']") {
      out.innerHTML = "";
      out.innerHTML += val;
    }
  } else {
    if (val == "[name='DEL']") {
      out.innerText = current.slice(0, -1);
      if (out.innerHTML.length <= 1) {
        out.innerHTML = "0";
      }
    }
    if (val != "[name='DEL']" && val != "=") {
      out.innerHTML += val;
    }
    if (val == "=") {
      let res = outRespost.innerHTML;
      outRespost.innerHTML = eval(res);
    }
  }

}
