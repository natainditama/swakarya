$(document).ready(function () {
  $("body, html").addClass("hidden");
  setTimeout(() => {
    $(".preloader").fadeOut("slow");
    $("body, html").removeClass("hidden");
  }, 2000);

  $(".logout-link").click(function () {
    sessionStorage.removeItem("dataEmail");
    location.reload();
  });

  $(".user-name").html(userName);
  $(".user-btn").click(function () {
    $(".sidebar-area").toggleClass("show");
  });

  $(".main-app").load("./home.html");
  $(".sidebar-area button").click(function () {
    let target = $(this).data("target");
    $(this).addClass("active").siblings().removeClass("active");
    $(".main-app").load(target);
  });
});
