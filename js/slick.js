$('.member-slick').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 7,
    prevArrow: '<button class="left"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="right"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.feedback-slick').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    arrows: false,
    prevArrow: '<button class="left"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="right"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


