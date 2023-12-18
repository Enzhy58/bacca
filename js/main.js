$(function () {
    $('.events__list, .choose__list').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-prev.svg" width="48" height="48" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-next.svg" width="48" height="48" alt=""></button>',
        slidesToShow: 3,
        dots: false,
        arrows: true,
    });
});