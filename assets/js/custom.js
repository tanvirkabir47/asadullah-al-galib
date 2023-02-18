(function($) {
$(document).ready(function(){
    //sticky header
    $(window).on('scroll',function(){
        let scroll = $(window).scrollTop();
        if(scroll > 0){
            $(".header-section").addClass('sticky-menu');
        }else{
            $(".header-section").removeClass('sticky-menu');
        }
    });

    //activity slider
    $('.activity-cont-wrapper').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        loop:true,
        margin:30,
        autoplay: false,
        responsiveClass:true,
        nav:true,
        dots:false,
        mouseDrag:true,
        touchDrag: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });
    $( ".owl-prev").html('<span style="margin-right: 15px;"><i class="fa fa-long-arrow-left"></i></span>');
    $( ".owl-next").html('<span><i class="fa fa-long-arrow-right"></i></span>');

    //WoW js activation
    //new WOW().init();

    //responsive slick nav menu activation
    /*$('#nav').slicknav({
        prependTo:'.responsive-mobile-menu',
    });*/

    // magnific popup activation
    $('.play-video').magnificPopup({
		type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%'
                },
            },
            srcAction: 'iframe_src',
        },
    });

    //back to top show when scroll
    $(".back_to_top i.fa").css("display", "none");
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
            $(".back_to_top i.fa").css("display", "none");
        } else {
            $(".back_to_top i.fa").css("display", "block");
        }
    });
    $(".back_to_top i.fa").on("click",function () {
        $("html").animate({
            scrollTop: 0
        }, 800);
    });

    /**
     * mobile navigation start
     */
    $('i.fa-bars').on('click', function(){
        $('.main-navigation-mobile').css('left', '0');
    })
    $('span.close').on('click', function(){
        $('.main-navigation-mobile').css('left', '-100%');
    })

});
})( jQuery );