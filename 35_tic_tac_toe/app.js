const board = document.querySelector('.game')
const square = document.querySelectorAll('.square');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const h3 = document.querySelector('h3');


loadEvents()
function loadEvents() {


  // square.forEach(sq => {
  //   sq.addEventListener('click', handleClick)
  // })
  p1.addEventListener('click', playOne)
  p2.addEventListener('click', playTwo)

}


function handleClick(player, color, rmcolor) {
  square.forEach(sq => {
    sq.addEventListener('click', function() {
      h3.textContent = player;
      sq.classList.add(color);
      sq.classList.remove(rmcolor);
      sq.classList.remove('empty');

      // validateSquare(sq, color)
      if(sq[0]){
        alert('ok');
      }

    })
  })
}

function validateSquare(sq, color) {
  console.log(sq[0]);
  
  // if(square[0].classList.contains(color) === 'red') {
  //   console.log(square[0].classList.contains(color));
  // } else {
  //   console.log('not win');
  // }
  // if(sq[0].classList.contains(color) == sq[1].classList.contains(color) &&
  //    sq[1].classList.contains(color) == sq[2].classList.contains(color)){
  //     alert('win');
  //     console.log('win')
  // }
  // if(square[3].classList.contains(color) == square[4].classList.contains(color) &&
  //   square[4].classList.contains(color) == square[5].classList.contains(color)){
  //   alert('win');
  //   console.log('win')
  // }
}

function playOne(e){
  e.preventDefault();
  board.classList.remove('hide');
  board.classList.add('block');
  handleClick('Player 1', 'red', 'green')
  // validateSquare('red')
}

function playTwo(e){
  e.preventDefault();
  board.classList.remove('hide');
  board.classList.add('block');
  h3.textContent = 'Player 2';
  handleClick('Player 2', 'green', 'red')
}