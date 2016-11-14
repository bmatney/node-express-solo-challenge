$(document).ready(function(){


  $.ajax({
    type: 'POST',
    url: '/jokes',
    success: function(jokes){
    $('.sigmaJokes').text(jokes[i]);
    }
  })
});
