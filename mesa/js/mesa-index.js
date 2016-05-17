$(document).ready(function() {
  $( "#accordion" ).accordion();
  // Hover states on the static widgets
  $( "#dialog-link, #icons li" ).hover(
    function() {
      $( this ).addClass( "ui-state-hover" );
    },
    function() {
      $( this ).removeClass( "ui-state-hover" );
    }
  );

  $("#secret").click(function(){
    $(this).toggleClass("minus");
    $("#loginDiv form").stop().slideToggle(1000);
  });

    // Clicking the button will validate whether or not information in both username and pw fields are inputted
  $("#loginDiv input[type=button]").click(function (){

    var username = $("#username").val();
    var password = $("#pw").val();

    var errorMessage   = 'Please enter both login and password.';
    var errorMessage2  = 'Wrong username or password.';
    var successMessage = 'Please stand by.';

    // if either one of the fields is empty, then display error message. Else, display success message.
    if((username == "") || (password == ""))
      document.getElementById("error").innerHTML = errorMessage; 
    else if ((username != "mesa") && (password != "webd170"))
      document.getElementById("error").innerHTML = errorMessage2;
    else {
      document.getElementById("error").innerHTML = successMessage;
      $("#ad").delay(5000).animate( {top: "0px"}, 5000);
    }
  }); 

  $("#adbtn").click(function(){
  $("#ad").fadeOut(5000);
  });

});