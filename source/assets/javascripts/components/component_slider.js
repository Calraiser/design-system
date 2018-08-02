$(document).ready(function() {

  var $menu = $('.component-menu li'),
      $item = $('.component-item');

  $menu.on('click', 'a', function(e) {
    e.preventDefault();

    var $id = $(this).attr('id');

    $menu.find('a').removeClass('active');
    $(this).addClass('active');
    $item.removeClass('show');
    $item.filter('#' + $id).addClass('show');
  });
});
