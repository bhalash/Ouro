/*global $:false */

/*
 * Ouro Fancy Page Scroll
 * ----------------------
 */

$(document).ready(function() {
    'use strict'; 

    /*
     * Objects
     * -------
     */

    var nav = {
        // Navigation menu anchor element.
        anchor: '.nav',
        // Boolen: Is current section visible and has been handled? 
        dataCurrent: 'is-current',
        // Attached to nav anchor: Current section with a border.
        current: 'current-nav',
        // Navigation menu identifier.
        menu: 'nav#menu',
        // In case I need to change it later. 
        section: 'section',
        // Box shadow at the bottom of the nav menu.
        shadow: 'nav-box-shadow'
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

        if ($('body').hasClass('webkit')) {
            // This causes the page to scroll in Firefox.
            document.location.hash = $(section).attr('id');
        } else {
            // This causes juddery reload behaviour in Chrome.
            history.pushState(null, null, '#' + $(section).attr('id'));
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
    $(window).on('scroll', toggleOnScroll);

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
            b = $(this).outerHeight(),
            c = parseInt($(section).css('margin-bottom')) / 2;

        $(window).off('scroll', toggleOnScroll);
        currentNavToggle(this);

        $('html, body').animate({
            scrollTop: a - b - c 
        }, 500, function() {
            if (!callbackExecuted) {
                currentSectionToggle($(section));
                callbackExecuted = true;

                setTimeout(function() {
                    $(window).scroll(toggleOnScroll);
                }, 100);
            }
        });

        return false;
    });
});