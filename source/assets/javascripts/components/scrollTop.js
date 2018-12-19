
$(document).ready(function() {

  var offset = 600,
      duration = 300,
      btnTop = $('.toTop'),
      counter = $(".progressCounter");

  counter.progressScroll({
    width: 40,
    height: 40,
    borderSize: 3,
    mainBgColor: "#ffffff",
    lightBorderColor: "#D8D8D8",
    darkBorderColor: "#00AAEE"
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      btnTop.addClass('visible');
    } else {
      btnTop.removeClass('visible');
    }
  });

  btnTop.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  })

});
