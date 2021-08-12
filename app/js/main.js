$(function(){

  $(".header-main__nav-link--cart").on("click", function () {
    $(".cart").addClass("cart--visible");
  });
  $(".cart__close").on("click", function () {
    $(".cart").removeClass("cart--visible");
  });

  $(".burger-btn").on("click", function () {
    $(".burger").addClass("burger--visible");
  });
  $(".burger__close").on("click", function () {
    $(".burger").removeClass("burger--visible");
  });

  $(".header-main__nav-link--search").on("click", function () {
    $(".search").toggleClass("search--visible");
  });

  $('.slider__box').slick({
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt="arrow-right"></button>', 
    responsive: [
    {
      breakpoint: 1490,
      settings: {
        arrows: false,
        dots: true,
      }
    },
  ]
    
  });

  $(".brands__inner").slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 25000,
    pauseOnHover: true,
    slidesToScroll: 1,
    slidesPerRow: 6,

    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesPerRow: 2,
        },
      },
    ],
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