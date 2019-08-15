const artistInput = document.querySelector('.artist');
const btnData = document.querySelector('#btnData');
const inputsArt = document.querySelector('.artist');
const inputsTrk = document.querySelector('.track');
const errorMsgArt = document.querySelector(".errorMsgArt");
const errorMsgTrk = document.querySelector(".errorMsgTrk");
const lyrics = document.querySelector('#outputLyrics');


const msgText = {
  art: 'Please, digite um nome de cantor / banda...❤ (´◔‸◔`)',
  trk: 'Please, digite um nome de música...▲ ♪┏(°.°)┛',
}


function loadEvent() {
  btnData.addEventListener('click', getInput)
}

function getInput(e) {
  e.preventDefault();
  let inputValues = { artist: undefined, track: undefined };

  if (inputsArt.value === '') {
    handleErrors(inputsArt, errorMsgArt, msgText.art)
  } else {
    inputValues.artist = inputsArt.value;
  }
  if (inputsTrk.value === '') {
    handleErrors(inputsTrk, errorMsgTrk, msgText.trk)
  }  else {
    inputValues.track = inputsTrk.value;
  }

  return getData(inputValues);
}

function handleErrors(inputField, msgField, errorTxt) {
  if (inputField.value === '') {
    msgField.style.display = 'block';
    msgField.innerHTML = errorTxt;
    inputField.style.borderColor = 'red';
    setTimeout(function() {
      msgField.style.display = 'none';
    }, 3000)
  }
}

function getData(userInputData) {
  // const API_KEY = `17276e54a5a0fc5e887e842bbd52cde3`;
  // const url = `https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&q_track=freak&q_artist=silverchair&quorum_factor=1&apikey=${API_KEY}`;


  const url = `https://api.lyrics.ovh/v1/${userInputData.artist.trim()}/${userInputData.track}`;

  fetch(url)
    .then(response => response.json())
    .then(data => showData(userInputData, data))
    .catch(error => console.log(error));
}

function showData(user, dt) {
  console.log(dt)
  const artistName = user.artist.charAt(0).toUpperCase() + user.artist.slice(1);
  const songName = user.track.charAt(0).toUpperCase() + user.track.slice(1)
  lyrics.innerHTML = `
    <h2> ${artistName} - ${songName} </h2>
    <pre>${dt.lyrics}</pre>
  `;
}

window.addEventListener('DOMContentLoaded', loadEvent);