/*global $:false */

/*
 * Ouro Fancy Page Scroll
 * ----------------------
 */

jQuery(document).ready(function($) {
    'use strict'; 

    /*
     * Objects
     * -------
     */

    var nav = {
        // Navigation menu anchor element.
        anchor: 'a.nav',
        // Boolen: Is current section visible and has been handled? 
        dataCurrent: 'is-current',
        // Attached to nav anchor: Current section with a border.
        current: 'current-nav',
        // Navigation menu identifier.
        menu: 'nav#menu',
        // In case I need to change it later. 
        section: 'section',
        // Box shadow at the bottom of the nav menu.
        shadow: 'nav-box-shadow',
        // Animations peed
        speed:  100
    };

    /*
     * Functions
     * ---------
     * Hide the boxshadow when the window is scrolled to the very top.
     */

    var navBoxShadow = function() {
        // Set box shadow at bottom of nav menu on page scroll.
        if ($(window).scrollTop() === 0) {
            $(nav.menu).removeClass(nav.shadow);
        } else {
            $(nav.menu).addClass(nav.shadow);
        }
    };

    var currentNavToggle = function(anchor) {
        // Toggle highlight on anchor.
        $(nav.anchor).removeClass(nav.current);
        $(anchor).addClass(nav.current);
    };

    var currentSectionToggle = function(section) {
        // Toggle current section and set browser URL.
        $(nav.section).data(nav.dataCurrent, false);
        $(section).data(nav.dataCurrent, true);
        currentNavToggle($(menu).find('a[href^=#' + $(section).attr('id') + ']'));

        if (!$('html').hasClass('touch')) {
            if ($('html').hasClass('webkit')) {
                // This causes the page to scroll in Firefox.
                document.location.hash = $(section).attr('id');
            } else {
                // This causes juddery reload behaviour in Chrome.
                history.pushState(null, null, '#' + $(section).attr('id'));
            }
        }
    };

    var toggleOnScroll = function() {
        // Set current nav section as the page scrolls.
        $('section').each(function() {
            var navAbove = $(nav.menu).outerHeight() + 20,
                navBelow = $(nav.menu).outerHeight() + 70,
                sectionTop = $(this).offset().top,
                windowTop = $(window).scrollTop(),
                isCurrent = $(this).data(nav.dataCurrent);

            if (sectionTop >= windowTop - navAbove && sectionTop <= windowTop + navBelow && !isCurrent) {
                currentSectionToggle(this);
            }
        });
    };

    var invertTextColour = function() {
        /* Graduallly invert the colour of the anchor element as the page
         * scrolls, using RGB values. */

        var limits = {
            /* The dark grey colour is 88,88,88, and white is 255,255,255
             * The output RGB colour should be constrained between these. */ 
            upper: 255,
            lower: 88
        };

            // Initial colour.
        var color = limits.upper, 
            difference = limits.upper - limits.lower,
            contentTop = $('#home').height(),
            windowPos = $(window).scrollTop(),
            percentage = windowPos / contentTop;

        percentage = (percentage < 0) ? 0 : percentage;
        percentage = (percentage > 1) ? 1 : percentage;

        /* For example: 
         * color = 255(, 255, 2555)
         * difference = 255 - 80 = 167
         * percentange = (randomly) 0.46
         * 
         * color = 255 - (167 * 0.46) = 178 (rounded)
         */

        color = Math.floor(limits.upper - (difference * percentage));
        color = (color > limits.upper) ? limits.upper : color;
        color = (color < limits.lower) ? limits.lower : color;

        $(nav.menu + ' li').css('color', 'rgba(' + color + ',' + color + ',' + color + ', 1)');
    }

    var navOpacityonScroll = function() {
        // Set the opacity of the nav menu on page scroll.
        var a = $(window).height() + $('.' + nav.menu).height(), b = $(window).scrollTop(), opacity = 0;

        opacity = b / a;
        opacity = (opacity < 0) ? 0 : opacity;
        opacity = (opacity > 1) ? 1 : opacity;

        $(nav.menu).css('background-color', 'rgba(255,255,255,' + opacity + ')');
    };

    if ($('html').hasClass('touch')) {
        $(nav.current).hover(function() {
            $(this).css('background-color', 'transparent');
        });
    }

    /*
     * Nav Handlers
     * ------------
     */
     
    $(window).on('scroll', navBoxShadow);
    $(window).on('scroll', navOpacityonScroll);

    if (!$('html').hasClass('mobile')) {
        $(window).on('scroll', toggleOnScroll);
        // $(window).on('scroll', invertTextColour);

        $(nav.anchor).click(function() {
            /*
             * Nav On-click
             * ------------
             * 1. Disable toggleOnScroll highlight.
             * 2. Determine point to scroll to (a - b - c).
             * 3. Scroll to a - b - c.
             * 4. Change URL to current section.
             * 5. Reenable toggleOnScroll highlight.
             */

            var section = $(this).attr('href'),
                callbackExecuted = false,
                a = $(section).offset().top,
                b = $('nav#menu').outerHeight();

            $(window).off('scroll', toggleOnScroll);
            currentNavToggle(this);

            $('html, body').animate({
                scrollTop: a - b 
            }, 500, function() {
                if (!callbackExecuted) {
                    currentSectionToggle($(section));
                    callbackExecuted = true;

                    setTimeout(function() {
                        $(window).scroll(toggleOnScroll);
                    }, nav.speed);
                }
            });

            return false;
        });
    } else {
        $('.' + nav.current).click(function() {
            $('html, body').animate({ scrollTop : 0 });
            return false;;
        });
    }
});