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


})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGZ1bmN0aW9uIHRvU3ZnKG9iail7XHJcbiAgICAgICAgdmFyICRpbWcgPSBvYmo7XHJcbiAgICAgICAgdmFyIGltZ0lEID0gJGltZy5hdHRyKCdpZCcpO1xyXG4gICAgICAgIHZhciBpbWdDbGFzcyA9ICRpbWcuYXR0cignY2xhc3MnKTtcclxuICAgICAgICB2YXIgaW1nVVJMID0gJGltZy5hdHRyKCdzcmMnKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5LmdldChpbWdVUkwsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgIC8vIEdldCB0aGUgU1ZHIHRhZywgaWdub3JlIHRoZSByZXN0XHJcbiAgICAgICAgICB2YXIgJHN2ZyA9IGpRdWVyeShkYXRhKS5maW5kKCdzdmcnKTtcclxuXHJcbiAgICAgICAgICAvLyBBZGQgcmVwbGFjZWQgaW1hZ2UncyBJRCB0byB0aGUgbmV3IFNWR1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBpbWdJRCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgJHN2ZyA9ICRzdmcuYXR0cignaWQnLCBpbWdJRCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBBZGQgcmVwbGFjZWQgaW1hZ2UncyBjbGFzc2VzIHRvIHRoZSBuZXcgU1ZHXHJcbiAgICAgICAgICBpZiAodHlwZW9mIGltZ0NsYXNzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAkc3ZnID0gJHN2Zy5hdHRyKCdjbGFzcycsIGltZ0NsYXNzICsgJyByZXBsYWNlZC1zdmcnKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBSZW1vdmUgYW55IGludmFsaWQgWE1MIHRhZ3MgYXMgcGVyIGh0dHA6Ly92YWxpZGF0b3IudzMub3JnXHJcbiAgICAgICAgICAkc3ZnID0gJHN2Zy5yZW1vdmVBdHRyKCd4bWxuczphJyk7XHJcblxyXG4gICAgICAgICAgLy8gUmVwbGFjZSBpbWFnZSB3aXRoIG5ldyBTVkdcclxuICAgICAgICAgICRpbWcucmVwbGFjZVdpdGgoJHN2Zyk7XHJcblxyXG4gICAgICAgIH0sICd4bWwnKTtcclxuICAgICAgfVxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGpRdWVyeSgnaW1nLnN2ZycpLmVhY2goZnVuY3Rpb24oaSkge1xyXG4gICAgICAgIHRvU3ZnKCQodGhpcykpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoID09ICcjXz1fJykge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaGlzdG9yeSAmJiBoaXN0b3J5LnB1c2hTdGF0ZSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoXCJcIiwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJCgnLnNlbGVjdCcpLnNlbGVjdHBpY2tlcih7XHJcbiAgICAgICAgc3R5bGU6ICdzZWxlY3QtY29udHJvbCcsXHJcbiAgICAgICAgc2l6ZTogNFxyXG4gICAgfSk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmMsIDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZnVuYygpIHtcclxuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3JlYWR5JylcclxuICAgICAgICB2YXIgY3Q9MDtcclxuICAgICAgICB2YXIgaGVhZGVyID0gJCgnaGVhZGVyJyk7XHJcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgJCgnaGVhZGVyJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcclxuICAgICAgICAgICAgICAgIGggPSAkKHdpbmRvdykuaGVpZ2h0KCksXHJcbiAgICAgICAgICAgICAgICBoYWxmID0gaC8yLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyID0gJCgnaGVhZGVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodG9wID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8kKCdtYWluJykuY3NzKCdwYWRkaW5nLXRvcCcsaGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcygnZml4ZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyQoJ21haW4nKS5jc3MoJ3BhZGRpbmctdG9wJywwKTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoJ2ZpeGVkJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGN0PiB0b3Ape1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcygnc3RpY2t5Jyk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoJ3N0aWNreScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3QgPSB0b3A7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhbmltYXRlU2Nyb2xsKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAwKXtcclxuICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcuYnVyZ2VyLWljb24nKS51bmJpbmQoJ2NsaWNrJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdtZW51LW9wZW4nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsJy5oZWFkZXJfYmcnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbWVudS1vcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZnVuY3Rpb24gaW1nWm9vbSgpe1xyXG4gICAgICAgICAgJCgnI3pvb21fMScpLmV6UGx1cygpO1xyXG4gICAgICAgIH1pbWdab29tKCk7XHJcblxyXG4gICAgICAkKCcudGh1bWJuYWlsJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgYmltZyA9IHQuZmluZCgnLmJveC1pbWcnKTtcclxuXHJcbiAgICAgICAgYmltZy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICB2YXIgaW1nID0gJCh0aGlzKS5maW5kKCcuaW1nJyksXHJcbiAgICAgICAgICAgICAgZGltZyA9IGltZy5kYXRhKCdpbWcnKTtcclxuICAgICAgICAgICQodGhpcykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYmltZy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcjem9vbV8xJykuYXR0cignc3JjJywgZGltZyk7XHJcbiAgICAgICAgICAgIGltZ1pvb20oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgICAgJCgnLmNhcnQtaXRlbScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIHIgPSB0LmZpbmQoJy5yZW1vdmUnKTtcclxuICAgICAgICByLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5jYXJ0LWl0ZW0nKS5yZW1vdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICAkKCcubm90ZScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICQodGhpcykubmV4dCgnLmZvcm0tZ3JvdXAuaGlkZGVuJykuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgJCgnLmZvcm0tY2hlY2tvdXQnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBmYyA9IHQuZmluZCgnLmZvcm0tY29udHJvbCcpO1xyXG4gICAgICAgIGZjLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHZhciBzID0gJCh0aGlzKS5wcmV2KCcuZmxvYXRpbmctbGFiZWwnKTtcclxuICAgICAgICAgICQodGhpcykub24oXCJjaGFuZ2UgcGFzdGUga2V5dXBcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYoJCh0aGlzKS52YWwoKSAhPVwiXCIpe1xyXG4gICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2ZpbGxlZCcpO1xyXG4gICAgICAgICAgICAgIHMuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZmlsbGVkJyk7XHJcbiAgICAgICAgICAgICAgcy5yZW1vdmVDbGFzcygnc2hvdycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICQodGhpcykuZm9jdXMoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIHMudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vU0xJREVSXHJcbiAgICAgICQoJy5zbGlkZXInKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuSXRlbSA9IHQuY2hpbGRyZW4oKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChuSXRlbSA+IDEpe1xyXG4gICAgICAgICAgdC5hZGRDbGFzcygnb3dsLWNhcm91c2VsJyk7XHJcbiAgICAgICAgICB0Lm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMjQsXHJcbiAgICAgICAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgbmF2VGV4dDogW1wiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1sZWZ0Jz48L3NwYW4+XCIsXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLXJpZ2h0Jz48L3NwYW4+XCJdLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogODAwMCxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTIwMCxcclxuICAgICAgICAgICAgYW5pbWF0ZUluOiAnZmFkZUluJyxcclxuICAgICAgICAgICAgYW5pbWF0ZU91dDogJ2ZhZGVPdXQnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvL1NMSURFUlxyXG4gICAgICAkKCcuc2xpZGVyLWhwcmRjdCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5JdGVtID0gdC5jaGlsZHJlbigpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKG5JdGVtID4gMSl7XHJcbiAgICAgICAgICB0LmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKTtcclxuICAgICAgICAgIHQub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBpdGVtczogNSxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gbWFyZ2luOiAzNSxcclxuICAgICAgICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgIG5hdlRleHQ6IFtcIjxzcGFuIGNsYXNzPSdpY29uLWNoZXZyb24tbGVmdCc+PC9zcGFuPlwiLFwiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1yaWdodCc+PC9zcGFuPlwiXSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDgwMDAsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDEyMDAsXHJcbiAgICAgICAgICAgIGFuaW1hdGVJbjogJ2ZhZGVJbicsXHJcbiAgICAgICAgICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy9TTElERVJcclxuICAgICAgJCgnLnNsaWRlci10cCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5JdGVtID0gdC5jaGlsZHJlbigpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKG5JdGVtID4gMSl7XHJcbiAgICAgICAgICB0LmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKTtcclxuICAgICAgICAgIHQub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBpdGVtczogNCxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICAgICAgbWFyZ2luOiAzNSxcclxuICAgICAgICAgICAgY2VudGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2VGV4dDogW1wiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1sZWZ0Jz48L3NwYW4+XCIsXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLXJpZ2h0Jz48L3NwYW4+XCJdLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogODAwMCxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTIwMCxcclxuICAgICAgICAgICAgYW5pbWF0ZUluOiAnZmFkZUluJyxcclxuICAgICAgICAgICAgYW5pbWF0ZU91dDogJ2ZhZGVPdXQnLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlIDoge1xyXG4gICAgICAgICAgICAgIDAgOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogdHJ1ZVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgNDgwIDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIDc2ODp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogNCxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vU0xJREVSXHJcbiAgICAgICQoJy5zbGlkZXItYnAnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuSXRlbSA9IHQuY2hpbGRyZW4oKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChuSXRlbSA+IDEpe1xyXG4gICAgICAgICAgdC5hZGRDbGFzcygnb3dsLWNhcm91c2VsJyk7XHJcbiAgICAgICAgICB0Lm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgaXRlbXM6IDUsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgICAgICBtYXJnaW46IDM1LFxyXG4gICAgICAgICAgICBjZW50ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXZUZXh0OiBbXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLWxlZnQnPjwvc3Bhbj5cIixcIjxzcGFuIGNsYXNzPSdpY29uLWNoZXZyb24tcmlnaHQnPjwvc3Bhbj5cIl0sXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA4MDAwLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAxMjAwLFxyXG4gICAgICAgICAgICBhbmltYXRlSW46ICdmYWRlSW4nLFxyXG4gICAgICAgICAgICBhbmltYXRlT3V0OiAnZmFkZU91dCcsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmUgOiB7XHJcbiAgICAgICAgICAgICAgMCA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgNDgwIDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIDc2ODp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogNFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgIC8vU0xJREVSXHJcbiAgICAgICAkKCcuc2xpZGVyLWxuJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbkl0ZW0gPSB0LmNoaWxkcmVuKCkubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAobkl0ZW0gPiAxKXtcclxuICAgICAgICAgIHQuYWRkQ2xhc3MoJ293bC1jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgdC5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgICAgICBtYXJnaW46IDM1LFxyXG4gICAgICAgICAgICBjZW50ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXZUZXh0OiBbXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLWxlZnQnPjwvc3Bhbj5cIixcIjxzcGFuIGNsYXNzPSdpY29uLWNoZXZyb24tcmlnaHQnPjwvc3Bhbj5cIl0sXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA4MDAwLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAxMjAwLFxyXG4gICAgICAgICAgICBhbmltYXRlSW46ICdmYWRlSW4nLFxyXG4gICAgICAgICAgICBhbmltYXRlT3V0OiAnZmFkZU91dCcsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmUgOiB7XHJcbiAgICAgICAgICAgICAgMCA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyOiB0cnVlXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICA0ODAgOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgNzY4OntcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvL1NMSURFUlxyXG4gICAgICAkKCcuc2xpZGVyLWhkJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbkl0ZW0gPSB0LmNoaWxkcmVuKCkubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAobkl0ZW0gPiAxKXtcclxuICAgICAgICAgIHQuYWRkQ2xhc3MoJ293bC1jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgdC5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgbmF2VGV4dDogW1wiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1sZWZ0Jz48L3NwYW4+XCIsXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLXJpZ2h0Jz48L3NwYW4+XCJdLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA4MDAwLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAxMjAwLFxyXG4gICAgICAgICAgICBhbmltYXRlSW46ICdmYWRlSW4nLFxyXG4gICAgICAgICAgICBhbmltYXRlT3V0OiAnZmFkZU91dCdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vU0xJREVSXHJcbiAgICAgICQoJy5zbGlkZXItcmVscHJkY3QnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuSXRlbSA9IHQuY2hpbGRyZW4oKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChuSXRlbSA+IDEpe1xyXG4gICAgICAgICAgdC5hZGRDbGFzcygnb3dsLWNhcm91c2VsJyk7XHJcbiAgICAgICAgICB0Lm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgaXRlbXM6IDQsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMzAsXHJcbiAgICAgICAgICAgIGNlbnRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdlRleHQ6IFtcIjxzcGFuIGNsYXNzPSdpY29uLWNoZXZyb24tbGVmdCc+PC9zcGFuPlwiLFwiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1yaWdodCc+PC9zcGFuPlwiXSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogODAwMCxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTIwMCxcclxuICAgICAgICAgICAgYW5pbWF0ZUluOiAnZmFkZUluJyxcclxuICAgICAgICAgICAgYW5pbWF0ZU91dDogJ2ZhZGVPdXQnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgIHZhciBvZCA9ICQoJ2JvZHknKS5maW5kKCcuc2xpZGVyLWhvbWUgLm93bC1kb3QnKTtcclxuICAgICAgb2QuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgcyA9IHQuZmluZCgnc3BhbicpLFxyXG4gICAgICAgICAgICBudW0gPSB0LmluZGV4KCkgKyAxLFxyXG4gICAgICAgICAgICBudXMgPSBudW0udG9TdHJpbmcoKTtcclxuICAgICAgICBpZihvZC5sZW5ndGggPD0gOSl7XHJcbiAgICAgICAgICBzLnRleHQoXCIwXCIrbnVzKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHMudGV4dChudXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL1NMSURFUiBFWFRSQSBTTUFMTFxyXG4gICAgZnVuY3Rpb24gc2xpZGVyWFMoKSB7XHJcbiAgICAgIHZhciBzbGlkZXJTID0gJCgnLnNsaWRlci14cycpO1xyXG4gICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjcpIHtcclxuICAgICAgICBzbGlkZXJTLmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKTtcclxuICAgICAgICBzbGlkZXJTLm93bENhcm91c2VsKHtcclxuICAgICAgICAgIC8vIG5hdlRleHQ6IFtcIjxpIGNsYXNzPSdmYXMgZmEtY2hldnJvbi1sZWZ0Jz48L2k+XCIsXCI8aSBjbGFzcz0nZmFzIGZhLWNoZXZyb24tcmlnaHQnPjwvaT5cIl0sXHJcbiAgICAgICAgICBpdGVtczogMixcclxuICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgcmVzcG9uc2l2ZSA6IHtcclxuICAgICAgICAgICAgMCA6IHtcclxuICAgICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA0ODAgOiB7XHJcbiAgICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNsaWRlclMudHJpZ2dlcignZGVzdHJveS5vd2wuY2Fyb3VzZWwnKS5yZW1vdmVDbGFzcygnb3dsLWNhcm91c2VsIG93bC1sb2FkZWQnKTtcclxuICAgICAgICBzbGlkZXJTLmZpbmQoJy5vd2wtc3RhZ2Utb3V0ZXInKS5jaGlsZHJlbigpLnVud3JhcCgpO1xyXG4gICAgICB9XHJcbiAgICB9c2xpZGVyWFMoKTtcclxuICAgIC8vIEFOSU1BVEUgT04gU0NST0xMXHJcbiAgICBmdW5jdGlvbiBhbmltYXRlU2Nyb2xsKCl7XHJcbiAgICAgICQoJy5hbmltYXRlJykuZWFjaChmdW5jdGlvbihpKXtcclxuICAgICAgICAgIHZhciBib3R0b21fb2Zfb2JqZWN0ID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgKyAxMDtcclxuICAgICAgICAgIHZhciBib3R0b21fb2Zfd2luZG93ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpO1xyXG5cclxuICAgICAgICAgIGlmKCBib3R0b21fb2Zfd2luZG93ID4gYm90dG9tX29mX29iamVjdCApe1xyXG4gICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FuaW1hdGUtaW4nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJChcIiNtb2RhbFNlYXJjaFwiKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnYmFja2Ryb3Atd2hpdGUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjbW9kYWxTZWFyY2hcIikub24oJ2hpZGUuYnMubW9kYWwnLCBmdW5jdGlvbigpe1xyXG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JhY2tkcm9wLXdoaXRlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL0NhbGN1bGF0b3JcclxuICAgICQoJy5idG4tbnVtYmVyJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXJcclxuICAgICAgICAgICAgZmllbGROYW1lID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpZWxkJyksXHJcbiAgICAgICAgICAgIHR5cGUgICAgICA9ICQodGhpcykuYXR0cignZGF0YS10eXBlJyksXHJcbiAgICAgICAgICAgIGlucHV0ID0gJChcImlucHV0W25hbWU9J1wiK2ZpZWxkTmFtZStcIiddXCIpLFxyXG4gICAgICAgICAgICBjdXJyZW50VmFsID0gcGFyc2VJbnQoaW5wdXQudmFsKCkpO1xyXG4gICAgICAgIGlmICghaXNOYU4oY3VycmVudFZhbCkpIHtcclxuICAgICAgICAgICAgaWYodHlwZSA9PSAnbWludXMnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFZhbCA+IGlucHV0LmF0dHIoJ21pbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsKGN1cnJlbnRWYWwgLSAxKS5jaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KGlucHV0LnZhbCgpKSA9PSBpbnB1dC5hdHRyKCdtaW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0eXBlID09ICdwbHVzJykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRWYWwgPCBpbnB1dC5hdHRyKCdtYXgnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbChjdXJyZW50VmFsICsgMSkuY2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihwYXJzZUludChpbnB1dC52YWwoKSkgPT0gaW5wdXQuYXR0cignbWF4JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsKDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJCgnLmlucHV0LW51bWJlcicpLmNoYW5nZShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIG1pblZhbHVlID0gIHBhcnNlSW50KCQodGhpcykuYXR0cignbWluJykpLFxyXG4gICAgICAgIG1heFZhbHVlID0gIHBhcnNlSW50KCQodGhpcykuYXR0cignbWF4JykpLFxyXG4gICAgICAgIHZhbHVlQ3VycmVudCA9IHBhcnNlSW50KCQodGhpcykudmFsKCkpO1xyXG5cclxuICAgICAgICB2YXIgbmFtZSA9ICQodGhpcykuYXR0cignbmFtZScpO1xyXG4gICAgICAgIGlmKHZhbHVlQ3VycmVudCA+PSBtaW5WYWx1ZSkge1xyXG4gICAgICAgICAgICAkKFwiLmJ0bi1udW1iZXJbZGF0YS10eXBlPSdtaW51cyddW2RhdGEtZmllbGQ9J1wiK25hbWUrXCInXVwiKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1NvcnJ5LCB0aGUgbWluaW11bSB2YWx1ZSB3YXMgcmVhY2hlZCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnZhbCgkKHRoaXMpLmRhdGEoJ29sZFZhbHVlJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih2YWx1ZUN1cnJlbnQgPD0gbWF4VmFsdWUpIHtcclxuICAgICAgICAgICAgJChcIi5idG4tbnVtYmVyW2RhdGEtdHlwZT0ncGx1cyddW2RhdGEtZmllbGQ9J1wiK25hbWUrXCInXVwiKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1NvcnJ5LCB0aGUgbWF4aW11bSB2YWx1ZSB3YXMgcmVhY2hlZCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnZhbCgkKHRoaXMpLmRhdGEoJ29sZFZhbHVlJykpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vICQoXCIudHlwZVwiKS5rZXlkb3duKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyAgICAgLy8gQWxsb3c6IGJhY2tzcGFjZSwgZGVsZXRlLCB0YWIsIGVzY2FwZSwgZW50ZXIgYW5kIC5cclxuICAgIC8vICAgICBpZiAoJC5pbkFycmF5KGUua2V5Q29kZSwgWzQ2LCA4LCA5LCAyNywgMTMsIDE5MF0pICE9PSAtMSB8fFxyXG4gICAgLy8gICAgICAgICAgLy8gQWxsb3c6IEN0cmwrQVxyXG4gICAgLy8gICAgICAgICAoZS5rZXlDb2RlID09IDY1ICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHxcclxuICAgIC8vICAgICAgICAgIC8vIEFsbG93OiBob21lLCBlbmQsIGxlZnQsIHJpZ2h0XHJcbiAgICAvLyAgICAgICAgIChlLmtleUNvZGUgPj0gMzUgJiYgZS5rZXlDb2RlIDw9IDM5KSkge1xyXG4gICAgLy8gICAgICAgICAgICAgIC8vIGxldCBpdCBoYXBwZW4sIGRvbid0IGRvIGFueXRoaW5nXHJcbiAgICAvLyAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyBFbnN1cmUgdGhhdCBpdCBpcyBhIG51bWJlciBhbmQgc3RvcCB0aGUga2V5cHJlc3NcclxuICAgIC8vICAgICBpZiAoKGUuc2hpZnRLZXkgfHwgKGUua2V5Q29kZSA8IDQ4IHx8IGUua2V5Q29kZSA+IDU3KSkgJiYgKGUua2V5Q29kZSA8IDk2IHx8IGUua2V5Q29kZSA+IDEwNSkpIHtcclxuICAgIC8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGluaXQoKTtcclxuICAgICAgICBhbmltYXRlU2Nyb2xsKCk7XHJcbiAgICB9KVxyXG5cclxuXHJcbn0pKCk7Il0sImZpbGUiOiJtYWluLmpzIn0=

//# sourceMappingURL=main.js.map
