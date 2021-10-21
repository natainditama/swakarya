$("html, body").animate({ scrollTop: 0 }, 1000);

const headerScroll = (scroll) => {
  if (scroll >= $(window).height() / 2) {
    $(".header-area").addClass("scroll");
  } else if (scroll >= $(window).height() / 4) {
    $(".dropdown-area").addClass("scroll");
    $(".header-area").addClass("scroll");
    $(".detail-courses").addClass("scroll");
  } else {
    $(".header-area").removeClass("scroll");
    $(".dropdown-area").removeClass("scroll");
    $(".detail-courses").removeClass("scroll");
  }
};

const FaqTab = (target, siblings) => {
  $(target).parent().toggleClass("active").siblings().removeClass("active");
  $(siblings).filter(".active").find(".faq-tab").slideToggle();
  $(siblings).not(".active").find(".faq-tab").slideUp();
  $(siblings).filter(".active").find(".faq-icon").addClass("rotate");
  $(siblings).not(".active").find(".faq-icon").removeClass("rotate");
};

const appearScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      $(entry.target).addClass("appear");
    } else {
      $(entry.target).removeClass("appear");
    }
  });
}, {});

const appearScrollOnce = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      $(entry.target).addClass("appear");
      appearScroll.unobserve(entry.target);
    }
  });
}, {});

const appearOnScroll = (target) => {
  Array.from($(target)).map((element) => {
    appearScrollOnce.observe(element);
  });
};

const appearOnScrollOnce = (target) => {
  Array.from($(target)).map((element) => {
    appearScrollOnce.observe(element);
  });
};

$(".mobile-btn").click(function () {
  $("body, html").toggleClass("hidden");
  $(".mobile-nav").toggleClass("show");
});

$(".dropdown-btn").hover(
  function () {
    $(this).next().addClass("show");
    $(this).find("i").removeClass("bx-chevron-down");
    $(this).find("i").addClass("bx-chevron-up");
  },
  function () {
    $(this).next().removeClass("show");
    $(this).find("i").addClass("bx-chevron-down");
    $(this).find("i").removeClass("bx-chevron-up");
  }
);

$(".dropdown-area").hover(
  function () {
    $(this).addClass("show");
    $(".dropdown-btn").find("i").removeClass("bx-chevron-down");
    $(".dropdown-btn").find("i").addClass("bx-chevron-up");
  },
  function () {
    $(this).removeClass("show");
    $(".dropdown-btn").find("i").addClass("bx-chevron-down");
    $(".dropdown-btn").find("i").removeClass("bx-chevron-up");
  }
);

$(".slider-theme").click(function () {
  $("body").toggleClass("light-theme");
  switchTheme(".toggle-theme i");
});

$(".toggle-theme").click(function () {
  $("body").toggleClass("light-theme");
  switchTheme(".toggle-theme i");
});

const switchTheme = (icon) => {
  $("body").hasClass("light-theme")
    ? (function () {
        $("body").removeClass("dark-theme");
        $(icon).removeClass("bxs-sun");
        $(icon).addClass("bxs-moon");
      })()
    : (function () {
        $("body").addClass("dark-theme");
        $(icon).addClass("bxs-sun");
        $(icon).removeClass("bxs-moon");
      })();
};

$(".dropdown-btn.mobile").click(function () {
  $(this).next().fadeToggle("slow");
});

function SideBar(elem, target) {
  $(elem).toggleClass("active").siblings().removeClass("active");
  const show = $(elem).data("filter");
  $(target).filter(show).slideToggle("slow");
  $(target).not(show).slideUp("slow");
}

const watchVideo = (url) => {
  $.fancybox.open({
    href: url,
    type: "iframe",
    padding: 5,
  });
};

const filterCourses = (keyword) => {
  if (keyword == "all") {
    $(".course-item").each((i) => {
      $(".course-item").show();
      $(".course-found").hide();
    });
  } else {
    $(".course-item").each((i) => {
      $(".course-item")
        .not("." + keyword)
        .hide();
      $(".course-item")
        .filter("." + keyword)
        .show();
    });
    let filterElements = $(".course-item").filter("." + keyword).length;
    if (filterElements == 0) {
      $(".course-found").show();
    } else {
      $(".course-found").hide();
    }
  }
};

const searchCourses = (keyword) => {
  if (keyword.length <= 0) {
    $(".course-item").each(() => {
      $(".course-item").show();
      $(".course-found").hide();
    });
  } else {
    $(".course-item").each((i, element) => {
      const target = $(element).find(".title strong");
      let text = target.text().toLowerCase();
      text = $.trim(text).replace(/\s\s+/g, " ");
      if (text.indexOf(keyword) > -1) {
        $(target).parents(".course-item").show();
        $(target).parents(".course-item").removeClass("hide");
      } else {
        $(target).parents(".course-item").hide();
        $(target).parents(".course-item").addClass("hide");
      }
      const hiddenElements = $(".course-item").filter(".hide").length;
      if (hiddenElements >= $(".course-item").length) {
        $(".course-found").show();
      } else {
        $(".course-found").hide();
      }
    });
  }
};

// const SlideShow = (duration) => {
//    let active = 1;
//     setInterval(() => {
//       $('#radio' + active).prop('checked', true);
//       $('.auto-btn').filter('.auto' + active).addClass('bg-pink-600').delay('slow');
//       $('.auto-btn').not('.auto' + active).removeClass('bg-pink-600');
//       active++;
//       (active > 4) ? active = 1 : active;
//     }, duration);
// }

