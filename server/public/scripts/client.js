$(document).ready(function() {

getJokes();

$('button').on('click', function(){
    event.preventDefault();
    addToJokes(getNewJoke());
  });

});


function getJokes() {
  var jokes = {};
    $.ajax({
      type: 'GET',
      url: '/jokes',
      success: function(data) {
        jokes = data;
        appendJokes(data);
        }
      });
    }

  function appendJokes(jokes) {
    $('#sigmaJokes').empty();
      jokes.forEach(function(joke) {
        $('#sigmaJokes').append(
        '<div id="eachJoke"><p>Question: ' + joke.jokeQuestion + '</p>' +
        '<p>Punchline: ' + joke.punchLine + '</p>' +
        '<p>Jokester: ' + joke.whoseJoke + '</p></div>'
        )
      });
    }

    function getNewJoke(operation){
      var newJokes = {};

      $.each($('form').serializeArray(), function(i, field){
        newJokes[field.name] = field.value;
      });

      return newJokes;
    }

    // sends joke data to the server
    function addToJokes(newJokeInfo){
      $.ajax({
        type: 'POST',
        url: '/jokes',
        data: newJokeInfo,
        success: getJokes,
        error: function(error){
          console.log('post request failed with error: ', error);
        }
      });
    }
