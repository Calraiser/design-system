var data_embed = {};

$(document).ready(function() {

  // Sticky Kit
  $(".o-sidebar-submenu").sticky({
    topSpacing: 0
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
