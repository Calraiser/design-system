
$(document).ready(function() {

  var $box = $(".viz-box");

  $box.each(function() {
    var $this = $(this),
        $btn = $this.find('.btn-info');

    $btn.on('click', function() {
      $btn.toggleClass("active");
      $btn.up(3).toggleClass('disabled');

      $this.find('.info').toggleClass("open");
    });
  })

});
