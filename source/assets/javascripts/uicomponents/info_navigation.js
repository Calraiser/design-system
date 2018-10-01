
$(document).ready(function() {

  var $box = $(".viz-box");

  if (!$box.length) {
    return false;
  }

  $box.each(function() {
    var $this = $(this),
        $btn = $this.find('.btn-info');

    $btn.on('click', function() {
      $btn.toggleClass("active");
      $btn.up(3).toggleClass('open');

      $this.find('.info').toggleClass("open");


    });
  })
});
