$(document).ready(function() {
  var $block = $(".code-actions"),
    $toggle = $block.find(".btn-toggle"),
    $content = $(".code-content");

  if (!$block.length) {
    return false;
  }

  $toggle.on("click", function(e) {
    $(this).toggleClass("active");
    $(this)
      .next()
      .toggleClass("hide");
    $(this)
      .parent()
      .parent()
      .find($content)
      .toggleClass("active");
  });
});
