$(document).ready(function () {
  $(".preloader").fadeIn();
  $("body, html").addClass("hidden");
  setTimeout(() => {
    $(".preloader").fadeOut("slow");
    $("body, html").removeClass("hidden");
  }, 2000);

  $("#sign-up-btn").click(function (params) {
    $(".sign-area").addClass("sign-up-mode");
  });

  $("#sign-in-btn").click(function (params) {
    $(".sign-area").removeClass("sign-up-mode");
  });

  $(".pass-btn").click(function () {
    showPass(this, ".pass-btn");
  });

  $(".sign-in-form").submit(function (e) {
    signIn(e, this);
  });

  $(".sign-up-form").submit(function (e) {
    signUp(e, this);
  });
});
