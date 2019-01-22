
var Modal = CarbonComponents.Modal;
var element = Modal.create(document.getElementById('onBoarding'));
var slider = $('.onBoarding-slide');


$(document).ready(function() {

  if (Cookies("popup_1_2") == null) {
    element.show();
    Cookies("popup_1_2", "2");
  }

  slider.slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

});
