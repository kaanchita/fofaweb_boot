// icon nav
$(document).ready(function(){
    $('#nav-icon3').click(function(){
      $(this).toggleClass('open');
    });
  });

  // nav effect
  window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scrolling', window.scrollY > 0);
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
  // var header = document.querySelector("header");
  // var lastScrollTop = 0;
  // // ให้ window เพิ่ม event listener เมื่อเลื่อนหน้าจอ
  // window.addEventListener("scroll", function() {
  //   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  //   // ถ้าค่า scroll ปัจจุบันมากกว่าค่า scroll ก่อนหน้า
  //   if (currentScroll > lastScrollTop) {
  //     // เลื่อนลง
  //     header.classList.add("hidden");
  //     header.classList.remove("open");
  //   } else {
  //     // เลื่อนขึ้น
  //     header.classList.remove("hidden");
  //     header.classList.add("open");
  //   }
  //   lastScrollTop = currentScroll;
    
  // });

  //welcome text
//   consoleText(['Welcome Everyone', 'We are glad to see you joining us.'], 'text',['#0F0D0D','#0F0D0D']);

//   function consoleText(words, id, colors) {
//     if (colors === undefined) colors = ['#fff'];
//     var visible = true;
//     var con = document.getElementById('console');
//     var letterCount = 1;
//     var x = 1;
//     var waiting = false;
//     var target = document.getElementById(id)
//     target.setAttribute('style', 'color:' + colors[0])
//     window.setInterval(function() {
  
//       if (letterCount === 0 && waiting === false) {
//         waiting = true;
//         target.innerHTML = words[0].substring(0, letterCount)
//         window.setTimeout(function() {
//           var usedColor = colors.shift();
//           colors.push(usedColor);
//           var usedWord = words.shift();
//           words.push(usedWord);
//           x = 1;
//           target.setAttribute('style', 'color:' + colors[0])
//           letterCount += x;
//           waiting = false;
//         }, 1000)
//       } else if (letterCount === words[0].length + 1 && waiting === false) {
//         waiting = true;
//         window.setTimeout(function() {
//           x = -1;
//           letterCount += x;
//           waiting = false;
//         }, 1000)
//       } else if (waiting === false) {
//         target.innerHTML = words[0].substring(0, letterCount)
//         letterCount += x;
//       }
//     }, 120)
//     window.setInterval(function() {
//       if (visible === true) {
//         con.className = 'console-underscore hidden-text'
//         visible = false;
  
//       } else {
//         con.className = 'console-underscore'
  
//         visible = true;
//       }
//     }, 400)
//   }

//   // bubble
// var mybubbles = document.getElementsByClassName("ani-bubble");
// var bubblecolors = [ "#CAD3D7", "#9B1E2E" ];

// for (var i = 0; i < mybubbles.length; i++) {

//   mybubbles[i].style.backgroundColor = bubblecolors[Math.floor(Math.random() * bubblecolors.length)];
//   mybubbles[i].style.opacity = Math.random()*.75;

//   var bubblesize = (Math.floor(Math.random() * 9)+2) * 50;

//   mybubbles[i].style.width = bubblesize+"px";
//   mybubbles[i].style.height = bubblesize+"px";
//   mybubbles[i].style.borderRadius = (bubblesize/2)+"px";

//   mybubbles[i].style.left = Math.floor(Math.random() * 100) + "%";

//   mybubbles[i].style.animationDuration = Math.floor(Math.random() * 16)+8 + "s";
//   mybubbles[i].style.animationDelay = Math.floor(Math.random() * 8) + "s";

// }

// $( document ).ready(function() {
//   jQuery.expr.filters.offscreen = function(el) {
//   return (
//       (el.offsetLeft + el.offsetWidth) < 0 
//       || (el.offsetTop + el.offsetHeight) < 0
//       || (el.offsetLeft > window.innerWidth || el.offsetTop > window.innerHeight)
//     );  
//     };
//   setInterval(function(){
//     $('.ani-bubble').each(function(){
//       if($(this).is(':offscreen')){
//        var bubbleoffset = Math.floor((Math.random() * 140) - 19);
//          $(this).css({ 'left': bubbleoffset+'%' }); 
//       }
//     });
//   },50);
// });

//pop up poster
window.onload = function() {
  
  // if (!localStorage.getItem('modalShown')) {
  //     var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  //     myModal.show();
  //     localStorage.setItem('modalShown', 'true');
  // }
  // var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  //     myModal.show();
  //     localStorage.setItem('modalShown', 'true');
}

// Carousel
// const slider = document.querySelector(".slider");
// function activate(e) {
//   const items = document.querySelectorAll(".item-carousel-animate");
//   e.target.matches(".next") && slider.append(items[0]);
//   e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
// }
// document.addEventListener("click", activate, false);
const slider = document.querySelector(".slider");
const items = document.querySelectorAll(".item-carousel-animate");
let currentIndex = 0;
let interval = 5000; // เวลาในการเลื่อน (หน่วยเป็นมิลลิวินาที)

function autoSlide() {
  moveRight();
  setTimeout(autoSlide, interval);
}

function moveRight() {
  currentIndex = (currentIndex + 1) % items.length;
  slider.append(items[currentIndex]);
}

function moveLeft() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  slider.prepend(items[currentIndex]);
}

// เริ่มการเลื่อนอัตโนมัติ
setTimeout(autoSlide, interval);

// Carousel


// detail animation
document.querySelectorAll('.nav-link').forEach(item => {
  item.addEventListener('click', event => {
    document.querySelector(item.getAttribute('data-bs-target')).classList.add('show', 'active');
  });
});


  // เรียกฟังก์ชัน togglePopup เมื่อคลิกที่ปุ่มหรือองค์ประกอบอื่นที่คุณต้องการให้เปิดหรือปิดป๊อปอัพ
  function togglePopup() {
    // เช็คว่า body มีคลาส 'active' หรือไม่
    if (document.body.classList.contains('active')) {
      // ถ้ามีคลาส 'active' ให้ลบออก
      document.body.classList.remove('active');
    } else {
      // ถ้าไม่มีคลาส 'active' ให้เพิ่มเข้าไป
      document.body.classList.add('active');
    }
  }

 
  window.addEventListener('scroll', function() {
    var header = document.querySelector('header.sticky-top');
    if (window.scrollY > 0) {
      header.style.top = '-300px'; // กำหนดค่า top เพื่อให้ header เลื่อนขึ้นไปทันที
    } else {
      header.style.top = '0'; // หาก scroll มีค่าเป็น 0 ให้ header ขยับกลับมาที่ตำแหน่งเริ่มต้น
    }
  });

