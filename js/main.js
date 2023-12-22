$(function () {

    $('.menu__open').on('click', function () {
        $('.menu__box').addClass('menu__box--active');
    });

    $('.menu__close').on('click', function () {
        $('.menu__box').removeClass('menu__box--active');
    });

    $('.menu__open').on('click', function () {
        $('.wrapper').addClass('wrapper__fixed');
    });

    $('.menu__close').on('click', function () {
        $('.wrapper').removeClass('wrapper__fixed');
    });

    $('.events__list').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-prev.svg" width="48" height="48" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-next.svg" width="48" height="48" alt=""></button>',
        slidesToShow: 3,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });


    $('.choose__list').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-prev.svg" width="48" height="48" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-next.svg" width="48" height="48" alt=""></button>',
        slidesToShow: 3,
        dots: false,
        arrows: true,
    });
    $('.portfolio__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-prev.svg" width="48" height="48" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-next.svg" width="48" height="48" alt=""></button>',
        slidesToShow: 1,
        dots: false,
        arrows: true,
    });

});