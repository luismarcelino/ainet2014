$(function () {
    "use strict";

    var hl,
        newsList = $('.news-headlines'),
        newsListItems = $('.news-headlines li'),
        firstNewsItem = $('.news-headlines li:nth-child(1)'),
        newsPreview = $('.news-preview'),
        elCount = $('.news-headlines').children(':not(.highlight)').index(),
        vPadding = (parseInt(firstNewsItem.css('padding-top').replace('px', ''), 10)) +
            (parseInt(firstNewsItem.css('padding-bottom').replace('px', ''), 10)),
        vMargin = (parseInt(firstNewsItem.css('margin-top').replace('px', ''), 10)) +
            (parseInt(firstNewsItem.css('margin-bottom').replace('px', ''), 10)),
        speed = 5000, // this is the speed of the switch 
        myTimer = null,
        siblings = null,
        totalHeight = null,
        indexEl = 1,
        i = null;
    newsList.append('<li class="highlight nh-anim"></li>');
    hl = $('.highlight');
    newsListItems.addClass('nh-anim');

    function doEqualHeight() {

        if (newsPreview.height() < newsList.height()) {
            newsPreview.height(newsList.height());
        } else if ((newsList.height() < newsPreview.height()) && (newsList.height() > parseInt(newsPreview.css('height').replace('px', ''), 10))) {
            newsPreview.height(newsList.height());
        }

    }

    function doTimedSwitch() {

        myTimer = setInterval(function () {
            if (($('.selected').prev().index()) === elCount + 2) {
                firstNewsItem.trigger('click');
            } else {
                $('.selected').next(':not(.highlight)').trigger('click');
            }
        }, speed);

    }

    function doClickItem() {

        newsListItems.on('click', function () {

            newsListItems.removeClass('selected');
            $(this).addClass('selected');

            siblings = $(this).prevAll();
            totalHeight = 0;


            for (i = 0; i < siblings.length; i += 1) {
                totalHeight += $(siblings[i]).height();
                totalHeight += vPadding;
                totalHeight += vMargin;
            }


            hl.css({
                top: totalHeight,
                height: $(this).height() + vPadding
            });

            indexEl = $(this).index() + 1;

            $('.news-content:nth-child(' + indexEl + ')').siblings().removeClass('top-content');
            $('.news-content:nth-child(' + indexEl + ')').addClass('top-content');
            clearInterval(myTimer);
            doTimedSwitch();
        });
    }

    function doWindowResize() {
        $(window).resize(function () {
            clearInterval(myTimer);
            $('.selected').trigger('click');
            doEqualHeight();
        });
    }

    doClickItem();
    doWindowResize();
    doEqualHeight();
    $('.selected').trigger('click');

});