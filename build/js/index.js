"use strict";

$(document).ready(function () {
  $('.js-nav-tab').click(function (e) {
    var attr = $(this).attr('data-tab');
    $('.js-nav-tab').removeClass('active');
    $(this).addClass('active');
    $('.js-nav-content .js-item').hide();
    $('.js-nav-content .js-item').removeClass('active');
    $('.js-nav-content').find('.' + attr).addClass('active');
    $('.js-nav-content').find('.' + attr).show();
  });
  new WOW().init();
  $('.js-burger-menu .js-open').click(function (e) {
    $('.js-mobile-menu').addClass('open');
    $(this).hide(300, function () {
      $('.js-hide').show();
    });
  });
  $('.js-burger-menu .js-hide').click(function (e) {
    $('.js-mobile-menu').removeClass('open');
    $(this).hide(300, function () {
      $('.js-open').show();
    });
  });
  $('.js-langs').click(function (e) {
    $(this).find('.langs').toggleClass('active');
  });
  $('.js-link').click(function (e) {
    e.preventDefault();
    var sec = $(this).attr('href');
    var pos = $(sec).offset().top;
    $('html').animate({
      scrollTop: pos
    });
  });
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // loop: true,
    pagination: {
      el: '.js-swiper-pagination',
      type: 'custom',
      renderCustom: function renderCustom(swiper, current, total) {
        return "<span class=\"current\">".concat(current, "</span><span class=\"line\"></span><span class=\"total\">").concat(total, "</span>");
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.js-swiper-button-next',
      prevEl: '.js-swiper-button-prev'
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    }
  });
  $('.js-close-popup').click(function (e) {
    $('.js-popup').fadeOut();
  });
  $('.js-popup-show').click(function (e) {
    e.preventDefault();
    $('.js-popup').fadeIn();
  });
  $('.popup-body').click(function (e) {
    if (e.target.className == 'popup-body') {
      $('.js-popup').fadeOut();
    }
  });
  $('.js-card-wrapper').click(function (e) {
    if ($(this).hasClass('show')) {
      e.stopPropagation();
      $('.js-card-wrapper').removeClass('show');
      $('.js-card-wrapper').removeClass('notActive');
      $(this).addClass('notActive');
      $('.feature-card-show').hide();
    } else {
      e.stopPropagation();
      $('.js-card-wrapper').removeClass('show');
      $(this).addClass('show');
      $('.js-card-wrapper').addClass('notActive');
      $(this).removeClass('notActive');
      $('.js-card-wrapper .feature-card-show').hide();
      $(this).find('.feature-card-show').show();
    }
  });
  $('body').click(function () {
    $('.js-card-wrapper').removeClass('show');
    $('.js-card-wrapper').removeClass('notActive');
    $('.js-card-wrapper .feature-card-show').hide();
  });
  $('.js-menu-mobile-link').click(function (e) {
    e.preventDefault();
    var sec = $(this).attr('href');
    var pos = $(sec).offset().top;
    $('.js-mobile-menu').removeClass('open');
    $('.js-hide').hide(300, function () {
      $('.js-open').show();
    });
    $('html').animate({
      scrollTop: pos
    });
  });
  $('.js-feature-card-show').click(function (e) {
    // e.preventDefault();
    $('.js-feature-card-show').hide();
  });
});