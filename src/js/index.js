$(document).ready(function () {
    
    // responsive menu
    $('#menu-icon').on('click', function() {
        $('.main-navigation').animate({
            left: '0px'
        }, 250);

        $('body').animate({
            left: '270px'
        }, 250);
    });

    $('.main-navigation_close').on('click', function() {
        $('.main-navigation').animate({
            left: '-270px'
        }, 250);

        $('body').animate({
            left: '0px'
        }, 250);
    });


    // masonry init
    var isoOptions = {
      itemSelector: '.products__item',
      resizable: true, 
      masonry: {
          gutter: 20
      }
    };

    function masonry() {
        if ($(window).width() < 680) {
            $('.products__wrapper').isotope('destroy');
        } else {
            $('.products__wrapper').isotope(isoOptions);
        }
    }
    masonry();

    $(window).resize(masonry);
    
    // WOW init
    var wow = new WOW({
        mobile: false
    });

    wow.init();
});