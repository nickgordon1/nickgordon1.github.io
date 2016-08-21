/*$(document).ready(function(){
  $('h1').fadeIn('slow');
  
  $('.button').click(function(){
	  $('img').fadeOut();
  });
  
  $('header').click(function(){
	  $('header').css(“background-color”, “red”);
  });


});*/

$(document).ready(function(){
  $('img, header, footer').fadeIn(5000);
    $('header').click(function(){
      $('header').css("background", "green");
    });
  $('button').click(function(){
    $('img').toggle();
  });
});
