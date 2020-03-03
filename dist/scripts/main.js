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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGZ1bmN0aW9uIHRvU3ZnKG9iail7XHJcbiAgICAgICAgdmFyICRpbWcgPSBvYmo7XHJcbiAgICAgICAgdmFyIGltZ0lEID0gJGltZy5hdHRyKCdpZCcpO1xyXG4gICAgICAgIHZhciBpbWdDbGFzcyA9ICRpbWcuYXR0cignY2xhc3MnKTtcclxuICAgICAgICB2YXIgaW1nVVJMID0gJGltZy5hdHRyKCdzcmMnKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5LmdldChpbWdVUkwsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgIC8vIEdldCB0aGUgU1ZHIHRhZywgaWdub3JlIHRoZSByZXN0XHJcbiAgICAgICAgICB2YXIgJHN2ZyA9IGpRdWVyeShkYXRhKS5maW5kKCdzdmcnKTtcclxuXHJcbiAgICAgICAgICAvLyBBZGQgcmVwbGFjZWQgaW1hZ2UncyBJRCB0byB0aGUgbmV3IFNWR1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBpbWdJRCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgJHN2ZyA9ICRzdmcuYXR0cignaWQnLCBpbWdJRCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBBZGQgcmVwbGFjZWQgaW1hZ2UncyBjbGFzc2VzIHRvIHRoZSBuZXcgU1ZHXHJcbiAgICAgICAgICBpZiAodHlwZW9mIGltZ0NsYXNzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAkc3ZnID0gJHN2Zy5hdHRyKCdjbGFzcycsIGltZ0NsYXNzICsgJyByZXBsYWNlZC1zdmcnKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBSZW1vdmUgYW55IGludmFsaWQgWE1MIHRhZ3MgYXMgcGVyIGh0dHA6Ly92YWxpZGF0b3IudzMub3JnXHJcbiAgICAgICAgICAkc3ZnID0gJHN2Zy5yZW1vdmVBdHRyKCd4bWxuczphJyk7XHJcblxyXG4gICAgICAgICAgLy8gUmVwbGFjZSBpbWFnZSB3aXRoIG5ldyBTVkdcclxuICAgICAgICAgICRpbWcucmVwbGFjZVdpdGgoJHN2Zyk7XHJcblxyXG4gICAgICAgIH0sICd4bWwnKTtcclxuICAgICAgfVxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGpRdWVyeSgnaW1nLnN2ZycpLmVhY2goZnVuY3Rpb24oaSkge1xyXG4gICAgICAgIHRvU3ZnKCQodGhpcykpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoID09ICcjXz1fJykge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaGlzdG9yeSAmJiBoaXN0b3J5LnB1c2hTdGF0ZSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoXCJcIiwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJCgnLnNlbGVjdCcpLnNlbGVjdHBpY2tlcih7XHJcbiAgICAgICAgc3R5bGU6ICdzZWxlY3QtY29udHJvbCcsXHJcbiAgICAgICAgc2l6ZTogNFxyXG4gICAgfSk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmMsIDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZnVuYygpIHtcclxuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3JlYWR5JylcclxuICAgICAgICB2YXIgY3Q9MDtcclxuICAgICAgICB2YXIgaGVhZGVyID0gJCgnaGVhZGVyJyk7XHJcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgJCgnaGVhZGVyJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcclxuICAgICAgICAgICAgICAgIGggPSAkKHdpbmRvdykuaGVpZ2h0KCksXHJcbiAgICAgICAgICAgICAgICBoYWxmID0gaC8yLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyID0gJCgnaGVhZGVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodG9wID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8kKCdtYWluJykuY3NzKCdwYWRkaW5nLXRvcCcsaGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcygnZml4ZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyQoJ21haW4nKS5jc3MoJ3BhZGRpbmctdG9wJywwKTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoJ2ZpeGVkJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGN0PiB0b3Ape1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcygnc3RpY2t5Jyk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoJ3N0aWNreScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3QgPSB0b3A7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhbmltYXRlU2Nyb2xsKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAwKXtcclxuICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcuYnVyZ2VyLWljb24nKS51bmJpbmQoJ2NsaWNrJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdtZW51LW9wZW4nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsJy5oZWFkZXJfYmcnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbWVudS1vcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vU0xJREVSXHJcbiAgICAkKCcuc2xpZGVyJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbkl0ZW0gPSB0LmNoaWxkcmVuKCkubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAobkl0ZW0gPiAxKXtcclxuICAgICAgICAgIHQuYWRkQ2xhc3MoJ293bC1jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgdC5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgICAgICBtYXJnaW46IDI0LFxyXG4gICAgICAgICAgICBjZW50ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIG5hdlRleHQ6IFtcIjxzcGFuIGNsYXNzPSdpY29uLWNoZXZyb24tbGVmdCc+PC9zcGFuPlwiLFwiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1yaWdodCc+PC9zcGFuPlwiXSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDgwMDAsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDEyMDAsXHJcbiAgICAgICAgICAgIGFuaW1hdGVJbjogJ2ZhZGVJbicsXHJcbiAgICAgICAgICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy9TTElERVJcclxuICAgICAgJCgnLnNsaWRlci1ocHJkY3QnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuSXRlbSA9IHQuY2hpbGRyZW4oKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChuSXRlbSA+IDEpe1xyXG4gICAgICAgICAgdC5hZGRDbGFzcygnb3dsLWNhcm91c2VsJyk7XHJcbiAgICAgICAgICB0Lm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgaXRlbXM6IDUsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIG1hcmdpbjogMzUsXHJcbiAgICAgICAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b1dpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICBuYXZUZXh0OiBbXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLWxlZnQnPjwvc3Bhbj5cIixcIjxzcGFuIGNsYXNzPSdpY29uLWNoZXZyb24tcmlnaHQnPjwvc3Bhbj5cIl0sXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA4MDAwLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAxMjAwLFxyXG4gICAgICAgICAgICBhbmltYXRlSW46ICdmYWRlSW4nLFxyXG4gICAgICAgICAgICBhbmltYXRlT3V0OiAnZmFkZU91dCdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vU0xJREVSXHJcbiAgICAgICQoJy5zbGlkZXItdHAnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBuSXRlbSA9IHQuY2hpbGRyZW4oKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChuSXRlbSA+IDEpe1xyXG4gICAgICAgICAgdC5hZGRDbGFzcygnb3dsLWNhcm91c2VsJyk7XHJcbiAgICAgICAgICB0Lm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgaXRlbXM6IDQsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMzUsXHJcbiAgICAgICAgICAgIGNlbnRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdlRleHQ6IFtcIjxzcGFuIGNsYXNzPSdpY29uLWNoZXZyb24tbGVmdCc+PC9zcGFuPlwiLFwiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1yaWdodCc+PC9zcGFuPlwiXSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDgwMDAsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDEyMDAsXHJcbiAgICAgICAgICAgIGFuaW1hdGVJbjogJ2ZhZGVJbicsXHJcbiAgICAgICAgICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0JyxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZSA6IHtcclxuICAgICAgICAgICAgICAwIDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXI6IHRydWVcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIDQ4MCA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICA3Njg6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDQsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvL1NMSURFUlxyXG4gICAgICAkKCcuc2xpZGVyLWJwJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbkl0ZW0gPSB0LmNoaWxkcmVuKCkubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAobkl0ZW0gPiAxKXtcclxuICAgICAgICAgIHQuYWRkQ2xhc3MoJ293bC1jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgdC5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA1LFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICAgICAgbWFyZ2luOiAzNSxcclxuICAgICAgICAgICAgY2VudGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2VGV4dDogW1wiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1sZWZ0Jz48L3NwYW4+XCIsXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLXJpZ2h0Jz48L3NwYW4+XCJdLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogODAwMCxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTIwMCxcclxuICAgICAgICAgICAgYW5pbWF0ZUluOiAnZmFkZUluJyxcclxuICAgICAgICAgICAgYW5pbWF0ZU91dDogJ2ZhZGVPdXQnLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlIDoge1xyXG4gICAgICAgICAgICAgIDAgOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIDQ4MCA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICA3Njg6e1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICAvL1NMSURFUlxyXG4gICAgICAgJCgnLnNsaWRlci1sbicpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5JdGVtID0gdC5jaGlsZHJlbigpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKG5JdGVtID4gMSl7XHJcbiAgICAgICAgICB0LmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKTtcclxuICAgICAgICAgIHQub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBpdGVtczogMixcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICAgICAgbWFyZ2luOiAzNSxcclxuICAgICAgICAgICAgY2VudGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2VGV4dDogW1wiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1sZWZ0Jz48L3NwYW4+XCIsXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLXJpZ2h0Jz48L3NwYW4+XCJdLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogODAwMCxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTIwMCxcclxuICAgICAgICAgICAgYW5pbWF0ZUluOiAnZmFkZUluJyxcclxuICAgICAgICAgICAgYW5pbWF0ZU91dDogJ2ZhZGVPdXQnLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlIDoge1xyXG4gICAgICAgICAgICAgIDAgOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogdHJ1ZVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgNDgwIDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIDc2ODp7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy9TTElERVJcclxuICAgICAgJCgnLnNsaWRlci1oZCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG5JdGVtID0gdC5jaGlsZHJlbigpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKG5JdGVtID4gMSl7XHJcbiAgICAgICAgICB0LmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKTtcclxuICAgICAgICAgIHQub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICBjZW50ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIG5hdlRleHQ6IFtcIjxzcGFuIGNsYXNzPSdpY29uLWNoZXZyb24tbGVmdCc+PC9zcGFuPlwiLFwiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1yaWdodCc+PC9zcGFuPlwiXSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogODAwMCxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTIwMCxcclxuICAgICAgICAgICAgYW5pbWF0ZUluOiAnZmFkZUluJyxcclxuICAgICAgICAgICAgYW5pbWF0ZU91dDogJ2ZhZGVPdXQnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvL1NMSURFUlxyXG4gICAgICAkKCcuc2xpZGVyLXJlbHByZGN0JykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgbkl0ZW0gPSB0LmNoaWxkcmVuKCkubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAobkl0ZW0gPiAxKXtcclxuICAgICAgICAgIHQuYWRkQ2xhc3MoJ293bC1jYXJvdXNlbCcpO1xyXG4gICAgICAgICAgdC5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0LFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgICAgICBtYXJnaW46IDMwLFxyXG4gICAgICAgICAgICBjZW50ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXZUZXh0OiBbXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLWxlZnQnPjwvc3Bhbj5cIixcIjxzcGFuIGNsYXNzPSdpY29uLWNoZXZyb24tcmlnaHQnPjwvc3Bhbj5cIl0sXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDgwMDAsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDEyMDAsXHJcbiAgICAgICAgICAgIGFuaW1hdGVJbjogJ2ZhZGVJbicsXHJcbiAgICAgICAgICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0J1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICB2YXIgb2QgPSAkKCdib2R5JykuZmluZCgnLnNsaWRlci1ob21lIC5vd2wtZG90Jyk7XHJcbiAgICAgIG9kLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIHMgPSB0LmZpbmQoJ3NwYW4nKSxcclxuICAgICAgICAgICAgbnVtID0gdC5pbmRleCgpICsgMSxcclxuICAgICAgICAgICAgbnVzID0gbnVtLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYob2QubGVuZ3RoIDw9IDkpe1xyXG4gICAgICAgICAgcy50ZXh0KFwiMFwiK251cyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBzLnRleHQobnVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9TTElERVIgRVhUUkEgU01BTExcclxuICAgIGZ1bmN0aW9uIHNsaWRlclhTKCkge1xyXG4gICAgICB2YXIgc2xpZGVyUyA9ICQoJy5zbGlkZXIteHMnKTtcclxuICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNzY3KSB7XHJcbiAgICAgICAgc2xpZGVyUy5hZGRDbGFzcygnb3dsLWNhcm91c2VsJyk7XHJcbiAgICAgICAgc2xpZGVyUy5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAvLyBuYXZUZXh0OiBbXCI8aSBjbGFzcz0nZmFzIGZhLWNoZXZyb24tbGVmdCc+PC9pPlwiLFwiPGkgY2xhc3M9J2ZhcyBmYS1jaGV2cm9uLXJpZ2h0Jz48L2k+XCJdLFxyXG4gICAgICAgICAgaXRlbXM6IDIsXHJcbiAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgIHJlc3BvbnNpdmUgOiB7XHJcbiAgICAgICAgICAgIDAgOiB7XHJcbiAgICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNDgwIDoge1xyXG4gICAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzbGlkZXJTLnRyaWdnZXIoJ2Rlc3Ryb3kub3dsLmNhcm91c2VsJykucmVtb3ZlQ2xhc3MoJ293bC1jYXJvdXNlbCBvd2wtbG9hZGVkJyk7XHJcbiAgICAgICAgc2xpZGVyUy5maW5kKCcub3dsLXN0YWdlLW91dGVyJykuY2hpbGRyZW4oKS51bndyYXAoKTtcclxuICAgICAgfVxyXG4gICAgfXNsaWRlclhTKCk7XHJcbiAgICAvLyBBTklNQVRFIE9OIFNDUk9MTFxyXG4gICAgZnVuY3Rpb24gYW5pbWF0ZVNjcm9sbCgpe1xyXG4gICAgICAkKCcuYW5pbWF0ZScpLmVhY2goZnVuY3Rpb24oaSl7XHJcbiAgICAgICAgICB2YXIgYm90dG9tX29mX29iamVjdCA9ICQodGhpcykub2Zmc2V0KCkudG9wICsgMTA7XHJcbiAgICAgICAgICB2YXIgYm90dG9tX29mX3dpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICBpZiggYm90dG9tX29mX3dpbmRvdyA+IGJvdHRvbV9vZl9vYmplY3QgKXtcclxuICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhbmltYXRlLWluJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGluaXQoKTtcclxuICAgICAgICBhbmltYXRlU2Nyb2xsKCk7XHJcbiAgICB9KVxyXG5cclxuXHJcbn0pKCk7Il0sImZpbGUiOiJtYWluLmpzIn0=

//# sourceMappingURL=main.js.map
