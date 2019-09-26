


import Cookies from 'jquery.cookie';

var Modal = CarbonComponents.Modal;

var element = Modal.create(document.getElementById("onBoarding"));
var slider = $(".onBoarding-slide");
var slider_svg = $(".onBoarding-slide__figure svg");
var currSlide = 0;
var nextSlide = 0;

document.addEventListener("modal-beingshown", function() {
  slider.slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    prevArrow: false,
    nextArrow: $(".next")
  });
});

function applyHiddenClass() {
  $(".slick-arrow").each(function() {
    if ($(this).hasClass("slick-disabled")) {
      $(this).text("Go it!");
      $(this).attr("data-modal-close", "");
    } else {
      $(this).text("Next");
      $(this).removeAttr("data-modal-close", "");
    }
  });

  $.each($(".slick-slide"), function() {
    if ($(this).attr("aria-hidden") == "true") {
      $(this)
        .find(slider_svg)
        .fadeOut("slow");
    } else {
      $(this)
        .find(slider_svg)
        .fadeIn("slow");
    }
  });
}
