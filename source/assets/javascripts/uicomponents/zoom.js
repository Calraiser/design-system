$(document).ready(function() {

  var $block = $('.control-zoom');

  if(!$block.length) {
    return false;
  }

  $block.on('click', function(){
    $('.control-zoom').removeClass('active');
    $(this).addClass('active');
  })

});
