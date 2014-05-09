$(function () {
    "use strict";
    $('#slideshow').cycle({
        fx: 'fade',
        speed: 1000,
        timeout: 5000,
        pager: '.slideshow_wrapper .slideshow_paging',
        prev: '.slideshow_wrapper .slideshow_prev',
        next: '.slideshow_wrapper .slideshow_next',
        before: function (currSlideElement, nextSlideElement) {
            var data = $('.data', $(nextSlideElement)).html();
            $('.slideshow_wrapper .slideshow_box').stop(true, true).animate({
                bottom: '-110px'
            }, 400, function () {
                $('.slideshow_wrapper .slideshow_box .data').html(data);
            });
            $('.slideshow_wrapper .slideshow_box').delay(100).animate({
                bottom: '0'
            }, 400);
        }
    });

    $('.slideshow_wrapper').mouseenter(function () {
        $('#slideshow').cycle('pause');
        $('.slideshow_wrapper .slideshow_prev').stop(true, true).animate({
            left: '20px'
        }, 200);
        $('.slideshow_wrapper .slideshow_next').stop(true, true).animate({
            right: '20px'
        }, 200);
    }).mouseleave(function () {
        $('#slideshow').cycle('resume');
        $('.slideshow_wrapper .slideshow_prev').stop(true, true).animate({
            left: '-40px'
        }, 200);
        $('.slideshow_wrapper .slideshow_next').stop(true, true).animate({
            right: '-40px'
        }, 200);
    });
});