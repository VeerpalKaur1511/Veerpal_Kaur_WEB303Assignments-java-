// Name : Veerpal Kaur
//Student Id : 0826070
// Assignment 3
// Date : 29/09/2023
// // Create a jquery using $.getJSON that uploads the team info

function getJsonData (){
    $.getJSON("team.json", function(data){
    console.log(data);
      $.each(data.members, function(index, obj){
        $('div#team').append($("<h2>" + obj.name + "</h2>"));
        $('div#team').append($("<h5>" + obj.position + "</h3>"));
        $('div#team').append($("<p>" + obj.bio + "</p>"));
      });
    });
  };

$(document).ready(function(){
   getDataByAjax();
   //getJsonData();
});
// using the same jquery using $.ajax

    function getDataByAjax(){
      // Display "Loading..." before sending the AJAX request
      $('div#team').append($("<p>" + "Loading..." + "</p>"));
      $.ajax({
        type: "GET",
        url: "team.json",
        datatype: "json",
        beforeSend: function(){

        },
        success: function(result){
            console.log(result);
            $.each(result.members, function(index, obj){
              $('p:first-of-type').fadeOut(2000);
              $('div#team').append($("<h2>" + obj.name + "</h2>"));
              $('div#team').append($("<h5>" + obj.position + "</h3>"));
              $('div#team').append($("<p>" + obj.bio + "</p>"));
            });
        },
        error: function(error) {
          console.error('Error:', error);
        }
      });
    };
