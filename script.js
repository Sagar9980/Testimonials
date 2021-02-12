$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  center: true,
  responsive: {
    0: {
      items: 1,
    },

    900: {
      item: 2,
    },
    1000: {
      item: 3,
    },
  },
});
let owl = $(".owl-carousel");
owl.owlCarousel();

$(".swipe-right").click(function () {
  owl.trigger("next.owl.carousel");
});

$(".swipe-left").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});
