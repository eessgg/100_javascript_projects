// vars
const form = document.getElementById('form');
const select = document.querySelector('[data-js="select"]');
const tipResult = document.querySelector('.tip-result');
const totalResult = document.querySelector('.total-result');

// events
function loadEvents() {
  form.addEventListener('submit', handleSubmit)
}


// function
function handleSubmit(e) {
  e.preventDefault()

  const inputs = {
    inputBill: document.querySelector('[data-js="bill-input"]').value,
    inputPeople: document.querySelector('[data-js="people-input"]').value,
    userSelect: select.options[select.selectedIndex].value,
  }

  validate(inputs)
  console.log(inputs);
}

function validate(inputs) {

  if(inputs.inputBill === '' || inputs.inputTip === '') {
    console.log('error')
  } else {
    calcTip(inputs)
  }
}

function calcTip(inputs) {

  var percent = inputs.userSelect  / inputs.inputBill;
  var valueperc = percent * 100;
  var totalPlusTip = (Number(inputs.inputBill) + valueperc);
  // people
  var calcPeople= totalPlusTip  / inputs.inputPeople;
  var calcTip= valueperc  / inputs.inputPeople;

  if(inputs.inputPeople <= 1) {
    tipResult.textContent = 'R$: ' + valueperc.toFixed(2);
    totalResult.textContent = 'R$: ' + totalPlusTip.toFixed(2);
  } else {
    tipResult.textContent = 'R$: ' + calcTip.toFixed(2);
    totalResult.textContent = 'R$: ' + calcPeople.toFixed(2);
  }
}



window.addEventListener('DOMContentLoaded', loadEvents)