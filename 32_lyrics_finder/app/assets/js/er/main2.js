// const artistInput = document.querySelector('.artist');
// const btnData = document.querySelector('#btnData');
// const inputsArt = document.querySelector('.artist');
// const inputsTrk = document.querySelector('.track');
// const errorMsgArt = document.querySelector(".errorMsgArt");

// const msgText = {
//   emptyArt: 'Please, digite um nome de cantor / banda...▲',
//   emptyTrk: 'Please, digite um nome de música...▲',
// }

// loadEvent()
// function loadEvent() {
//   btnData.addEventListener('click', getInput)
// }

// function validate(item, msg) {

//   if (item.value === '') {
//     errorMsgArt.style.display = 'block';
//     errorMsgArt.innerHTML = msg;
//   }
// }

// function getInput(e) {
//   e.preventDefault();
//   let inputValues = { artist: undefined, track: undefined };

//   if (inputsArt.value) {
//     console.log(inputsArt);
//     validate(inputsArt, msgText.emptyArt)
//     inputValues.track = inputsArt.value
//   }
//   if (inputsTrk.value === '') {
//     console.log(inputsTrk);
//     validate(inputsTrks, msgText.emptyArt)
//     inputValues.track = inputsArt.value
//   }
// }


// // function getInput(e) {
// //   e.preventDefault();
// //   const inputValues = {}
// //   const parent = e.target.parentElement;
// //   const child = parent.children;

// //   [...child].map(elm => {
// //     // console.log(elm.classList.contains('input1'))
// //     console.log(elm)

// //     // if(elm.classList.contains('input1')) {
// //     //   inputValues.artist = elm.value
// //     // }
// //   })

// // }
