// coding with nick

// Js Documents

// Table of contyent
// 1.  vars and inits
// 2.  Inits Menu
// 3.  Init Timer
// 4.  Init Favorite
// 5.  Init Isotope Filtering
// 6.  Init Slider



jQuery(document).ready(function($){

  // 1.  vars and inits
  var mainSlider = $(".mainSlider");
  var hamburger = $(".hamburger_container");
  var menu = $(".hamburger_menu");
  var menuActive = false;
  var hamburgerClose = $(".hamburger_close");
  var hamburger = $(".hamburger_container");
  var fsOverlay = $(".fs_menu_overlay")


  initFavorite()
  initIsotopeFiltering()
  initTimer()
  initSlider()

// 2.  Inits Menu



// 3.  Init Timer

function initTimer(){
  if($(".timer").length)
  {
    // uncommet line below and reolace date
    var target_date = new Date("Sep 21, 2021").getTime()

    // comment lines below
    // var date = new Date();

    // date.setDate(date.getDate() + 3);
    // var target_date = date.getTime();

    //-----------------------------------------------------------------
    //variables for time units

    var days,hours,minutes,seconds;
    var d = $("#day")
    var h = $("#hour")
    var m = $("#minute")
    var s = $("#second")

    setInterval(function () {
      //find the amount of "seconds" between now and target

      var current_date = new Date().getTime();
      var seconds_left = (target_date - current_date) /1000

      //do some time calcutions

      days = parseInt(seconds_left / 86400);
      seconds_left = seconds_left % 86400;

      hours = parseInt(seconds_left / 3600);
      seconds_left = seconds_left % 3600;

      minutes = parseInt(seconds_left / 60);
      seconds = parseInt(seconds_left % 60);

      // display result

      d.text(days)
      h.text(hours)
      m.text(minutes)
      s.text(seconds)


    }, 1000);
  }
}

// 4.  Init Favorite

  function initFavorite(){
    if($(".favorite")){

      var favs = $(".favorite");
      favs.each(function(){
        var fav = $(this);
        var active = false;
        if(fav.hasClass("active")){
          active = true
        }
        fav.on("click", function(){
          if(active){
            fav.removeClass("active");
            active = false
          }
          else{
            fav.addClass("active");
            active = true
          }
        })
      })
    }
  }

// 5.  Init Isotope Filtering

function initIsotopeFiltering(){
  if($(".grid_sorting_button").length)
  {
    $(".grid_sorting_button").click(function()
    {
      $(".grid_sorting_button.active").removeClass("active");
      $(this).addClass("active");
  
    var selector = $(this).attr("data-filter");
    $(".product-grid").isotope({
      filter:selector,
      AnimationOption:{
        duration:750,
        easing:"linear",
        queue:false
      }
    });
    return false;
    });
  }
}

// 6.  Init Slider

function initSlider(){
  if($(".product_slider").length){
    var slider1= $(".product_slider");

    slider1.owlCarousel({
      loop:false,
      dots:false,
      nav:false,
      responsive:{
        0:{items:1},
        480:{items:2},
        768:{items:3},
        991:{items:4},
        1280:{items:5},
        1440:{items:6},
      }
    });

    if($('.product_slider_nav_left').length)
    {
      $('.product_slider_nav_left').on('click',function(){
        slider1.trigger('prev.owl.carousel');
        console.log(slider1)
      });
    }

    if($('.product_slider_nav_rigth').length){
      $('.product_slider_nav_rigth').on('click',function(){
        slider1.trigger('next.owl.carousel');
      });S
    }
  }
}




})















