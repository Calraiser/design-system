$(document).ready(function() {
  var $alert = $(".lds-alert");

  if (!$alert.length) {
    return false;
  }

  $alert.on("click", ".close", function() {
    $(this)
      .closest($alert)
      .fadeOut("fast")
      .delay(1000)
      .fadeIn("fast");
  });
});
