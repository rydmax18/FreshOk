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

  let containerEl1 = document.querySelector('[data-ref="container-1"]');
  let containerEl2 = document.querySelector('[data-ref="container-2"]');

  let config = {
    controls: {
      scope: 'local'
    }
  };

  let mixer1 = mixitup(containerEl1, config);
  let mixer2 = mixitup(containerEl2, config);

});