$(document).ready(function() {

  var $tab = $('.tabs li a');

  if(!$tab.length) {
    return false;
  }

  $tab.on('click', function() {
    var id = $(this).attr("rel");
    $(this).parents('.tabcontainer').find('.active').removeClass('active');
    $('.tabbody').hide();
    $('#' + id).show();
    $(this).addClass('active');

  });


});
