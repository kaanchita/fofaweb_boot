// Swiper for Art section
var artSwiper = new Swiper("#section1 .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: "#section1 .swiper-button-next",
      prevEl: "#section1 .swiper-button-prev",
    },
    pagination: {
      el: "#section1 .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  // Swiper for Music section
  var musicSwiper = new Swiper("#section2 .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: "#section2 .swiper-button-next",
      prevEl: "#section2 .swiper-button-prev",
    },
    pagination: {
      el: "#section2 .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  // Swiper for Thai Dance section
  var thaiDanceSwiper = new Swiper("#section3 .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: "#section3 .swiper-button-next",
      prevEl: "#section3 .swiper-button-prev",
    },
    pagination: {
      el: "#section3 .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });


 
