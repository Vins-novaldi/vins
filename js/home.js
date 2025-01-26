function scrollLeft(button) {
  const container = button.parentElement.querySelector(".scroll-container");
  container.scrollBy({ left: -300, behavior: "smooth" });
}

function scrollRight(button) {
  const container = button.parentElement.querySelector(".scroll-container");
  container.scrollBy({ left: 300, behavior: "smooth" });
}


// ///////////////////////////////////////////////////////////////////////

$(".slider1").slick({
  centerMode: true,
  dots: true,
  autoplay: true,
  centerPadding: "120px",
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "75px",
        Infinity: true,
        slidesToShow: 1,
      },
    },
  ],
});


// //////////////////////////////////////////////
