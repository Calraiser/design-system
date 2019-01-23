
var Modal = CarbonComponents.Modal;
var element = Modal.create(document.getElementById('onBoarding'));
var slider = $('.onBoarding-slide');
var slider_svg = $('.onBoarding-slide__figure svg');


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
    adaptiveHeight: false,
    prevArrow: false,
    nextArrow: $('.next')
  });


  var currSlide = 0;
  var nextSlide = 0;


  slider.on('beforeChange', function(event, slick, currentSlide){
    if (currentSlide === 0) {
        $('.slick-slide').find(slider_svg).fadeIn('slow');
    } else {
        $('.slick-slide').find(slider_svg).fadeOut('slow');
    }
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

  slider.on('setPosition', function(event, slick, currentSlide) {
    applyHiddenClass();
  });

  slider.on('beforeChange', function(event, slick, currentSlide) {
    currSlide = currentSlide;
  });

  if (element) {
    applyHiddenClass();
  }

});
