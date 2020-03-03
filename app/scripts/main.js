(function() {
    'use strict';
    function toSvg(obj){
        var $img = obj;
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = jQuery(data).find('svg');

          // Add replaced image's ID to the new SVG
          if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');

          // Replace image with new SVG
          $img.replaceWith($svg);

        }, 'xml');
      }
    function init() {
    jQuery('img.svg').each(function(i) {
        toSvg($(this));

    });
    if (window.location.hash && window.location.hash == '#_=_') {
        if (window.history && history.pushState) {
            window.history.pushState("", document.title, window.location.pathname);
        }
    }
    $('.select').selectpicker({
        style: 'select-control',
        size: 4
    });
    setTimeout(func, 500);
    }

    function func() {
        $('body').addClass('ready')
        var ct=0;
        var header = $('header');
        $(window).scroll(function(){

            $('header').each(function(){
                var top = $(window).scrollTop(),
                h = $(window).height(),
                half = h/2,
                header = $('header');

                if(top > 0){
                    //$('main').css('padding-top',hh);
                    header.addClass('fixed');

                }else{
                    //$('main').css('padding-top',0);
                    header.removeClass('fixed')
                }
                if(ct> top){
                    header.addClass('sticky');
                }else{
                    header.removeClass('sticky');
                }
                ct = top;
            });
            animateScroll();
        })
        if($(window).scrollTop() > 0){
            header.addClass('fixed');
        }
        $('.burger-icon').unbind('click').click(function(){
            $('body').toggleClass('menu-open');
        });

        $('body').on('click','.header_bg',function(){
            $('body').removeClass('menu-open');
        });

        //SLIDER
    $('.slider').each(function(){
        var t = $(this),
            nItem = t.children().length;

        if (nItem > 1){
          t.addClass('owl-carousel');
          t.owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            margin: 24,
            center: true,
            navText: ["<span class='icon-chevron-left'></span>","<span class='icon-chevron-right'></span>"],
            autoplay: false,
            autoplayTimeout: 8000,
            autoplaySpeed: 1200,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
          })
        }
      });

      //SLIDER
      $('.slider-hprdct').each(function(){
        var t = $(this),
            nItem = t.children().length;

        if (nItem > 1){
          t.addClass('owl-carousel');
          t.owlCarousel({
            items: 5,
            loop: true,
            dots: false,
            nav: true,
            // margin: 35,
            center: true,
            autoWidth: true,
            navText: ["<span class='icon-chevron-left'></span>","<span class='icon-chevron-right'></span>"],
            autoplay: false,
            autoplayTimeout: 8000,
            autoplaySpeed: 1200,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
          })
        }
      });

      //SLIDER
      $('.slider-tp').each(function(){
        var t = $(this),
            nItem = t.children().length;

        if (nItem > 1){
          t.addClass('owl-carousel');
          t.owlCarousel({
            items: 4,
            loop: true,
            dots: false,
            nav: true,
            margin: 35,
            center: false,
            navText: ["<span class='icon-chevron-left'></span>","<span class='icon-chevron-right'></span>"],
            autoplay: false,
            autoplayTimeout: 8000,
            autoplaySpeed: 1200,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive : {
              0 : {
                items: 1,
                center: true
              },
              480 : {
                items: 2
              },
              768:{
                items: 4,
                margin: 20
              }
            }
          })
        }
      });

      //SLIDER
      $('.slider-bp').each(function(){
        var t = $(this),
            nItem = t.children().length;

        if (nItem > 1){
          t.addClass('owl-carousel');
          t.owlCarousel({
            items: 5,
            loop: true,
            dots: false,
            nav: false,
            margin: 35,
            center: false,
            navText: ["<span class='icon-chevron-left'></span>","<span class='icon-chevron-right'></span>"],
            autoplay: false,
            autoplayTimeout: 8000,
            autoplaySpeed: 1200,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive : {
              0 : {
                items: 2,
              },
              480 : {
                items: 3
              },
              768:{
                items: 4
              }
            }
          })
        }
      });

       //SLIDER
       $('.slider-ln').each(function(){
        var t = $(this),
            nItem = t.children().length;

        if (nItem > 1){
          t.addClass('owl-carousel');
          t.owlCarousel({
            items: 2,
            loop: true,
            dots: false,
            nav: true,
            margin: 35,
            center: false,
            navText: ["<span class='icon-chevron-left'></span>","<span class='icon-chevron-right'></span>"],
            autoplay: false,
            autoplayTimeout: 8000,
            autoplaySpeed: 1200,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive : {
              0 : {
                items: 1,
                center: true
              },
              480 : {
                items: 2
              },
              768:{
                items: 2
              }
            }
          })
        }
      });

      //SLIDER
      $('.slider-hd').each(function(){
        var t = $(this),
            nItem = t.children().length;

        if (nItem > 1){
          t.addClass('owl-carousel');
          t.owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            margin: 0,
            center: true,
            navText: ["<span class='icon-chevron-left'></span>","<span class='icon-chevron-right'></span>"],
            autoplay: true,
            autoplayTimeout: 8000,
            autoplaySpeed: 1200,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
          })
        }
      });

      //SLIDER
      $('.slider-relprdct').each(function(){
        var t = $(this),
            nItem = t.children().length;

        if (nItem > 1){
          t.addClass('owl-carousel');
          t.owlCarousel({
            items: 4,
            loop: true,
            dots: false,
            nav: true,
            margin: 30,
            center: false,
            navText: ["<span class='icon-chevron-left'></span>","<span class='icon-chevron-right'></span>"],
            autoplay: true,
            autoplayTimeout: 8000,
            autoplaySpeed: 1200,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
          })
        }
      });



      var od = $('body').find('.slider-home .owl-dot');
      od.each(function(){
        var t = $(this),
            s = t.find('span'),
            num = t.index() + 1,
            nus = num.toString();
        if(od.length <= 9){
          s.text("0"+nus);
        }else{
          s.text(nus);
        }
      })
    }

    //SLIDER EXTRA SMALL
    function sliderXS() {
      var sliderS = $('.slider-xs');
      if ($(window).width() < 767) {
        sliderS.addClass('owl-carousel');
        sliderS.owlCarousel({
          // navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
          items: 2,
          loop: true,
          nav: false,
          dots: true,
          autoplay: true,
          responsive : {
            0 : {
              items: 2
            },
            480 : {
              items: 1
            }
          }
        });
      } else {
        sliderS.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        sliderS.find('.owl-stage-outer').children().unwrap();
      }
    }sliderXS();
    // ANIMATE ON SCROLL
    function animateScroll(){
      $('.animate').each(function(i){
          var bottom_of_object = $(this).offset().top + 10;
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          if( bottom_of_window > bottom_of_object ){
              $(this).addClass('animate-in');
          }
      });
    }

    $(document).ready(function() {
        init();
        animateScroll();
    })


})();