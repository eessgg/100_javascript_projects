const modal = document.getElementById('topModal');
const myBtn1 = document.querySelector('#myBtn1');
const closeBtn = document.querySelector('.close');
const modalContent = document.querySelector('.modal-content')

const animations = ['animated-roll', 'animated-bottom ', 'animated-top', 'animated-top-roll'];
const randAnimator = Math.floor(Math.random() * animations.length);
console.log(randAnimator);

loadEvents()
function loadEvents() {
  myBtn1.addEventListener('click', open)
  closeBtn.addEventListener('click', close)
}

function close(e) {
  e.preventDefault()
  modal.style.display = "none";
  window.reset()
}

function open(){
  modalContent.classList.add(animations[randAnimator])
  modal.style.display = "block";
}

window.onclick = function(e){
  if(e.target === modal) {
    modal.style.display = "none";
  }
}
