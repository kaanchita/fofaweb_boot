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
      document.getElementById("goToTop").style.opacity = 1; 
    } else {
      document.getElementById("goToTop").style.opacity = 0;
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

// detail animation
document.querySelectorAll('.nav-link').forEach(item => {
  item.addEventListener('click', event => {
    document.querySelector(item.getAttribute('data-bs-target')).classList.add('show', 'active');
  });
});


  // เรียกฟังก์ชัน togglePopup เมื่อคลิกที่ปุ่มหรือองค์ประกอบอื่นที่คุณต้องการให้เปิดหรือปิดป๊อปอัพ
  function togglePopup() {
    if (document.body.classList.contains('active')) {
      document.body.classList.remove('active');
    } else {
      document.body.classList.add('active');
    }
  }
// nav 

// parallax creative
window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  var creativeText = document.querySelector('.creativetext');
  var windowHeight = window.innerHeight;
  var documentHeight = document.body.scrollHeight;
  var creativeHeight = creativeText.offsetHeight;

  if (scrollTop + windowHeight > documentHeight - creativeHeight) {
    creativeText.style.bottom = 0;
  } else {
    creativeText.style.bottom = '-' + creativeHeight + 'px';
  }
});

      var $menu = $(".Menu-list"),
        $item = $(".Menu-list-item"),
        w = $(window).width(),
        h = $(window).height(); 

      $(window).on("mousemove", function (e) {
        var offsetX = 0.5 - e.pageX / w, 
          offsetY = 0.5 - e.pageY / h, 
          dy = e.pageY - h / 2,
          dx = e.pageX - w / 2, 
          theta = Math.atan2(dy, dx),
          angle = (theta * 180) / Math.PI - 90,
          offsetPoster = $menu.data("offset"),
          transformPoster =
            "translate3d(0, " +
            -offsetX * offsetPoster +
            "px, 0) rotateX(" +
            -offsetY * offsetPoster +
            "deg) rotateY(" +
            offsetX * (offsetPoster * 2) +
            "deg)"; 
        if (angle < 0) {
          angle = angle + 360;
        }
        $menu.css("transform", transformPoster);
        $item.each(function () {
          var $this = $(this),
            offsetLayer = $this.data("offset") || 0,
            transformLayer =
              "translate3d(" +
              offsetX * offsetLayer +
              "px, " +
              offsetY * offsetLayer +
              "px, 20px)";

          $this.css("transform", transformLayer);
        });
      });

      // poster
  const hasCookie = document.cookie.includes('popup=closed');
if (!hasCookie) {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';

  const closeButton = document.getElementById('close-button');
  closeButton.addEventListener('click', () => {
    document.cookie = 'popup=closed; max-age=300';
    popup.style.display = 'none';
  });
}
function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}
  
      

