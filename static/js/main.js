var w3sing = (function () {
  "use strict";

  var t = function(){
      // page active
      var path = window.location.href;
        if (path == '/') {
         path = '/index';
        }
        $('.ic-navbar-nav li a').each(function() {
        if (this.href === path) {
            $(this).parent().addClass('is-current');
            }
        });

      // best photo gallery
      Fancybox.bind("[data-fancybox]");

      // wow js
      new WOW().init();
      
      // preloader
      jQuery(window).on("load",function(){
        jQuery(".ic-preloader").fadeOut(500);
      });

      // mobile menu collapse
      var width = jQuery(window).width();
        if (width < 1200){
          jQuery('.ic-page-link').on('click', function(e){
            e.preventDefault();
            jQuery(this).next().slideToggle();
          });
        }

        // count
        var incrementPlus;
        var incrementMinus;

        var buttonPlus  = jQuery(".cart-qty-plus");
        var buttonMinus = jQuery(".cart-qty-minus");

        // incrementPlus count
        var incrementPlus = buttonPlus.on("click",function() {
          var $n = jQuery(this)
            .parent(".ic-quantity-input")
            .find(".qty");
          $n.val(Number($n.val())+1 );
        });

        // incrementMinus count

        var incrementMinus = buttonMinus.on("click",function() {
            var $n = jQuery(this)
            .parent(".ic-quantity-input")
            .find(".qty");
          var amount = Number($n.val());
          if (amount > 0) {
            $n.val(amount-1);
          }
        });

        // pagination active
        jQuery('.pagination li a').on("click",function(e) {
          e.preventDefault();
          jQuery('.pagination li a').removeClass('active');
          jQuery(this).addClass('active');
        })
    },
    i = function(){
      // banner slick slider
      jQuery(".ic-banner-slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 800,
        lazyLoad: "progressive",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              dots: true,
            },
          },
        ],
      }).slickAnimation();
      jQuery(".ic-banner-slider-prev").click(function () {
        jQuery(".ic-banner-slider").slick("slickPrev");
      });

      jQuery(".ic-banner-slider-next").click(function () {
        jQuery(".ic-banner-slider").slick("slickNext");
      });

      // about tour artists slick slider
      jQuery(".ic-artist-slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
      jQuery(".ic-artist-prev").click(function () {
        jQuery(".ic-artist-slider").slick("slickPrev");
      });

      jQuery(".ic-artist-next").click(function () {
        jQuery(".ic-artist-slider").slick("slickNext");
      });

       // Album slider
       jQuery(".ic-album-slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
      jQuery(".ic-artist-prev").click(function () {
        jQuery(".ic-album-slider").slick("slickPrev");
      });

      jQuery(".ic-artist-next").click(function () {
        jQuery(".ic-album-slider").slick("slickNext");
      });

      // Related products
      jQuery(".ic-related-products-slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
      jQuery(".ic-products-prev").click(function () {
        jQuery(".ic-related-products-slider").slick("slickPrev");
      });

      jQuery(".ic-products-next").click(function () {
        jQuery(".ic-related-products-slider").slick("slickNext");
      });

       // Related news
       jQuery(".ic-related-news-slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
      jQuery(".ic-news-prev").click(function () {
        jQuery(".ic-related-news-slider").slick("slickPrev");
      });

      jQuery(".ic-news-next").click(function () {
        jQuery(".ic-related-news-slider").slick("slickNext");
      });

      // product details slider
      jQuery(".ic-product-details-big-img").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.ic-product-details-small-img'
      });

      jQuery(".ic-product-details-small-img").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.ic-product-details-big-img',
        focusOnSelect: true
      });

    },
    d = function(){
        // audio player
        $(".audio-player").each(function () {
          const player = jQuery(this);
          const audio = new Audio("https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3");
          // credit for song: Adrian kreativaweb@gmail.com
      
          audio.addEventListener("loadeddata", function () {
            player.find(".time .length").text(getTimeCodeFromNum(audio.duration));
            audio.volume = 0.75;
          });
      
          // click on timeline to skip around
          const timeline = player.find(".timeline");
          timeline.on("click", function (e) {
            const timelineWidth = parseInt(timeline.css("width"));
            const timeToSeek = (e.offsetX / timelineWidth) * audio.duration;
            audio.currentTime = timeToSeek;
          });
      
          // click volume slider to change volume
          const volumeSlider = player.find(".controls .volume-slider");
          volumeSlider.on("click", function (e) {
            const sliderWidth = parseInt(volumeSlider.css("width"));
            const newVolume = e.offsetX / sliderWidth;
            audio.volume = newVolume;
            player.find(".controls .volume-percentage").css("width", newVolume * 100 + "%");
          });
      
          // check audio percentage and update time accordingly
          setInterval(function () {
            const progressBar = player.find(".progress");
            progressBar.css("width", (audio.currentTime / audio.duration) * 100 + "%");
            player.find(".time .current").text(getTimeCodeFromNum(audio.currentTime));
          }, 500);
      
          // toggle between playing and pausing on button click
          const playBtn = player.find(".controls .toggle-play");
          playBtn.on("click", function () {
            if (audio.paused) {
              playBtn.removeClass("icofont-ui-play").addClass("icofont-ui-pause");
              audio.play();
            } else {
              playBtn.removeClass("icofont-ui-pause").addClass("icofont-ui-play");
              audio.pause();
            }
          });
      
          player.find(".volume-button").on("click", function () {
            const volumeEl = player.find(".volume-container .volume");
            audio.muted = !audio.muted;
            if (audio.muted) {
              volumeEl.removeClass("icofont-volume-bar").addClass("icofont-mute-volume");
            } else {
              volumeEl.addClass("icofont-volume-bar").removeClass("icofont-mute-volume");
            }
          });
      
          // turn 128 seconds into 2:08
          function getTimeCodeFromNum(num) {
            let seconds = parseInt(num);
            let minutes = parseInt(seconds / 60);
            seconds -= minutes * 60;
            const hours = parseInt(minutes / 60);
            minutes -= hours * 60;
      
            if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
            return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
          }
        });
    },
    u = function(){
      // countdown js
      if (document.querySelector(".countdown")) {
        // Set the date we're counting down to
        var countDownDate =
          new Date().getTime() + 365 * 60 * 60 * 1000 + 33 * 60 * 1000 + 33 * 1000;

        // Update the count down every 1 second
        var countdownfunction = setInterval(function () {
          // Get today's date and time
          var now = new Date().getTime();

          // Find the distance between now and the count down date
          var distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Output the result in an element with id="days", "hours", "minutes", and "seconds"
          document.getElementById("days").innerHTML = ("0" + days).slice(-2);
          document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
          document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
          document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);

          // If the count down is over, write some text
          if (distance < 0) {
            clearInterval(countdownfunction);
            document.querySelector(".countdown").innerHTML = "EXPIRED";
          }
        }, 1000);
      }
    },
    f = function(){
      // catagories collapse
      jQuery(".ic-shop-catagories-links li a").on("click",function (e) {
        e.preventDefault();
        jQuery(this).siblings().slideToggle();
      });
    },
    k = function(){
      // back to top
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 50) {
            $(".ic-back-top").css({
                bottom: "4%",
                opacity: "1",
                transition: "all .5s ease-in-out",
            });
        } else {
            $(".ic-back-top").css({
                bottom: "-5%",
                opacity: "0",
                transition: "all .5s ease-in-out",
            });
        }
    });
    $(".ic-back-top").on("click", function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            0
        );
        return false;
    });
      
    },

    m = function(){
      if(jQuery('.ic-video-player')){
        const player = new Plyr(".ic-video-player");
      }
    };
   
    return {
      init: function(){
        t(),
        i(),
        u(),
        d(),
        f(),
        k(),
        m()
        
      }
    }
})();

jQuery(document).ready(function(){
  "use strict";
  w3sing.init();
});

