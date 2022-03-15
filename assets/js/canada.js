$(document).ready(function () {

/****************************************************/
/********************** HEADER **********************/
/****************************************************/

    // BLOCK SCROLL
    $(document).scroll(function (event) {
        var scrollTop = $(document).scrollTop();
        if (scrollTop <= 156) {
            $('.container-menu-footer').removeClass('scroll-active');
        } else {
            $('.container-menu-footer').addClass('scroll-active');
        }
    });

    // BLOCK MENU FOOTER (es del header solo que en la parte baja del menu)
    $('.btn-menu').click(function() {
        openMenuFooter();
    });
    $('.fondo-menu-footer, .close-menu > i').click(function() {
        closeMenuFooter();
    });
        // Submenu
        $('.title-menu-mobile').click(function() {
            $(this).siblings('.container-submenu').addClass('cat-active');
            $('.container-menu-footer').addClass('cat-active');
        });
        $('.atras-submenu').click(function() {
            $(this).parents('.container-submenu').removeClass('cat-active');
            $(this).parents('.container-menu-footer').removeClass('cat-active');
        });


    // BLOCK COMUNICACION
    jQuery('.info-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: false,
        prevArrow: $('.prev-comu'),
        nextArrow: $('.next-comu'),
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode:false,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });

    jQuery('.content-slider-info').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode:false,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 4
                }
            }
        ]
    });


    // BLOCK GOLDEN
    jQuery('.slider-socios-golden').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        prevArrow: $('.prev-golden'),
        nextArrow: $('.next-golden'),
        responsive: [{
                breakpoint: 576,
                settings: {
                    // arrows: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    // arrows: true,
                    centerPadding: '0px',
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    // arrows: true,
                    centerPadding: '0px',
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    // arrows: true,
                    centerPadding: '0px',
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // BLOCK EVENTOS
    jQuery('.content-cards').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode:false,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 4
                }
            }
        ]
    });


    // BLOCK PREMIUM
    jQuery('.slider-socios-premium').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        prevArrow: $('.prev-premium'),
        nextArrow: $('.next-premium'),
        responsive: [{
                breakpoint: 576,
                settings: {
                    // arrows: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    // arrows: true,
                    centerPadding: '0px',
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    // arrows: true,
                    centerPadding: '0px',
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    // arrows: true,
                    centerPadding: '0px',
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });

});


function openMenuFooter() {
    $('.container-menu-footer').addClass("menu-active");
    $('.fondo-menu-footer').addClass("menu-active");
    $('body').addClass("oveflow-hidden");
}
function closeMenuFooter() {
    $('.container-menu-footer').removeClass("menu-active");
    $('.fondo-menu-footer').removeClass("menu-active");
    $('body').removeClass("oveflow-hidden");

    // submenu
    $('.container-submenu').removeClass('cat-active');
    $('.container-menu-footer').removeClass('cat-active');
}