const modal = document.getElementById('myModal');
const myBtn1 = document.querySelector('#myBtn1');
const closeBtn = document.querySelector('.close');

loadEvents()
function loadEvents() {
  myBtn1.addEventListener('click', open)
  closeBtn.addEventListener('click', close)
}

function close(e) {
  e.preventDefault()
  modal.style.display = "none";
}

function open(){
  modal.style.display = "block";
}

window.onclick = function(e){
  if(e.target === modal) {
    modal.style.display = "none";
  }
}