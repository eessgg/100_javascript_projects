const btn = document.getElementById('button');


function loadEvents() {
  btn.addEventListener('click', getExternal)
}

// Get from external API
function getExternal() {
  var randNum = Math.round(Math.random()*10);
  console.log(randNum);

  fetch(`https://swapi.co/api/people/`)
    .then(function(res){ return res.json(); })
    .then(function(data) {
      let results = data.results;

      showResults(results);
    })
    .catch(function(err){
      console.log(err);
    });
}

function showResults(results) {
  console.log(results.slice(0, 5))
  let output = '';
  results.map(function(user) {
    output += `
      <div class="card">
        <h3 class="card-name"> ${user.name} </h3>
        <p class="card-filme"> ${user.films[0]} </p>
        <p class="card-gender">Gender: ${user.gender}</p>
      </div>
    `;
  });
  document.getElementById('output').innerHTML = output;
}

window.addEventListener('DOMContentLoaded', getExternal);


// function randomNumber(){
//   var randNum = Math.round(Math.random()*10);
//   console.log(randNum);
//   return getExternal(randNum);
// }
