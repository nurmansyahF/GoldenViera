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
            autoplay: true,
            autoplayTimeout: 8000,
            autoplaySpeed: 1200,
            // animateIn: 'fadeIn',
            // animateOut: 'fadeOut'
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGZ1bmN0aW9uIHRvU3ZnKG9iail7XHJcbiAgICAgICAgdmFyICRpbWcgPSBvYmo7XHJcbiAgICAgICAgdmFyIGltZ0lEID0gJGltZy5hdHRyKCdpZCcpO1xyXG4gICAgICAgIHZhciBpbWdDbGFzcyA9ICRpbWcuYXR0cignY2xhc3MnKTtcclxuICAgICAgICB2YXIgaW1nVVJMID0gJGltZy5hdHRyKCdzcmMnKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5LmdldChpbWdVUkwsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgIC8vIEdldCB0aGUgU1ZHIHRhZywgaWdub3JlIHRoZSByZXN0XHJcbiAgICAgICAgICB2YXIgJHN2ZyA9IGpRdWVyeShkYXRhKS5maW5kKCdzdmcnKTtcclxuXHJcbiAgICAgICAgICAvLyBBZGQgcmVwbGFjZWQgaW1hZ2UncyBJRCB0byB0aGUgbmV3IFNWR1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBpbWdJRCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgJHN2ZyA9ICRzdmcuYXR0cignaWQnLCBpbWdJRCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBBZGQgcmVwbGFjZWQgaW1hZ2UncyBjbGFzc2VzIHRvIHRoZSBuZXcgU1ZHXHJcbiAgICAgICAgICBpZiAodHlwZW9mIGltZ0NsYXNzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAkc3ZnID0gJHN2Zy5hdHRyKCdjbGFzcycsIGltZ0NsYXNzICsgJyByZXBsYWNlZC1zdmcnKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBSZW1vdmUgYW55IGludmFsaWQgWE1MIHRhZ3MgYXMgcGVyIGh0dHA6Ly92YWxpZGF0b3IudzMub3JnXHJcbiAgICAgICAgICAkc3ZnID0gJHN2Zy5yZW1vdmVBdHRyKCd4bWxuczphJyk7XHJcblxyXG4gICAgICAgICAgLy8gUmVwbGFjZSBpbWFnZSB3aXRoIG5ldyBTVkdcclxuICAgICAgICAgICRpbWcucmVwbGFjZVdpdGgoJHN2Zyk7XHJcblxyXG4gICAgICAgIH0sICd4bWwnKTtcclxuICAgICAgfVxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGpRdWVyeSgnaW1nLnN2ZycpLmVhY2goZnVuY3Rpb24oaSkge1xyXG4gICAgICAgIHRvU3ZnKCQodGhpcykpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoID09ICcjXz1fJykge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaGlzdG9yeSAmJiBoaXN0b3J5LnB1c2hTdGF0ZSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoXCJcIiwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJCgnLnNlbGVjdCcpLnNlbGVjdHBpY2tlcih7XHJcbiAgICAgICAgc3R5bGU6ICdzZWxlY3QtY29udHJvbCcsXHJcbiAgICAgICAgc2l6ZTogNFxyXG4gICAgfSk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmMsIDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZnVuYygpIHtcclxuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3JlYWR5JylcclxuICAgICAgICB2YXIgY3Q9MDtcclxuICAgICAgICB2YXIgaGVhZGVyID0gJCgnaGVhZGVyJyk7XHJcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgJCgnaGVhZGVyJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcclxuICAgICAgICAgICAgICAgIGggPSAkKHdpbmRvdykuaGVpZ2h0KCksXHJcbiAgICAgICAgICAgICAgICBoYWxmID0gaC8yLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyID0gJCgnaGVhZGVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodG9wID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8kKCdtYWluJykuY3NzKCdwYWRkaW5nLXRvcCcsaGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcygnZml4ZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyQoJ21haW4nKS5jc3MoJ3BhZGRpbmctdG9wJywwKTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoJ2ZpeGVkJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGN0PiB0b3Ape1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcygnc3RpY2t5Jyk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoJ3N0aWNreScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3QgPSB0b3A7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhbmltYXRlU2Nyb2xsKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAwKXtcclxuICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcuYnVyZ2VyLWljb24nKS51bmJpbmQoJ2NsaWNrJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdtZW51LW9wZW4nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsJy5oZWFkZXJfYmcnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbWVudS1vcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZnVuY3Rpb24gaW1nWm9vbSgpe1xyXG4gICAgICAgICAgJCgnI3pvb21fMScpLmV6UGx1cygpO1xyXG4gICAgICAgIH1pbWdab29tKCk7XHJcblxyXG4gICAgICAkKCcudGh1bWJuYWlsJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgYmltZyA9IHQuZmluZCgnLmJveC1pbWcnKTtcclxuXHJcbiAgICAgICAgYmltZy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICB2YXIgaW1nID0gJCh0aGlzKS5maW5kKCcuaW1nJyksXHJcbiAgICAgICAgICAgICAgZGltZyA9IGltZy5kYXRhKCdpbWcnKTtcclxuICAgICAgICAgICQodGhpcykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYmltZy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcjem9vbV8xJykuYXR0cignc3JjJywgZGltZyk7XHJcbiAgICAgICAgICAgIGltZ1pvb20oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgICAgJCgnLmNhcnQtaXRlbScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIHIgPSB0LmZpbmQoJy5yZW1vdmUnKTtcclxuICAgICAgICByLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5jYXJ0LWl0ZW0nKS5yZW1vdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICAkKCcubm90ZScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICQodGhpcykubmV4dCgnLmZvcm0tZ3JvdXAuaGlkZGVuJykuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgJCgnLmZvcm0tY2hlY2tvdXQnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBmYyA9IHQuZmluZCgnLmZvcm0tY29udHJvbCcpO1xyXG4gICAgICAgIGZjLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHZhciBzID0gJCh0aGlzKS5wcmV2KCcuZmxvYXRpbmctbGFiZWwnKTtcclxuICAgICAgICAgICQodGhpcykub24oXCJjaGFuZ2UgcGFzdGUga2V5dXBcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYoJCh0aGlzKS52YWwoKSAhPVwiXCIpe1xyXG4gICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2ZpbGxlZCcpO1xyXG4gICAgICAgICAgICAgIHMuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZmlsbGVkJyk7XHJcbiAgICAgICAgICAgICAgcy5yZW1vdmVDbGFzcygnc2hvdycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICQodGhpcykuZm9jdXMoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIHMudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuXHJcbiAgICAgICQoJy5pY29uLW1lbnUnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHQgPSAkKHRoaXMpO1xyXG4gICAgICAgIHQuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnLm1lbnUtb3BlbicpO1xyXG4gICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzaWRlLWZpbHRlci1vcGVuJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vU0xJREVSXHJcbiAgICAgICQoJy5zbGlkZXInKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuSXRlbSA9IHQuY2hpbGRyZW4oKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChuSXRlbSA+IDEpe1xyXG4gICAgICAgICAgdC5hZGRDbGFzcygnb3dsLWNhcm91c2VsJyk7XHJcbiAgICAgICAgICB0Lm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMjQsXHJcbiAgICAgICAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgbmF2VGV4dDogW1wiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1sZWZ0Jz48L3NwYW4+XCIsXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLXJpZ2h0Jz48L3NwYW4+XCJdLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA4MDAwLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAxMjAwLFxyXG4gICAgICAgICAgICAvLyBhbmltYXRlSW46ICdmYWRlSW4nLFxyXG4gICAgICAgICAgICAvLyBhbmltYXRlT3V0OiAnZmFkZU91dCdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vU0xJREVSXHJcbiAgICAgICQoJy5zbGlkZXItaHByZGN0JykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbkl0ZW0gPSB0LmNoaWxkcmVuKCkubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAobkl0ZW0gPiAxKXtcclxuICAgICAgICAgIHQuYWRkQ2xhc3MoJ293bC1jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgdC5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA1LFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBtYXJnaW46IDM1LFxyXG4gICAgICAgICAgICBjZW50ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9XaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgbmF2VGV4dDogW1wiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1sZWZ0Jz48L3NwYW4+XCIsXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLXJpZ2h0Jz48L3NwYW4+XCJdLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogODAwMCxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTIwMCxcclxuICAgICAgICAgICAgYW5pbWF0ZUluOiAnZmFkZUluJyxcclxuICAgICAgICAgICAgYW5pbWF0ZU91dDogJ2ZhZGVPdXQnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvL1NMSURFUlxyXG4gICAgICAkKCcuc2xpZGVyLXRwJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbkl0ZW0gPSB0LmNoaWxkcmVuKCkubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAobkl0ZW0gPiAxKXtcclxuICAgICAgICAgIHQuYWRkQ2xhc3MoJ293bC1jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgdC5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0LFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgICAgICBtYXJnaW46IDM1LFxyXG4gICAgICAgICAgICBjZW50ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXZUZXh0OiBbXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLWxlZnQnPjwvc3Bhbj5cIixcIjxzcGFuIGNsYXNzPSdpY29uLWNoZXZyb24tcmlnaHQnPjwvc3Bhbj5cIl0sXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA4MDAwLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAxMjAwLFxyXG4gICAgICAgICAgICBhbmltYXRlSW46ICdmYWRlSW4nLFxyXG4gICAgICAgICAgICBhbmltYXRlT3V0OiAnZmFkZU91dCcsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmUgOiB7XHJcbiAgICAgICAgICAgICAgMCA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyOiB0cnVlXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICA0ODAgOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgNzY4OntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiA0LFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy9TTElERVJcclxuICAgICAgJCgnLnNsaWRlci1icCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5JdGVtID0gdC5jaGlsZHJlbigpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKG5JdGVtID4gMSl7XHJcbiAgICAgICAgICB0LmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKTtcclxuICAgICAgICAgIHQub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBpdGVtczogNSxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMzUsXHJcbiAgICAgICAgICAgIGNlbnRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdlRleHQ6IFtcIjxzcGFuIGNsYXNzPSdpY29uLWNoZXZyb24tbGVmdCc+PC9zcGFuPlwiLFwiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1yaWdodCc+PC9zcGFuPlwiXSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDgwMDAsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDEyMDAsXHJcbiAgICAgICAgICAgIGFuaW1hdGVJbjogJ2ZhZGVJbicsXHJcbiAgICAgICAgICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0JyxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZSA6IHtcclxuICAgICAgICAgICAgICAwIDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICA0ODAgOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgNzY4OntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAgLy9TTElERVJcclxuICAgICAgICQoJy5zbGlkZXItbG4nKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuSXRlbSA9IHQuY2hpbGRyZW4oKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChuSXRlbSA+IDEpe1xyXG4gICAgICAgICAgdC5hZGRDbGFzcygnb3dsLWNhcm91c2VsJyk7XHJcbiAgICAgICAgICB0Lm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgaXRlbXM6IDIsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMzUsXHJcbiAgICAgICAgICAgIGNlbnRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdlRleHQ6IFtcIjxzcGFuIGNsYXNzPSdpY29uLWNoZXZyb24tbGVmdCc+PC9zcGFuPlwiLFwiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1yaWdodCc+PC9zcGFuPlwiXSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDgwMDAsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDEyMDAsXHJcbiAgICAgICAgICAgIGFuaW1hdGVJbjogJ2ZhZGVJbicsXHJcbiAgICAgICAgICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0JyxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZSA6IHtcclxuICAgICAgICAgICAgICAwIDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXI6IHRydWVcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIDQ4MCA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICA3Njg6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vU0xJREVSXHJcbiAgICAgICQoJy5zbGlkZXItaGQnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuSXRlbSA9IHQuY2hpbGRyZW4oKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChuSXRlbSA+IDEpe1xyXG4gICAgICAgICAgdC5hZGRDbGFzcygnb3dsLWNhcm91c2VsJyk7XHJcbiAgICAgICAgICB0Lm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBuYXZUZXh0OiBbXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLWxlZnQnPjwvc3Bhbj5cIixcIjxzcGFuIGNsYXNzPSdpY29uLWNoZXZyb24tcmlnaHQnPjwvc3Bhbj5cIl0sXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDgwMDAsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDEyMDAsXHJcbiAgICAgICAgICAgIGFuaW1hdGVJbjogJ2ZhZGVJbicsXHJcbiAgICAgICAgICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy9TTElERVJcclxuICAgICAgJCgnLnNsaWRlci1yZWxwcmRjdCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5JdGVtID0gdC5jaGlsZHJlbigpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKG5JdGVtID4gMSl7XHJcbiAgICAgICAgICB0LmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKTtcclxuICAgICAgICAgIHQub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBpdGVtczogNCxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICAgICAgbWFyZ2luOiAzMCxcclxuICAgICAgICAgICAgY2VudGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2VGV4dDogW1wiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1sZWZ0Jz48L3NwYW4+XCIsXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLXJpZ2h0Jz48L3NwYW4+XCJdLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA4MDAwLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAxMjAwLFxyXG4gICAgICAgICAgICBhbmltYXRlSW46ICdmYWRlSW4nLFxyXG4gICAgICAgICAgICBhbmltYXRlT3V0OiAnZmFkZU91dCdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgdmFyIG9kID0gJCgnYm9keScpLmZpbmQoJy5zbGlkZXItaG9tZSAub3dsLWRvdCcpO1xyXG4gICAgICBvZC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBzID0gdC5maW5kKCdzcGFuJyksXHJcbiAgICAgICAgICAgIG51bSA9IHQuaW5kZXgoKSArIDEsXHJcbiAgICAgICAgICAgIG51cyA9IG51bS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmKG9kLmxlbmd0aCA8PSA5KXtcclxuICAgICAgICAgIHMudGV4dChcIjBcIitudXMpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgcy50ZXh0KG51cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vU0xJREVSIEVYVFJBIFNNQUxMXHJcbiAgICBmdW5jdGlvbiBzbGlkZXJYUygpIHtcclxuICAgICAgdmFyIHNsaWRlclMgPSAkKCcuc2xpZGVyLXhzJyk7XHJcbiAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2Nykge1xyXG4gICAgICAgIHNsaWRlclMuYWRkQ2xhc3MoJ293bC1jYXJvdXNlbCcpO1xyXG4gICAgICAgIHNsaWRlclMub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgLy8gbmF2VGV4dDogW1wiPGkgY2xhc3M9J2ZhcyBmYS1jaGV2cm9uLWxlZnQnPjwvaT5cIixcIjxpIGNsYXNzPSdmYXMgZmEtY2hldnJvbi1yaWdodCc+PC9pPlwiXSxcclxuICAgICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICByZXNwb25zaXZlIDoge1xyXG4gICAgICAgICAgICAwIDoge1xyXG4gICAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDQ4MCA6IHtcclxuICAgICAgICAgICAgICBpdGVtczogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2xpZGVyUy50cmlnZ2VyKCdkZXN0cm95Lm93bC5jYXJvdXNlbCcpLnJlbW92ZUNsYXNzKCdvd2wtY2Fyb3VzZWwgb3dsLWxvYWRlZCcpO1xyXG4gICAgICAgIHNsaWRlclMuZmluZCgnLm93bC1zdGFnZS1vdXRlcicpLmNoaWxkcmVuKCkudW53cmFwKCk7XHJcbiAgICAgIH1cclxuICAgIH1zbGlkZXJYUygpO1xyXG4gICAgLy8gQU5JTUFURSBPTiBTQ1JPTExcclxuICAgIGZ1bmN0aW9uIGFuaW1hdGVTY3JvbGwoKXtcclxuICAgICAgJCgnLmFuaW1hdGUnKS5lYWNoKGZ1bmN0aW9uKGkpe1xyXG4gICAgICAgICAgdmFyIGJvdHRvbV9vZl9vYmplY3QgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCArIDEwO1xyXG4gICAgICAgICAgdmFyIGJvdHRvbV9vZl93aW5kb3cgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgaWYoIGJvdHRvbV9vZl93aW5kb3cgPiBib3R0b21fb2Zfb2JqZWN0ICl7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYW5pbWF0ZS1pbicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiI21vZGFsU2VhcmNoXCIpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24oKXtcclxuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdiYWNrZHJvcC13aGl0ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNtb2RhbFNlYXJjaFwiKS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYmFja2Ryb3Atd2hpdGUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vQ2FsY3VsYXRvclxyXG4gICAgJCgnLmJ0bi1udW1iZXInKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhclxyXG4gICAgICAgICAgICBmaWVsZE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmllbGQnKSxcclxuICAgICAgICAgICAgdHlwZSAgICAgID0gJCh0aGlzKS5hdHRyKCdkYXRhLXR5cGUnKSxcclxuICAgICAgICAgICAgaW5wdXQgPSAkKFwiaW5wdXRbbmFtZT0nXCIrZmllbGROYW1lK1wiJ11cIiksXHJcbiAgICAgICAgICAgIGN1cnJlbnRWYWwgPSBwYXJzZUludChpbnB1dC52YWwoKSk7XHJcbiAgICAgICAgaWYgKCFpc05hTihjdXJyZW50VmFsKSkge1xyXG4gICAgICAgICAgICBpZih0eXBlID09ICdtaW51cycpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50VmFsID4gaW5wdXQuYXR0cignbWluJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWwoY3VycmVudFZhbCAtIDEpLmNoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocGFyc2VJbnQoaW5wdXQudmFsKCkpID09IGlucHV0LmF0dHIoJ21pbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT0gJ3BsdXMnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFZhbCA8IGlucHV0LmF0dHIoJ21heCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsKGN1cnJlbnRWYWwgKyAxKS5jaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KGlucHV0LnZhbCgpKSA9PSBpbnB1dC5hdHRyKCdtYXgnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnB1dC52YWwoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKCcuaW5wdXQtbnVtYmVyJykuY2hhbmdlKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgbWluVmFsdWUgPSAgcGFyc2VJbnQoJCh0aGlzKS5hdHRyKCdtaW4nKSksXHJcbiAgICAgICAgbWF4VmFsdWUgPSAgcGFyc2VJbnQoJCh0aGlzKS5hdHRyKCdtYXgnKSksXHJcbiAgICAgICAgdmFsdWVDdXJyZW50ID0gcGFyc2VJbnQoJCh0aGlzKS52YWwoKSk7XHJcblxyXG4gICAgICAgIHZhciBuYW1lID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICAgICAgaWYodmFsdWVDdXJyZW50ID49IG1pblZhbHVlKSB7XHJcbiAgICAgICAgICAgICQoXCIuYnRuLW51bWJlcltkYXRhLXR5cGU9J21pbnVzJ11bZGF0YS1maWVsZD0nXCIrbmFtZStcIiddXCIpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnU29ycnksIHRoZSBtaW5pbXVtIHZhbHVlIHdhcyByZWFjaGVkJyk7XHJcbiAgICAgICAgICAgICQodGhpcykudmFsKCQodGhpcykuZGF0YSgnb2xkVmFsdWUnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHZhbHVlQ3VycmVudCA8PSBtYXhWYWx1ZSkge1xyXG4gICAgICAgICAgICAkKFwiLmJ0bi1udW1iZXJbZGF0YS10eXBlPSdwbHVzJ11bZGF0YS1maWVsZD0nXCIrbmFtZStcIiddXCIpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnU29ycnksIHRoZSBtYXhpbXVtIHZhbHVlIHdhcyByZWFjaGVkJyk7XHJcbiAgICAgICAgICAgICQodGhpcykudmFsKCQodGhpcykuZGF0YSgnb2xkVmFsdWUnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gJChcIi50eXBlXCIpLmtleWRvd24oZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICAgICAvLyBBbGxvdzogYmFja3NwYWNlLCBkZWxldGUsIHRhYiwgZXNjYXBlLCBlbnRlciBhbmQgLlxyXG4gICAgLy8gICAgIGlmICgkLmluQXJyYXkoZS5rZXlDb2RlLCBbNDYsIDgsIDksIDI3LCAxMywgMTkwXSkgIT09IC0xIHx8XHJcbiAgICAvLyAgICAgICAgICAvLyBBbGxvdzogQ3RybCtBXHJcbiAgICAvLyAgICAgICAgIChlLmtleUNvZGUgPT0gNjUgJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fFxyXG4gICAgLy8gICAgICAgICAgLy8gQWxsb3c6IGhvbWUsIGVuZCwgbGVmdCwgcmlnaHRcclxuICAgIC8vICAgICAgICAgKGUua2V5Q29kZSA+PSAzNSAmJiBlLmtleUNvZGUgPD0gMzkpKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgLy8gbGV0IGl0IGhhcHBlbiwgZG9uJ3QgZG8gYW55dGhpbmdcclxuICAgIC8vICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vIEVuc3VyZSB0aGF0IGl0IGlzIGEgbnVtYmVyIGFuZCBzdG9wIHRoZSBrZXlwcmVzc1xyXG4gICAgLy8gICAgIGlmICgoZS5zaGlmdEtleSB8fCAoZS5rZXlDb2RlIDwgNDggfHwgZS5rZXlDb2RlID4gNTcpKSAmJiAoZS5rZXlDb2RlIDwgOTYgfHwgZS5rZXlDb2RlID4gMTA1KSkge1xyXG4gICAgLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgIGFuaW1hdGVTY3JvbGwoKTtcclxuICAgIH0pXHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICBpbml0KCk7XHJcbiAgICAgIGFuaW1hdGVTY3JvbGwoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbn0pKCk7Il0sImZpbGUiOiJtYWluLmpzIn0=

//# sourceMappingURL=main.js.map
