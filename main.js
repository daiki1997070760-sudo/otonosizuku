'use strict';

$(document).ready(function () {

  // ▼ slick
  $('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

 
  $('.header__btn').on('click', function(){
    $('.nav').addClass('active');
  });

  $('.close').on('click', function(){
    $('.nav').removeClass('active');
  });


  $('.nav a').on('click', function(){
    $('.nav').removeClass('active');
  });

});


$(window).on('load scroll', function(){
  const feedIn = $('.feedIn');

  feedIn.each(function(){
    const boxOffset = $(this).offset().top;
    const scrollPos = $(window).scrollTop();
    const wh = $(window).height();

    if(scrollPos > boxOffset - wh + 100 ) {
      $(this).addClass('animated');
    }
  });
});


$(window).on('load', function() {
  $('body').addClass('loaded');
});

 
$(function () {

  // ロゴを3秒固定表示
  setTimeout(function(){
    $('.loader').fadeOut(800);
  }, 2600);

});

