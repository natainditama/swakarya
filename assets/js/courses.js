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

  $(".filter-btn").click(function () {
    $(".courses-filter").fadeToggle("slow");
  });

  if ($(window).width() <= 992) {
    $(".field-filter.col").slideUp();
  } else if ($(window).width() >= 992) {
    $(".field-filter.col").slideDown();
  } else {
    $(".field-filter.col").slideDown();
  }

  $(".keyword-btn").click(function () {
    $(this).toggleClass("active");
    $(this).parent().next().slideToggle();
    $(this).parent().next().find("input").prop("checked", false);
    $(".course-item").each((i) => {
      $(".course-item").show("1000");
    });
    $(".course-found").hide("2000");
  });

  $(".tech-card").each(function (index) {
    index++;
    $(".tech-card:nth-child(" + index + ")").css({
      "transition-delay": "." + index * 600 + "ms",
    });
  });

  $(".course-hover").hover(
    function () {
      $(this).siblings(".price").fadeOut();
      $(this).siblings(".review").addClass("white");
    },
    function () {
      $(this).siblings(".price").fadeIn();
      $(this).siblings(".review").removeClass("white");
    }
  );

  $(".course-details").hover(
    function () {
      $(this).children(".link").slideDown("slow");
    },
    function () {
      $(this).children(".link").slideUp("slow");
    }
  );

  $(".search-courses").keyup(function (e) {
    $(".field-filter").find("input").prop("checked", false);
    const search = $(this).val().toLowerCase();
    // searchCourses(search);
    searchCourses(search);
  });

  $(".course-found").hide();
  $(".keyword-input").click(function () {
    let filter = $(this).data("keyword");
    filterCourses(filter);
  });

  $('.materi button').click(function () {
    $(this).toggleClass('border')
    $(this).next().slideToggle('slow');    
  })

  // const dataCourses = [
  //   { img: "course-1.jpg" },
  //   { img: "course-2.jpg" },
  //   { img: "course-3.jpg" },
  //   { img: "course-4.jpg" },
  //   { img: "course-5.jpg" },
  //   { img: "course-6.jpg" },
  //   { img: "course-7.jpg" },
  //   { img: "course-8.jpg" },
  //   { img: "course-9.jpg" },
  //   { img: "course-10.jpg" },
  //   { img: "course-11.jpg" },
  //   { img: "course-12.jpg" },
  //   { img: "course-13.jpg" },
  //   { img: "course-14.jpg" },
  //   { img: "course-15.jpg" },
  //   { img: "course-16.jpg" },
  // ];

  // let courseCard = '';
  // dataCourses.forEach(data => {
  //   courseCard += courseCardUI(data)
  // });

  // $('.courses-list').html(courseCard)
  // console.log(courseCard);

  // function courseCardUI(data) {
  //   return `<li class="course-item beginner premium">
  //             <figure class="imghvr-fade course-thumb lazy-load">
  //               <img src="../assets/img/courses/detail/${data.img}" />
  //               <div class="review">
  //                 <i
  //                   class="bx bxs-star text-sm-xsm text-md-sm text-lg-base"
  //                 ></i>
  //                 <i
  //                   class="bx bxs-star text-sm-xsm text-md-sm text-lg-base"
  //                 ></i>
  //                 <i
  //                   class="bx bxs-star text-sm-xsm text-md-sm text-lg-base"
  //                 ></i>
  //                 <i
  //                   class="bx bxs-star text-sm-xsm text-md-sm text-lg-base"
  //                 ></i>
  //                 <i
  //                   class="bx bxs-star text-sm-xsm text-md-sm text-lg-base"
  //                 ></i>
  //                 <strong class="text-sm-xsm text-md-sm text-lg-base"
  //                   >5.0</strong
  //                 >
  //               </div>
  //               <div class="price">
  //                 <span class="text-sm-xsm text-lg-sm text-lg-base"
  //                   >Rp 149.000</span
  //                 >
  //               </div>
  //               <figcaption class="course-hover">
  //                 <a href="./detail.html" class="link">
  //                   <span class="text-sm-xsm text-lg-sm text-lg-base"
  //                     >See Details</span
  //                   >
  //                   <i
  //                     class="
  //                       bx bx-right-arrow-alt
  //                       text-sm-base text-lg-base text-lg-lg
  //                     "
  //                   ></i>
  //                 </a>
  //               </figcaption>
  //             </figure>
  //             <div class="course-details">
  //               <div class="info">
  //                 <div class="type">
  //                   <i
  //                     class="bx bx-book text-sm-sm text-md-base text-lg-lg"
  //                   ></i>
  //                   <span class="text-sm-xsm text-md-sm text-lg-base"
  //                     >7 Modul</span
  //                   >
  //                 </div>
  //                 <div class="type">
  //                   <i
  //                     class="
  //                       bx bx-bar-chart-square
  //                       text-sm-sm text-md-base text-lg-lg
  //                     "
  //                   ></i>
  //                   <span>Pemula</span>
  //                 </div>
  //               </div>
  //               <a href="./detail.html" class="title">
  //                 <strong class="text-sm-base text-md-base text-lg-lg">
  //                   Optimasi Kinerja Laravel dengan Redis
  //                 </strong>
  //               </a>
  //               <span class="price">Rp 149.000</span>
  //             </div>
  //           </li>`
  // }
});
//   let hiddenElements = $(".course-item").filter(function() {
//     return $(this).css('diplay') == "none";
//   }).find('> div').filter(function() {
//     return $(this).css('diplay') != "none";
//   }).length;

//   console.log(hiddenElements)