const counterUp = (target) => {
  $(target).each(function () {
    const countTo = $(this).attr("data-count");
    const countNum = $(this).text();
    $(this).animate(
      {
        countNum: countTo,
      },
      {
        duration: 5000,
        easing: "linear",
        step: function () {
          $(this).text(Math.floor(this.countNum));
          splitNumber(this);
        },
        complete: function () {
          $(this).text(this.countNum);
          splitNumber(this);
        },
      }
    );
  });
};
const splitNumber = (target) => {
  if ($(target).text().length > 3) {
    const length = $(target).text().length;
    const indexEnd = $(target)
      .text()
      .slice(length - 3, length);
    const indexStart = $(target)
      .text()
      .slice(0, length - 3);
    $(target).text(indexStart + "." + indexEnd);
  } else {
    $(target).text(this.countNum);
  }
};

const showPass = (element, target) => {
  $(element).toggleClass("preview");
  $(target).hasClass("preview")
    ? (function () {
        $(target).children("i").addClass("bx-show");
        $(target).children("i").removeClass("bx-hide");
        $(target).siblings().attr("type", "text");
      })()
    : (function () {
        $(target).children("i").removeClass("bx-show");
        $(target).children("i").addClass("bx-hide");
        $(target).siblings().attr("type", "password");
      })();
};

let dataUser = JSON.parse(sessionStorage.getItem("dataUser"));
if (sessionStorage.getItem("dataUser") == null) {
  dataUser = [
    { email: "natainditama@gmail.com", password: "nata" },
    { email: "bramcahyadi@gmail.com", password: "bram" },
    { email: "defadanuarta@gmail.com", password: "defa" },
  ];
}
console.log(dataUser);
const checkValid = (email, password, array) => {
  for (const data of array) {
    if (data.email == email && data.password == password) {
      return true;
    }
  }
  return false;
};
const signIn = (event) => {
  event.preventDefault();
  const inputEmail = $("#email-in").val();
  const inputPass = $("#password-in").val();
  if (checkValid(inputEmail, inputPass, dataUser)) {
    sessionStorage.setItem("dataEmail", inputEmail);
    location.href = "index.html";
  } else {
    alert("Sign Up Failed");
    location.reload();
  }
};
const signUp = (event, element) => {
  event.preventDefault();
  const inputEmail = $("#email-up").val();
  const inputPass = $("#password-up").val();
  const action = $(element).attr("action");

  if (!checkValid(inputEmail, inputPass, dataUser)) {
    insertData(action, inputEmail, inputPass);
    sessionStorage.setItem("dataEmail", inputEmail);
    location.href = "index.html";
  } else {
    alert("Sign In Failed");
    location.reload();
    return;
  }
};
const insertData = (url, postEmail, postPass) => {
  $.post(url, { email: postEmail, password: postPass }).done(function (data) {
    if (sessionStorage.getItem("dataUser") == null) {
      const dataNew = [];
      dataNew.push(data);
      sessionStorage.setItem("dataUser", JSON.stringify(dataNew));
    } else {
      const dataCurrent = JSON.parse(sessionStorage.getItem("dataUser"));
      dataCurrent.push(data);
      sessionStorage.setItem("dataUser", JSON.stringify(dataCurrent));
    }
  });
  location.reload();
};

const easingData = [
  "easeInQuad",
  "easeInCubic",
  "easeInQuart",
  "easeInQuint",
  "easeInOutQuad",
  "easeInOutCubic",
  "easeInOutQuart",
  "easeInOutQuint",
  "easeOutQuad",
  "easeOutCubic",
  "easeOutQuart",
  "easeOutQuint",
];

const scrollTop = (scrollY) => {
  const randomEasing = Math.ceil(Math.random() * easingData.length);
  setInterval(() => {
    $("#scroll-btn").data("easing", easingData[randomEasing]);
  }, easingData.length * 1000);
  scrollY >= $("body").height() / 2
    ? (function () {
        $("#scroll-btn").fadeIn();
      })()
    : (function () {
        $("#scroll-btn").fadeOut();
      })();
};

const scroll = new SmoothScroll('a[href*="#"]:not([data-easing])');
if (document.querySelector("[data-easing]")) {
  const linear = new SmoothScroll('[data-easing="linear"]', {
    easing: "linear",
  });
  const easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {
    easing: "easeInQuad",
  });
  const easeInCubic = new SmoothScroll('[data-easing="easeInCubic"]', {
    easing: "easeInCubic",
  });
  const easeInQuart = new SmoothScroll('[data-easing="easeInQuart"]', {
    easing: "easeInQuart",
  });
  const easeInQuint = new SmoothScroll('[data-easing="easeInQuint"]', {
    easing: "easeInQuint",
  });
  const easeInOutQuad = new SmoothScroll('[data-easing="easeInOutQuad"]', {
    easing: "easeInOutQuad",
  });
  const easeInOutCubic = new SmoothScroll('[data-easing="easeInOutCubic"]', {
    easing: "easeInOutCubic",
  });
  const easeInOutQuart = new SmoothScroll('[data-easing="easeInOutQuart"]', {
    easing: "easeInOutQuart",
  });
  const easeInOutQuint = new SmoothScroll('[data-easing="easeInOutQuint"]', {
    easing: "easeInOutQuint",
  });
  const easeOutQuad = new SmoothScroll('[data-easing="easeOutQuad"]', {
    easing: "easeOutQuad",
  });
  const easeOutCubic = new SmoothScroll('[data-easing="easeOutCubic"]', {
    easing: "easeOutCubic",
  });
  const easeOutQuart = new SmoothScroll('[data-easing="easeOutQuart"]', {
    easing: "easeOutQuart",
  });
  const easeOutQuint = new SmoothScroll('[data-easing="easeOutQuint"]', {
    easing: "easeOutQuint",
  });
}
