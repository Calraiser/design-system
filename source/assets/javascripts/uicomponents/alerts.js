$(document).ready(function() {

  var $alert = $('.lds-alert');

  if (!$alert.length) {
    return false;
  }

  $alert.on('click', '.close', function() {
    $(this).closest($alert)
      .fadeOut('fast')
      .delay(1000)
      .fadeIn('fast');
  });

});



(function() {
  var rotate, timeline;

  rotate = function() {
    return $('.card:first-child').fadeOut(400, 'swing', function() {
      return $('.card:first-child').appendTo('.container').hide();
    }).fadeIn(400, 'swing');
  };

  timeline = setInterval(rotate, 1200);

  $('body').hover(function() {
    return clearInterval(timeline);
  });

  $('.card').click(function() {
    return rotate();
  });

}).call(this);
