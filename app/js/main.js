$(function(){

  $('.slider__box').slick({
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt="arrow-right"></button>', 
  //   responsive: [
  //   {
  //     breakpoint: 1201,
  //     settings: {
  //       arrows: false,
  //     }
  //   },
  // ]
    
  });

  let mixer = mixitup('.top-goods__content');

});