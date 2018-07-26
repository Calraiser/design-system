$(document).ready(function() {

  var $menu = $('.sidebar-menu > li'),
      $submenu = $('.o-sidebar-submenu'),
      $close = $submenu.find('.close'),
      $container = $('.main-content'),
      $trClass = 'menu-open';

  if (!$menu.length) {
    return false;
  }


  $menu.on('click', 'a:not(#guidelines)', function(e) {
    e.preventDefault();
    $(this)
    .attr('data_tooltip', 'Coming soon')
    .attr('data_tooltip_pos','down')
    .tooltip('show');
  });

  $menu.on('click', 'a#guidelines', function(e) {

    e.preventDefault();
    $submenu.filter('.' + this.id).trigger('togglePanel');

    $menu.removeClass('active');
    $(this).parent().addClass('active');
  });

  $submenu
    .on('togglePanel', function() {
      var $this = $(this),
          $activePanels = $submenu.filter(':visible').not($this);
      if ($activePanels.length) {
        $activePanels
          .one('panelHidden', function() {
            $this.is(':visible') ?
              $this.trigger('hidePanel') :
              $this.trigger('showPanel');
          })
          .trigger('hidePanel');
      } else {
        $this.is(':visible') ?
          $this.trigger('hidePanel') :
          $this.trigger('showPanel');
      }
    })
    .on('hidePanel', function() {
      var $this = $(this);
        $this.animate({
          'width': 'hide'
        }, 800, function() {
          $this.trigger('panelHidden');
        });

        $this.removeClass('active');
        $container.removeClass($trClass);
        $container.parent().removeClass('open');
    })
    .on('showPanel', function() {
      var $this = $(this);
      $this.animate({
        'width': 'show'
      }, 800, function() {
          $this.trigger('panelShown');
      });

        $this.addClass('active');
        $container.addClass($trClass);
        $container.parent().addClass('open');
    });

    $close.on('click', function() {
      $(this).closest($submenu).trigger('togglePanel');
      $menu.find('a').removeClass('active');
  });
});
