'use strict';

jQuery(function($) {
    /*
     * Nav Buttons
     * -----------
     */

    var cur = {
        nav: 'current-nav',
        sec: 'current-section',
    }

    if ($(window).scrollTop() == 0 && !$('#menu').find('a').first().hasClass(cur.nav)) {
        $('#menu').find('a').first().addClass(cur.nav);
    }

    function toggleHighlightedNav() {
        $('section').each(function() {
            if (!$(this).hasClass(cur.sec)) {
                if ($(window).scrollTop() >= $(this).offset().top && $(window).scrollTop() <= $(this).offset().top + $(this).outerHeight()) {
                    var hrefID = 'a[href="#' + $(this).attr('id') + '"]';
                    $('section').removeClass(cur.sec);
                    $(this).addClass(cur.sec);
                    $('#menu a').not(hrefID).removeClass(cur.nav);
                    $(hrefID).addClass(cur.nav);
                }
            }
        });
    }

    toggleHighlightedNav();

    $(window).scroll(function() {
        toggleHighlightedNav();
    });

    $('.nav').click(function(click) {
        $(window).unbind('scroll');
        $($(this).attr('href')).addClass(cur.sec);
        $(this).addClass(cur.nav);
        $('.nav').not(this).removeClass(cur.nav);

        $('html, body').animate({ 
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, function() {
            $(window).scroll(function() {
                toggleHighlightedNav();
            });
        });

        return false;
    });
});