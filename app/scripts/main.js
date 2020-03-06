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
        function imgZoom(){
          $('#zoom_1').ezPlus();
        }imgZoom();

      $('.thumbnail').each(function(){
        var t = $(this),
            bimg = t.find('.box-img');

        bimg.each(function(){
          var img = $(this).find('.img'),
              dimg = img.data('img');
          $(this).click(function(){
            bimg.removeClass('active');
            $(this).addClass('active');
            $('#zoom_1').attr('src', dimg);
            imgZoom();
          })
        })
      })
      $('.cart-item').each(function(){
        var t = $(this),
            r = t.find('.remove');
        r.click(function(){
          $(this).parents('.cart-item').remove();
        })
      })
      $('.note').each(function(){
        $(this).click(function(){
          $(this).addClass('hidden');
          $(this).next('.form-group.hidden').addClass('show');
        })
      })

      $('.form-checkout').each(function(){
        var t = $(this),
            fc = t.find('.form-control');
        fc.each(function(){
          var s = $(this).prev('.floating-label');
          $(this).on("change paste keyup", function(){
            if($(this).val() !=""){
              $(this).addClass('filled');
              s.addClass('show');
            }else{
              $(this).removeClass('filled');
              s.removeClass('show')
            }
          })
          
          $(this).focus(function() {
            // s.toggleClass('show');
          }
          );
        })
      })

      $('.icon-menu').each(function(){
        var t = $(this);
        t.click(function(){
          $('body').removeClass('.menu-open');
          $('body').toggleClass('side-filter-open');
        })
      })

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

    $("#modalSearch").on('show.bs.modal', function(){
      $('body').addClass('backdrop-white');
    });

    $("#modalSearch").on('hide.bs.modal', function(){
      $('body').removeClass('backdrop-white');
    });

    //Calculator
    $('.btn-number').click(function(e){
        e.preventDefault();

        var
            fieldName = $(this).attr('data-field'),
            type      = $(this).attr('data-type'),
            input = $("input[name='"+fieldName+"']"),
            currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if(type == 'minus') {

                if(currentVal > input.attr('min')) {
                    input.val(currentVal - 1).change();
                }
                if(parseInt(input.val()) == input.attr('min')) {
                    $(this).attr('disabled', true);
                }

            } else if(type == 'plus') {

                if(currentVal < input.attr('max')) {
                    input.val(currentVal + 1).change();
                }
                if(parseInt(input.val()) == input.attr('max')) {
                    $(this).attr('disabled', true);
                }

            }
        } else {
            input.val(0);
        }
    });
    $('.input-number').change(function() {

        var minValue =  parseInt($(this).attr('min')),
        maxValue =  parseInt($(this).attr('max')),
        valueCurrent = parseInt($(this).val());

        var name = $(this).attr('name');
        if(valueCurrent >= minValue) {
            $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the minimum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        if(valueCurrent <= maxValue) {
            $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the maximum value was reached');
            $(this).val($(this).data('oldValue'));
        }
    });

    // $(".type").keydown(function (e) {
    //     // Allow: backspace, delete, tab, escape, enter and .
    //     if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
    //          // Allow: Ctrl+A
    //         (e.keyCode == 65 && e.ctrlKey === true) ||
    //          // Allow: home, end, left, right
    //         (e.keyCode >= 35 && e.keyCode <= 39)) {
    //              // let it happen, don't do anything
    //              return;
    //     }
    //     // Ensure that it is a number and stop the keypress
    //     if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
    //         e.preventDefault();
    //     }
    // });

    $(document).ready(function() {
        init();
        animateScroll();
    })
    $(window).resize(function() {
      init();
      animateScroll();
    });


})();