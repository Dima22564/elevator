"use strict";

$(document).ready(function () {
  $('.js-burger-icon').click(function (e) {
    $('.js-burger-menu').slideToggle();
  }); // Slider under  header

  $('.js-slider-header').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: $('.js-btn-prev'),
    nextArrow: $('.js-btn-next')
  });
});