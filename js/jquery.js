$( document ).ready(function() {
  $('.fgalery__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.fgalery__nav',
    infinite: false,
  });

  $('.fgalery__nav').slick({
    asNavFor: '.fgalery__for',
    arrows: true,
    focusOnSelect: true,
    infinite: false,
    verticalSwiping: true,
    slidesToShow: 18,
    slidesToScroll: 18,
    vertical: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 11,
          slidesToScroll: 11
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 10,
          vertical: false,
          verticalSwiping: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          vertical: false,
          verticalSwiping: false,
        }
      }
    ]
  }).on("mousewheel", function (event) {
    event.preventDefault();
    if (event.deltaX > 0 || event.deltaY < 0) {
      $('.fgalery__for').slick("slickNext");
    } else if (event.deltaX < 0 || event.deltaY > 0) {
      $('.fgalery__for').slick("slickPrev");
    }
  });

  $('.js-open-content').click(function(){
    $(this).toggleClass('active');

  });

  $(".js-scrollbar").mCustomScrollbar();

  $('.fgalery__button a').click(function(){
    $('.fgalery__infor').toggleClass('active');
  });
  setTimeout(function(){
    $('.fgalery__infor').addClass('active');
  }, 3000);
});
