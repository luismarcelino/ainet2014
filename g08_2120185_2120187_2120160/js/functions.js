$(document).ready(function () {

    /*$('#service_info').html($('#service_info').load("services_texts/service_A.html"));*/

    $('#services_list > li').click(function () {

        $('#services_list > li').not(this).removeClass('arrow_box');
        $(this).addClass('arrow_box');

        /*var service = this.getAttribute('id');
		console.log(service);
		$('#service_info').html($('#service_info').load("services_texts/" + service + ".html"));*/
    });


    // Menu handling

    var aboveHeight = $('#menu').position().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > aboveHeight) {
            if (!($('#menu_div').hasClass('fixed'))) {
                $('#menu_div').finish();

                var currentPos = $('#menu_div').offset().left,
                    height = $('#header').height(),
                    dimension = {};
                $('#menu_div').addClass('fixed');
                $('#header').css('height', height + 'px');

                var width = $(window).width();
                if ($('#container').width() > width)
                    width = $('#container').width();
                console.log(width);

                dimension.width = width + "px";
                dimension.marginLeft = -currentPos + "px";
                $('#menu_div').animate(dimension, 250);
                $('#menu > a').fadeIn(); //css('visibility', 'visible');
            }
        } else {
            if ($('#menu_div').hasClass('fixed')) {
                $('#menu_div').finish();
                var dimension = {}, width = $('#header').width();
                $('#menu_div').removeClass('fixed');

                dimension.width = "1024px";
                dimension.marginLeft = "0";
                $('#menu_div').animate(dimension, 250);

                $('#menu > a').css('display', 'none');
            }
        }
    });

    $('.more_btn').click(function () {

        var more_info = this.parentNode.getElementsByClassName('more_Appointment_info')[0];
        //$(more_info).toggle();

        var dimension = {};
        dimension.height = "toggle";
        $(more_info).animate(dimension, 200);
    });

    $('.accept_btn').click(function () {
        var appointment = this.parentNode.parentNode;
        $(appointment).css('border-color', '#58ae67');
        var notification = appointment.getElementsByClassName('notification')[0];

        notification.src = "images/notification_done32.png";
        $(appointment).appendTo("#processed");

    });

    $('.refuse_btn').click(function () {
        var appointment = this.parentNode.parentNode;
        $(appointment).css('border-color', '#dc2026');
        var notification = appointment.getElementsByClassName('notification')[0];

        notification.src = "images/notification_error32.png";
        $(appointment).appendTo("#processed");
    });

    //expandir contactos
    // Hide all contacts except first after page load so that they are available if JavaScript fails
    $('.go_down').toggle();
    $('.go_down:not(:first)').parent().find('.expandable > img').attr('src', 'images/plus.png');

    togglePanel($('.expandable:first'));

    $('.expandable').click(function () {
        console.log($(this));
        togglePanel($(this));
    });

    $('#facebook').mouseover(function () {
        var img = $('#facebook').find('img');
        img.attr('src', 'images/facebook_button.png');

    });
    
       $('#facebook').mouseout(function () {
        var img = $('#facebook').find('img');
        img.attr('src', 'images/facebook_black_button.png');

    });



});

function togglePanel(panel) {
    var more_info = $(panel).parent().children('.go_down');
    var imgPath;
    var img = $(panel).find('img');
    var singleExpandable = $(panel).parent().parent().hasClass('single_expandable') && !$(panel).hasClass('expanded');
    if (singleExpandable) {
        togglePanel($('.expanded'));
    }
    if ($(panel).hasClass('expanded')) {
        imgPath = 'images/plus.png';
        $(panel).removeClass('expanded');
    } else {
        imgPath = 'images/minus.png';
        $(panel).addClass('expanded');
        $(img).attr('src', imgPath);
    }


    var dimension = {};
    dimension.height = "toggle";
    $(more_info).animate(dimension, 200, function () {
        $(img).attr('src', imgPath);
    });
    //$('html, body').animate({scrollTop: ($(more_info).offset().top - $(more_info).height())}, 200, {queue: false});
}