var timer = document.querySelector(".timer");
var countDownDate = new Date("Dec 31, 2020 00:00:00").getTime();
$(".back_to_top").hide();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML =
    "&nbsp;&nbsp;" +
    ("0" + days).slice(-2) +
    "days&nbsp;&nbsp;&nbsp;" +
    ("0" + hours).slice(-2) +
    "h&nbsp;&nbsp;&nbsp;" +
    ("0" + minutes).slice(-2) +
    "m&nbsp;&nbsp;&nbsp;" +
    ("0" + seconds).slice(-2) +
    "s&nbsp;&nbsp;&nbsp;";

  if (distance < 0) {
    clearInterval(x);
    timer.innerHTML = "Closed";
  }
}, 1000);

if ($(".smart-scroll").length > 0) {
  // check if element exists
  var last_scroll_top = 0;
  $(window).on("scroll", function () {
    scroll_top = $(this).scrollTop();
    if (window.innerWidth > 500) {
      if (scroll_top < last_scroll_top) {
        $(".smart-scroll").removeClass("scrolled-down").addClass("scrolled-up");
      } else {
        $(".smart-scroll").removeClass("scrolled-up").addClass("scrolled-down");
      }
    }
    last_scroll_top = scroll_top;
  });
}

if ($(".back_to_top").length > 0) {
  // check if element exists
  var last_scroll_down = 0;
  $(window).on("scroll", function () {
    scroll_down = $(this).scrollTop();
    if (scroll_down < last_scroll_down) {
      $(".back_to_top")
        .removeClass("scrolled-down-link")
        .addClass("scrolled-up-link");
    } else {
      $(".back_to_top")
        .removeClass("scrolled-up-link")
        .addClass("scrolled-down-link");
    }
    last_scroll_down = scroll_down;
  });
}

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() == 0) {
      $(".back_to_top").hide();
    } else {
      $(".back_to_top").show();
    }
  });
});

currdate = new Date();

function isElementInViewport(el) {
  // Special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  );
}

var grid_lottie_holder = document.querySelector(".grid_lottie_holder");
var lotties = document.querySelectorAll(".lottie_progress");

var checker = 0;
window.addEventListener("scroll", function () {
  if (isElementInViewport(grid_lottie_holder) && checker == 0) {
    for (var i = 0; i < 4; i++) {
      lotties[i].stop();
      lotties[i].play();
    }
    checker = 1;
  }
  if (!isElementInViewport(grid_lottie_holder)) {
    checker = 0;
  }
});

var main_dp = document.querySelector(".main_dp");
var main_height = document.querySelector(".main").offsetHeight;
var checker_dp = 1;
window.addEventListener("scroll", function () {
  rect = main_dp.getBoundingClientRect();
  if (rect.top <= 80 && checker_dp == 0) {
    main_dp.stop();
    main_dp.play();
    checker_dp = 1;
  }
  if (rect.top <= -1 * main_height) {
    checker_dp = 0;
  }
});

back_to_top = document.querySelector(".back_to_top");
var contact = document.getElementById("contact");
window.onscroll = function () {
  rect = contact.getBoundingClientRect();
  if (rect.top < window.innerHeight - 50) {
    back_to_top.children[0].src = "./images/top_white.svg";
  } else {
    back_to_top.children[0].src = "./images/top.svg";
  }
};

// Responsive
function myFunction() {
  var collap = document.querySelector(".collap");
  if (
    collap.style.transform == "translateX(200%)" ||
    collap.style.transform == ""
  ) {
    collap.style.transform = "translateX(100%)";
    back_to_top.style.opacity = 0;
  } else {
    collap.style.transform = "translateX(200%)";
    back_to_top.style.opacity = 1;
  }
}

function remove() {
  var collap = document.querySelector(".collap");
  collap.style.transform = "translateX(200%)";
  back_to_top.style.opacity = 1;
}

$(document).ready(function () {
  //Event for pushed the video
  $("#carouselExampleIndicators").carousel({
    pause: true,
    interval: false,
  });
});
