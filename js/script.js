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