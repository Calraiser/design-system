$(document).ready(function () {

  if ($(window).width() >= 768) {
    return false;
  }

  var $menu = $('.l-sidebar'),
      $search = $('<div class="m-ico-search"></div>'),
      $searchBox = $('.o-main-search'),
      $close = $('<div class="m-ico-close"></div>'),
      $homeLink = $('.item > .back > a'),
      $input = $('input.search'),
      $footerSidebar = $('.footer-sidebar');

  $search.appendTo($menu);
  $close.appendTo($searchBox);

  $footerSidebar.detach().appendTo('.main-content-wrapper .content-wrapper');

  $search.on('click', function(){
    $searchBox.toggleClass('active');
  });

  $close.on('click', function(){
    $searchBox.removeClass('active');
    $('.visel').removeClass('active');
  });

  $(".o-sidebar-submenu").unstick();


  // Home Navigation Link
  $('.o-home-nav .item .front').each(function() {
    var a = $(this).parent().find('a');

    $(this).wrap('<a href="' + a.attr('href') + '"></a>');
  });

  // Show visel on input focus
  $input.on('focus', function() {
    $('.visel').addClass('active');
  });

});
