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

    $('#team a').each(function() {
        $(this).attr('target', '_blank');
    });

    $('section').not('#footer').not('#header').each(function() {
        $(this).css('padding-top', $('nav#menu').height() + 15);
    });

    function navToggle(element) {
        $(element).addClass(cur.nav);
        $('.nav').not(element).removeClass(cur.nav);
    }

    function secToggle(element) {
        $(element).addClass(cur.sec);
        $('section').not(element).removeClass(cur.sec);
    }

    function isMobileUa() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    function isSmartphonePortait() {
        var mobWidth = 736;
        return (Modernizr.touch && isMobileUa && $(window).width() <= mobWidth && $(window).width() < $(window).height());
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

    if (Modernizr.touch) {
        $('current-nav').hover(function() {
            $(this).css('background-color', 'transparent');
        });
    }

    $('.nav').click(function(click) {
        // $(window).unbind('scroll');
        // secToggle(this);
        // navToggle(this);

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