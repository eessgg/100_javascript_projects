var btn = document.getElementById("btn");

btn.addEventListener("click", function () {

  // elementos dom
  var results = document.getElementById("results");

  //request
  var hr = new XMLHttpRequest();
  hr.open("GET", "quotes.json", true);
  hr.setRequestHeader("Content-type", "application/json", true);

  //response
  hr.onreadystatechange = function () {
    if (hr.readyState == 4 && hr.status == 200) {
      var data = JSON.parse(hr.responseText);
      var randomQuote = Math.round(Math.random() * data.quotes.length);

      // output element html
      output = '<div class="quote">';
      output += '<p> "' + data.quotes[randomQuote].quote + '"</p>' + '<br/> ' +
        '<p class="author"> &#8766; ' + data.quotes[randomQuote].author + ' &#8766;</p>';

      output += '</div>';
      output +=
        '<a class="twitter-share-button" href="https://twitter.com/intent/tweet">  share on twitter</a>';
      document.getElementById('results').innerHTML = output;
      console.log("Quotes works " + data.quotes[randomQuote].quote);

    }
  }
  hr.send(null);

  function animate() {
    var results = document.getElementById("results");
  }

});