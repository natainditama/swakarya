$(document).ready(function () {

  
  $("body, html").addClass("hidden");
  setTimeout(() => {
    $(".preloader").fadeOut("slow");
    $("body, html").removeClass("hidden");
  }, 2000);

  $(window).scroll(function () {
    const scrollY = $(this).scrollTop();
    headerScroll(scrollY);
    scrollTop(scrollY);
    $(".counter").hasClass("appear")
      ? counterUp(".counter")
      : counterUp(".counter.appear");
  });

  appearOnScroll(".counter");
  appearOnScroll(".fade-in");
  appearOnScroll(".scale-in");
  appearOnScroll(".from-top");
  appearOnScroll(".from-right");
  appearOnScroll(".from-bottom");
  appearOnScroll(".from-left");
  appearOnScrollOnce(".lazy-load");
  appearOnScrollOnce(".once");

  $(".play-video").click(function () {
    watchVideo("https://www.youtube.com/embed/cY7idHY36s8");
  });

  $(".faq-toggle").click(function () {
    FaqTab(this, ".faq-item");
  });
});
