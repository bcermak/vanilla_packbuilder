const array = [];

$(document).ready();

    $.ajax({
        url: "https://binaryjazz.us/wp-json/genrenator/v1/genre/20",
        method: "GET"
      }).then(function(response) {
        console.log(response);
        array.push(response);
        $("#display").append("Here's some random shit:" + response)
      });


