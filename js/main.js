$(document).ready(function () {
  // Start Carousel
  var winH = $(window).height(),
    upperH = $(".upper-navbar").innerHeight(),
    navH = $(".navbar").innerHeight();

  $(".main-slider, .carousel-item").height(winH - (upperH + navH));

  $(window).on("resize", function () {
    var winH = $(window).height(),
      upperH = $(".upper-navbar").innerHeight(),
      navH = $(".navbar").innerHeight();

    $(".main-slider, .carousel-item").height(winH - (upperH + navH));
  });

  // Start Featured Work
  $(".featured-work .cats li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data("class") == "all") {
      $(".featured-work .image").css("opacity", 1);
    } else {
      $(".featured-work .image").css("opacity", 0.4);
      $($(this).data("class")).css("opacity", 1);
    }
  });

  // Start Testimonial Slider
});
