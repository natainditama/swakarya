$(document).ready(function () {
  $("body, html").addClass("hidden");
  setTimeout(() => {
    $(".preloader").fadeOut("slow");
    $("body, html").removeClass("hidden");
  }, 2000);

  $(".user-name").html(userName);

  $(".main-app").load("library.html");
});
