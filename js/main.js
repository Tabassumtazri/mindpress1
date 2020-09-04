$(function(){

// background image--------
$("[data-background]").each(function (){
  $(this).css("background-image","url(" + $(this).attr("data-background") + ")")
});

//sticky menu============
var wind = $(window)
var sticky = $("#header-sticky");
wind.on('scroll', function () {
   var scroll = $(wind).scrollTop();
   if (scroll < 600) {
	 sticky.removeClass("sticky-menu");
   } else {
	 $("#header-sticky").addClass("sticky-menu");
   }
}); 


//active1-------
$(".menu") .on("mouseenter", function () {
  $(this).addClass("active").parent().siblings().find(".menu").removeClass("active");
});

//active2-------
$(".social") .on("mouseenter", function () {
  $(this).addClass("active").parent().siblings().find(".social").removeClass("active");
});

//slick slider-----
$('.slider-area').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  prevArrow:'<b><i class="fas fa-long-arrow-alt-left l-a"></i></b>',
  nextArrow:'<b><i class="fas fa-long-arrow-alt-right r-a"></i></b>',
  autoplay: true,
  autoplaySpeed: 5000,
});


//slick work---------
$('.work-active').slick({
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow:'<b><i class="fas fa-long-arrow-alt-left l-a"></i></b>',
  nextArrow:'<b><i class="fas fa-long-arrow-alt-right r-a"></i></b>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
});

// circle-progress======
$('.count').circleProgress({
  value: 0.65,
  size: 80,
  lineCap:"round",
  reverse:"true",
  thickness:"7",
  insertMode:"append",
  fill: {
    gradient: ["#a15547"]
  },

}).on('circle-animation-progress', function(event, progress) {
  $(this).find('.counter').html(Math.round(65 * progress) + '<i>%</i>');
});


//scroll top function------
$(window).on('scroll', function() {
  var windowscroll = $(window).scrollTop();
  if (windowscroll > 350) {
      $('.top').fadeIn(650);
  } else {
      $('.top').fadeOut(650);
  }
});
$('.top').on('click', function() {

  $('html,body').animate({
      scrollTop: 0,
  }, 400);
});

//mobile menu------
$('#mobile-menu').meanmenu({
  meanMenuContainer: '.mobile-menu',
  meanScreenWidth: "991",
  // meanMenuClose: "X",
});

// One Page Nav
var top_offset = $('.header-bottom').height() -10;
  $(".main-menu").onePageNav({
    currentClass: 'active',
    scrollOffset: top_offset,
});


});





