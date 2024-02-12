// icon nav
$(document).ready(function(){
    $('#nav-icon3').click(function(){
      $(this).toggleClass('open');
    });
  });

  // go to top
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("goToTop").style.display = "block";
      document.getElementById("goToTop").style.opacity = 1; /* แสดงปุ่มเมื่อ scroll ลงมา */
    } else {
      document.getElementById("goToTop").style.opacity = 0; /* ซ่อนปุ่มเมื่อ scroll ไปด้านบน */
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // navbar

  var header = document.querySelector("header");
  var lastScrollTop = 0;
  // ให้ window เพิ่ม event listener เมื่อเลื่อนหน้าจอ
  window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    // ถ้าค่า scroll ปัจจุบันมากกว่าค่า scroll ก่อนหน้า
    if (currentScroll > lastScrollTop) {
      // เลื่อนลง
      header.classList.add("hidden");
    } else {
      // เลื่อนขึ้น
      header.classList.remove("hidden");
    }
    lastScrollTop = currentScroll;
    
  });



  
 