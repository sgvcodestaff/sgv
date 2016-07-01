$( document ).ready(function(){
  var COOKIE_NAME = 'splash-page-cookie';
	var go = Cookies.get(COOKIE_NAME);
  console.log(go);
	if (typeof go === 'undefined') {
		Cookies.set(COOKIE_NAME, 'test', { path: '/', expires: 6 });
		window.location = "boom-screen.html";
	}

  $(".slider").slider({
    height: 400,
    indicators: false
  });

  $('.parallax').parallax();
});
