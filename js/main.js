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

    function toggleHighlightedNav() {
        $('section').each(function() {
            if (!$(this).hasClass(cur.sec)) {
                if ($(window).scrollTop() >= $(this).offset().top - 20 && $(window).scrollTop() <= $(this).offset().top + $(this).outerHeight() - 20) {
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