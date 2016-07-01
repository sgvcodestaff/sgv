$(document).ready(function (){
  $('body').css('display', 'none');

  $('body').fadeIn(1000).delay(2000).fadeOut(1000, function (){
    window.location = "index.html";
  });
});
