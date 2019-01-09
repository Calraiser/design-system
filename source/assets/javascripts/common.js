var data_embed = {};

// Go up multiple parent levels in one simple function.
(function(window, document, $) {
  $.fn.extend({
    up: function(levels) {
      for (var i = levels, self = this; i > 0; i--) {
        self = self.parent();
      }
      return self;
    }
  });
})(window, window.document, jQuery);

$(document).ready(function() {

  // Floating Feedback Tooltip
  $('.floating-feedback').on('mouseenter', function(e) {
    e.preventDefault();
    $(this)
    .attr('data_tooltip', 'Give Feedback')
    .attr('data_tooltip_pos','right')
    .tooltip('show');
  });

  var $previous = $('.footer-navigation__previous');
  var $next = $('.footer-navigation__next');

  if (!$previous.find('.previous').is(':visible')) {
    $previous.hide();
  } else if (!$next.find('.next').is(':visible')) {
    $next.hide();
  }

  if (!$('.component-slider').is(':visible')) {
    $('.component-slider').parent().hide();
  }

  // Sticky Kit
  $(".o-sidebar-submenu").sticky({
    topSpacing: 0
  });


  $('.c-btn').on('click', function(e){
    e.preventDefault();
  });

  // Tooltip
  $('.btn-copy').tooltip({
    trigger: 'click',
    placement: 'bottom'
  });

  function setTooltip(btn, message) {
    $(btn).tooltip('hide')
      .attr('data_tooltip', message)
      .attr('data_tooltip_pos','down')
      .tooltip('show');
  }

  function hideTooltip(btn) {
    setTimeout(function() {
      $(btn).tooltip('hide')
      .removeAttr('data_tooltip', '')
    }, 1000);
  }

  // Clipboard
  var clipboard = new ClipboardJS('.btn-copy');

  clipboard.on('success', function(e) {
    setTooltip(e.trigger, 'Copied!');
    hideTooltip(e.trigger);
  });

  clipboard.on('error', function(e) {
    setTooltip(e.trigger, 'Failed!');
    hideTooltip(e.trigger);
  });


  // Scroll Totop
  var offset = 600,
      duration = 300,
      btnTop = $('.toTop');

  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      btnTop.fadeIn(duration);
    } else {
      btnTop.fadeOut(duration);
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
