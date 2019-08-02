const incomeName = document.querySelector('[data-js="income-name"]')
const addIncomeBtn = document.querySelector('[data-js="addIncomeBtn"]')
const addExpenseBtn = document.querySelector('[data-js="addExpenseBtn"]')
let values = []

loadEvents()
function loadEvents() {
  addExpenseBtn.addEventListener('click', addExpenses)
  addIncomeBtn.addEventListener('click', addIncomes)
}

function addExpenses(e) {
  e.preventDefault()
  let expenseObj
  const expenseName = document.querySelector('[data-js="expense-name"]').value
  const expenseValue = document.querySelector('[data-js="expense-value"]').value

  if(expenseName === '' ||  expenseValue === '0' || expenseValue === '0' ) {
    alert('no')
    document.location.reload()
  } else {
    expenseObj = {
      name: expenseName,
      value: expenseValue
    }
  }

  return showListExpense(expenseObj)
}

function showListExpense(obj) {
  const listOutput = document.querySelector('.list-output')
  let value = obj.value
  
  let listElement = `
    <li> ${obj.name} <span>R$ ${obj.value} </span></li>
  `
  listOutput.innerHTML += listElement

  calcExpense(value)
}

function calcExpense(value) {
  const totalSoma = document.querySelector('.form-total .soma')

  values.push(value)

  let somaResult = values.reduce(somaVl)
  console.log(somaResult)

  totalSoma.innerHTML = `R$ (-) ${somaResult}`
}

function somaVl(total, num) {
  return parseFloat(parseFloat(total) + parseFloat(num));
}