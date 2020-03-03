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
            animateOut: 'fadeOut'
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
            animateOut: 'fadeOut'
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
            animateOut: 'fadeOut'
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

    $(document).ready(function() {
        init();
        console.log('jalan')
    })

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgZnVuY3Rpb24gdG9Tdmcob2JqKXtcbiAgICAgICAgdmFyICRpbWcgPSBvYmo7XG4gICAgICAgIHZhciBpbWdJRCA9ICRpbWcuYXR0cignaWQnKTtcbiAgICAgICAgdmFyIGltZ0NsYXNzID0gJGltZy5hdHRyKCdjbGFzcycpO1xuICAgICAgICB2YXIgaW1nVVJMID0gJGltZy5hdHRyKCdzcmMnKTtcblxuICAgICAgICBqUXVlcnkuZ2V0KGltZ1VSTCwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIC8vIEdldCB0aGUgU1ZHIHRhZywgaWdub3JlIHRoZSByZXN0XG4gICAgICAgICAgdmFyICRzdmcgPSBqUXVlcnkoZGF0YSkuZmluZCgnc3ZnJyk7XG5cbiAgICAgICAgICAvLyBBZGQgcmVwbGFjZWQgaW1hZ2UncyBJRCB0byB0aGUgbmV3IFNWR1xuICAgICAgICAgIGlmICh0eXBlb2YgaW1nSUQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAkc3ZnID0gJHN2Zy5hdHRyKCdpZCcsIGltZ0lEKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQWRkIHJlcGxhY2VkIGltYWdlJ3MgY2xhc3NlcyB0byB0aGUgbmV3IFNWR1xuICAgICAgICAgIGlmICh0eXBlb2YgaW1nQ2xhc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAkc3ZnID0gJHN2Zy5hdHRyKCdjbGFzcycsIGltZ0NsYXNzICsgJyByZXBsYWNlZC1zdmcnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZW1vdmUgYW55IGludmFsaWQgWE1MIHRhZ3MgYXMgcGVyIGh0dHA6Ly92YWxpZGF0b3IudzMub3JnXG4gICAgICAgICAgJHN2ZyA9ICRzdmcucmVtb3ZlQXR0cigneG1sbnM6YScpO1xuXG4gICAgICAgICAgLy8gUmVwbGFjZSBpbWFnZSB3aXRoIG5ldyBTVkdcbiAgICAgICAgICAkaW1nLnJlcGxhY2VXaXRoKCRzdmcpO1xuXG4gICAgICAgIH0sICd4bWwnKTtcbiAgICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGpRdWVyeSgnaW1nLnN2ZycpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICB0b1N2ZygkKHRoaXMpKTtcblxuICAgIH0pO1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaCA9PSAnI189XycpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5oaXN0b3J5ICYmIGhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoXCJcIiwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJCgnLnNlbGVjdCcpLnNlbGVjdHBpY2tlcih7XG4gICAgICAgIHN0eWxlOiAnc2VsZWN0LWNvbnRyb2wnLFxuICAgICAgICBzaXplOiA0XG4gICAgfSk7XG4gICAgc2V0VGltZW91dChmdW5jLCA1MDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZ1bmMoKSB7XG4gICAgICAgIHZhciBjdD0wO1xuICAgICAgICB2YXIgaGVhZGVyID0gJCgnaGVhZGVyJyk7XG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgJCgnaGVhZGVyJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHZhciB0b3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgaCA9ICQod2luZG93KS5oZWlnaHQoKSxcbiAgICAgICAgICAgICAgICBoYWxmID0gaC8yLFxuICAgICAgICAgICAgICAgIGhlYWRlciA9ICQoJ2hlYWRlcicpO1xuXG4gICAgICAgICAgICAgICAgaWYodG9wID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIC8vJCgnbWFpbicpLmNzcygncGFkZGluZy10b3AnLGhoKTtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKCdmaXhlZCcpO1xuXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIC8vJCgnbWFpbicpLmNzcygncGFkZGluZy10b3AnLDApO1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoJ2ZpeGVkJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY3Q+IHRvcCl7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcygnc3RpY2t5Jyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5yZW1vdmVDbGFzcygnc3RpY2t5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0ID0gdG9wO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDApe1xuICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICB9XG4gICAgICAgICQoJy5idXJnZXItaWNvbicpLnVuYmluZCgnY2xpY2snKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdtZW51LW9wZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsJy5oZWFkZXJfYmcnLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21lbnUtb3BlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL1NMSURFUlxuICAgICQoJy5zbGlkZXInKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB0ID0gJCh0aGlzKSxcbiAgICAgICAgICAgIG5JdGVtID0gdC5jaGlsZHJlbigpLmxlbmd0aDtcblxuICAgICAgICBpZiAobkl0ZW0gPiAxKXtcbiAgICAgICAgICB0LmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKTtcbiAgICAgICAgICB0Lm93bENhcm91c2VsKHtcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICAgICAgbWFyZ2luOiAyNCxcbiAgICAgICAgICAgIGNlbnRlcjogdHJ1ZSxcbiAgICAgICAgICAgIG5hdlRleHQ6IFtcIjxzcGFuIGNsYXNzPSdpY29uLWNoZXZyb24tbGVmdCc+PC9zcGFuPlwiLFwiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1yaWdodCc+PC9zcGFuPlwiXSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogODAwMCxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDEyMDAsXG4gICAgICAgICAgICBhbmltYXRlSW46ICdmYWRlSW4nLFxuICAgICAgICAgICAgYW5pbWF0ZU91dDogJ2ZhZGVPdXQnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vU0xJREVSXG4gICAgICAkKCcuc2xpZGVyLWhwcmRjdCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHQgPSAkKHRoaXMpLFxuICAgICAgICAgICAgbkl0ZW0gPSB0LmNoaWxkcmVuKCkubGVuZ3RoO1xuXG4gICAgICAgIGlmIChuSXRlbSA+IDEpe1xuICAgICAgICAgIHQuYWRkQ2xhc3MoJ293bC1jYXJvdXNlbCcpO1xuICAgICAgICAgIHQub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgaXRlbXM6IDUsXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgICAvLyBtYXJnaW46IDM1LFxuICAgICAgICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgICAgICAgYXV0b1dpZHRoOiB0cnVlLFxuICAgICAgICAgICAgbmF2VGV4dDogW1wiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1sZWZ0Jz48L3NwYW4+XCIsXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLXJpZ2h0Jz48L3NwYW4+XCJdLFxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA4MDAwLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTIwMCxcbiAgICAgICAgICAgIGFuaW1hdGVJbjogJ2ZhZGVJbicsXG4gICAgICAgICAgICBhbmltYXRlT3V0OiAnZmFkZU91dCdcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy9TTElERVJcbiAgICAgICQoJy5zbGlkZXItdHAnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB0ID0gJCh0aGlzKSxcbiAgICAgICAgICAgIG5JdGVtID0gdC5jaGlsZHJlbigpLmxlbmd0aDtcblxuICAgICAgICBpZiAobkl0ZW0gPiAxKXtcbiAgICAgICAgICB0LmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKTtcbiAgICAgICAgICB0Lm93bENhcm91c2VsKHtcbiAgICAgICAgICAgIGl0ZW1zOiA0LFxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgICAgbWFyZ2luOiAzNSxcbiAgICAgICAgICAgIGNlbnRlcjogZmFsc2UsXG4gICAgICAgICAgICBuYXZUZXh0OiBbXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLWxlZnQnPjwvc3Bhbj5cIixcIjxzcGFuIGNsYXNzPSdpY29uLWNoZXZyb24tcmlnaHQnPjwvc3Bhbj5cIl0sXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDgwMDAsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAxMjAwLFxuICAgICAgICAgICAgYW5pbWF0ZUluOiAnZmFkZUluJyxcbiAgICAgICAgICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0J1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvL1NMSURFUlxuICAgICAgJCgnLnNsaWRlci1icCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHQgPSAkKHRoaXMpLFxuICAgICAgICAgICAgbkl0ZW0gPSB0LmNoaWxkcmVuKCkubGVuZ3RoO1xuXG4gICAgICAgIGlmIChuSXRlbSA+IDEpe1xuICAgICAgICAgIHQuYWRkQ2xhc3MoJ293bC1jYXJvdXNlbCcpO1xuICAgICAgICAgIHQub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgaXRlbXM6IDUsXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICAgICAgbWFyZ2luOiAzNSxcbiAgICAgICAgICAgIGNlbnRlcjogZmFsc2UsXG4gICAgICAgICAgICBuYXZUZXh0OiBbXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLWxlZnQnPjwvc3Bhbj5cIixcIjxzcGFuIGNsYXNzPSdpY29uLWNoZXZyb24tcmlnaHQnPjwvc3Bhbj5cIl0sXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDgwMDAsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAxMjAwLFxuICAgICAgICAgICAgYW5pbWF0ZUluOiAnZmFkZUluJyxcbiAgICAgICAgICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0J1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAgLy9TTElERVJcbiAgICAgICAkKCcuc2xpZGVyLWxuJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdCA9ICQodGhpcyksXG4gICAgICAgICAgICBuSXRlbSA9IHQuY2hpbGRyZW4oKS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKG5JdGVtID4gMSl7XG4gICAgICAgICAgdC5hZGRDbGFzcygnb3dsLWNhcm91c2VsJyk7XG4gICAgICAgICAgdC5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICBpdGVtczogMixcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgICAgIG1hcmdpbjogMzUsXG4gICAgICAgICAgICBjZW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgbmF2VGV4dDogW1wiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1sZWZ0Jz48L3NwYW4+XCIsXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLXJpZ2h0Jz48L3NwYW4+XCJdLFxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA4MDAwLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTIwMCxcbiAgICAgICAgICAgIGFuaW1hdGVJbjogJ2ZhZGVJbicsXG4gICAgICAgICAgICBhbmltYXRlT3V0OiAnZmFkZU91dCdcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy9TTElERVJcbiAgICAgICQoJy5zbGlkZXItaGQnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB0ID0gJCh0aGlzKSxcbiAgICAgICAgICAgIG5JdGVtID0gdC5jaGlsZHJlbigpLmxlbmd0aDtcblxuICAgICAgICBpZiAobkl0ZW0gPiAxKXtcbiAgICAgICAgICB0LmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKTtcbiAgICAgICAgICB0Lm93bENhcm91c2VsKHtcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgICAgICAgbmF2VGV4dDogW1wiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1sZWZ0Jz48L3NwYW4+XCIsXCI8c3BhbiBjbGFzcz0naWNvbi1jaGV2cm9uLXJpZ2h0Jz48L3NwYW4+XCJdLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDgwMDAsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAxMjAwLFxuICAgICAgICAgICAgYW5pbWF0ZUluOiAnZmFkZUluJyxcbiAgICAgICAgICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0J1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvL1NMSURFUlxuICAgICAgJCgnLnNsaWRlci1yZWxwcmRjdCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHQgPSAkKHRoaXMpLFxuICAgICAgICAgICAgbkl0ZW0gPSB0LmNoaWxkcmVuKCkubGVuZ3RoO1xuXG4gICAgICAgIGlmIChuSXRlbSA+IDEpe1xuICAgICAgICAgIHQuYWRkQ2xhc3MoJ293bC1jYXJvdXNlbCcpO1xuICAgICAgICAgIHQub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgaXRlbXM6IDQsXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgICBtYXJnaW46IDMwLFxuICAgICAgICAgICAgY2VudGVyOiBmYWxzZSxcbiAgICAgICAgICAgIG5hdlRleHQ6IFtcIjxzcGFuIGNsYXNzPSdpY29uLWNoZXZyb24tbGVmdCc+PC9zcGFuPlwiLFwiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1yaWdodCc+PC9zcGFuPlwiXSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA4MDAwLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTIwMCxcbiAgICAgICAgICAgIGFuaW1hdGVJbjogJ2ZhZGVJbicsXG4gICAgICAgICAgICBhbmltYXRlT3V0OiAnZmFkZU91dCdcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KTtcblxuXG5cbiAgICAgIHZhciBvZCA9ICQoJ2JvZHknKS5maW5kKCcuc2xpZGVyLWhvbWUgLm93bC1kb3QnKTtcbiAgICAgIG9kLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHQgPSAkKHRoaXMpLFxuICAgICAgICAgICAgcyA9IHQuZmluZCgnc3BhbicpLFxuICAgICAgICAgICAgbnVtID0gdC5pbmRleCgpICsgMSxcbiAgICAgICAgICAgIG51cyA9IG51bS50b1N0cmluZygpO1xuICAgICAgICBpZihvZC5sZW5ndGggPD0gOSl7XG4gICAgICAgICAgcy50ZXh0KFwiMFwiK251cyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHMudGV4dChudXMpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICBpbml0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdqYWxhbicpXG4gICAgfSlcblxufSkoKTsiXSwiZmlsZSI6Im1haW4uanMifQ==

//# sourceMappingURL=main.js.map
