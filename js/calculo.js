function getInputValue() {
  let input = event.target.innerHTML;
  printValue(input);
};

let buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].setAttribute('onclick', 'getInputValue()');
}

function printValue(val) {
  let out = document.querySelector("#numbers").value;
  let current = out.innerHTML;
  
  if (out.innerHTML == "0") {
    if (val != [id="del"]) {
      out.innerHTML = "";
      out.innerHTML += val;
    }
  } else {
    if (val == [id="del"]) {
      out.innerHTML = current.slice(0, -1);
      if (out.innerHTML.length <= 1) {
        out.innerHTML = "0";
      }
    }
    if (val != [id="del"] && val != "=") {
      out.innerHTML += val;
    }
    if (val == "=") {
      let res = out.innerHTML;
      out.innerHTML = eval(res);
      out.innerHTML = " ";
    }
  }

}
