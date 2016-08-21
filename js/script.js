$(document).ready(function(){
  $('h1').fadeIn(1000);
  
  $('button').click(function(){
	  $('img').toggle();
  });
  
  $('header').click(function(){
	  $('header').css(“background-color”, “red”);
  });


});
