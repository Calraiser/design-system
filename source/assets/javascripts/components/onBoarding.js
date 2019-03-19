
var Modal = CarbonComponents.Modal;
var element = Modal.create(document.getElementById('onBoarding'));
var slider = $('.onBoarding-slide');
var slider_svg = $('.onBoarding-slide__figure svg');

var currSlide = 0;
var nextSlide = 0;


document.addEventListener('modal-beingshown', function() {
  slider.slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    prevArrow: false,
    nextArrow: $('.next')
  });
});


function applyHiddenClass() {
  $.each($('.slick-slide'), function() {
    if ($(this).attr('aria-hidden') == 'true') {
      $(this).find(slider_svg).fadeOut('slow');
    } else {
      $(this).find(slider_svg).fadeIn('slow');
    }
  });
}


$(document).ready(function() {

  if (Cookies("popup_1_2") == null) {
    element.show();
    Cookies("popup_1_2", "2");
  }

  slider.on('setPosition', function(event, slick, currentSlide) {
    applyHiddenClass();
  });

  slider.on('beforeChange', function(event, slick, currentSlide) {
    currSlide = currentSlide;
  });

});
