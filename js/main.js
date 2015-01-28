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

    function navToggle(element) {
        $(element).addClass(cur.nav);
        $('.nav').not(element).removeClass(cur.nav);
    }

    function secToggle(element) {
        $(element).addClass(cur.sec);
        $('section').not(element).removeClass(cur.sec);
    }

    if ($(window).scrollTop() == 0 && !$('#menu').find('a').first().hasClass(cur.nav)) {
        $('#menu').find('a').first().addClass(cur.nav);
    }

    function toggleHighlightedNav() {
        $('section').each(function() {
            if (!$(this).hasClass(cur.sec)) {
                if ($(window).scrollTop() >= $(this).offset().top && $(window).scrollTop() <= $(this).offset().top + $(this).outerHeight()) {
                    navToggle('a[href="#' + $(this).attr('id') + '"]');
                    secToggle(this);
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
        secToggle(this);
        navToggle(this);

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