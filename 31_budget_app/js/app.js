
const incName = document.querySelector('[data-name="inc-name"]')
const incValue = document.querySelector('[data-vl="inc-value"]')
const expName = document.querySelector('[data-nameexp="exp-name"]')
const expValue = document.querySelector('[data-vlexp="exp-value"]')
const incBtn = document.querySelector('[data-btninc="inc"]')
const expBtn = document.querySelector('[data-btnexp="exp"]')
// const formInput = document.querySelector('.form-input')
const totalSoma = document.querySelector('[data-totalexp="texp"]')
const totalresults = document.querySelector('.total-results__result')
const deleteBtn = document.querySelectorAll('.btndelete')

const messageError = document.querySelector('.message-error')

let values = []

function loadEvents () {
  incBtn.addEventListener('click', function (e) {
    e.preventDefault()
    getBudgetValue(incName, incValue, incBtn)
  })
  expBtn.addEventListener('click', function (e) {
    e.preventDefault()
    getBudgetValue(expName, expValue, expBtn)
    console.log('as')
  })
  deleteBtn.forEach(function(dlBtn) {
    dlBtn.addEventListener('click', deleteListItem)
  })
}

function getBudgetValue (inputname, inputValue, button) {
  if (inputname.value === '' && inputValue.value === '') {
    console.log('empty')
    showError(inputname, inputValue)
  } else {
    const budgetObj = { name: inputname.value, value: inputValue.value }
    showList(budgetObj, button)
  }

  inputname.value = ''
  inputValue.value = ''
}

function showList (obj, button) {
  const listOutput = document.querySelector(`.list-output-${button.dataset.btn}`)
  let listElement = ''
  listElement = `
    <li> <span>${obj.name}</span>  <span>R$ ${obj.value}<span class="btndelete">x</span></span> </li>
  `
  listOutput.innerHTML += listElement

  if (button.value === '+') {
    console.log('as')
  }
  
  calcExpense(obj)
  loadEvents()
}

function calcExpense (value) {
  const valuesObj = []
  values.push(value)
  values.map(vl => {
    console.log(vl.value)
    valuesObj.push(vl.value)
  })

  const somaResult = valuesObj.reduce(somaVl)
  totalSoma.innerHTML = `<p>Total: </p> <p>R$ (+) ${somaResult}</p>`
  totalresults.innerHTML = `R$ ${somaResult}`
}

function somaVl (total, num) {
  return parseFloat(parseFloat(total) + parseFloat(num))
}

function showError (inputname, inputValue) {
  inputname.style.border = '1px solid rrgb(250,0,0)'
  inputname.style.backgroundColor = 'rgba(250,100,100,0.5)'
  inputValue.style.border = '1px solid rrgb(250,0,0)'
  inputValue.style.backgroundColor = 'rgba(250,100,100,0.5)'
  messageError.style.display = 'block'
  messageError.textContent = 'Please, enter some name and value.'
  setTimeout(() => {
    inputname.style.border = '1px solid rgba(100,100,100, 0.2)'
    inputname.style.backgroundColor = '#A3A4A4'
    inputValue.style.border = '1px solid rgba(100,100,100, 0.2)'
    inputValue.style.backgroundColor = '#A3A4A4'
    messageError.style.display = 'none'
  }, 3000)
}


function deleteListItem (e) {
  e.preventDefault()
  e.stopPropagation()

  if (e.target.classList.contains('btndelete')) {
    // e.target.parentElement.parentElement.remove()
  }
  console.log('parent')

  // parent.remove()
}

window.addEventListener('DOMContentLoaded', loadEvents)
