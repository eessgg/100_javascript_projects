// http://api.forismatic.com/api/1.0/method=getQuote&key=457653&format=xml&lang=en

$(document).ready(function(){

  var quote;
  var author;

  function getNewQuote(){
    $.ajax({
      url:'http://api.forismatic.com/api/1.0/method=getQuote&key=457653&format=xml&lang=en',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response){
        quote  = response.quoteText;
        author = response.quoteAuthor;
        console.log(author);
        $('.quote').text('"' + quote + '"');
        $('#author').text('said by by ' + author);

        if (author) {
          $('#author').text('said by by ' + author);
        } else {
          $('#author').text('- unknown');
        }

      }
    });
  }
  getNewQuote();

  $('#btn').on('click', function(event){
    event.preventDefault();
    $('.quote').text(getNewQuote());
  });

  $('.share-quote').on('click', function(e) {
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' by ' +author));
  });
});