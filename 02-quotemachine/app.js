var btn = document.getElementById("btn");
var results = document.getElementById("results");

function loadEvents() {
  btn.addEventListener("click", handleClick)
}

function getData() {
  fetch('./quotes.json')
    .then(res => res.json())
    .then(data => {
      // data.quotes.map(d => console.log(d))
      let quotes = data.quotes;
      showData(quotes)
    })
    .catch(error => console.log(error))
}

function showData(data) {
  let randNum = Math.floor(Math.random() * data.length)
  console.log((data[randNum]));
  const quote = data[randNum];
  let outputResult = ''
  outputResult += `
    <div class="quote">
      <p class="quote-text"> ${quote.quote} </p>
      <p class="quote-author"> ${quote.author} </p>
    </div>
    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet!</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  `
  results.innerHTML = outputResult
}

function handleClick() {
  getData()
}

window.addEventListener('DOMContentLoaded', loadEvents)