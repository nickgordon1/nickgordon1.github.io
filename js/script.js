$(document).ready(function(){
  $('h1').fadeIn('slow');
  
  $('.button').click(function(){
	  $('img').fadeOut();
  });
  
  $('header').click(function(){
	  $('header').css(“background-color”, “red”);
  });


});
