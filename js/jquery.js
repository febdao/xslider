$( document ).ready(function() {
  $('.fgalery__for').jcarousel({
    items: '.fgalery__item'
  });

  $('.fgalery__nav').jcarousel({
    items: '.fgalery__item',
    vertical: true
  }).on("mousewheel", function (event) {
    event.preventDefault();
    if (event.deltaX > 0 || event.deltaY < 0) {
      //$('.fgalery__for').slick("slickNext");
    } else if (event.deltaX < 0 || event.deltaY > 0) {
      //$('.fgalery__for').slick("slickPrev");
    }
  });
});
