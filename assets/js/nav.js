/*global $:false */

/**
 * Site Navigation and Scrolling
 * -----------------------------
 * @category   Site Navigation and Scrolling
 * @package    Ouro_botics landing page
 * @author     Mark Grealish <mark@bhalash.com>
 * @copyright  2015 Mark Grealish
 * @license    https://www.gnu.org/copyleft/gpl.html The GNU General Public License v3.0
 * @version    1.0
 * @link       https://github.com/bhalash/ouro.ie
 * 
 * This file is part of ouro.ie
 * 
 * ouro.ie is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * ouro.ie is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with Ouro_botics. If not, see <http://www.gnu.org/licenses/>.
 */

jQuery(document).ready(function($) {
    'use strict'; 

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
        // Animations peed
        speed:  100
    };

    /**
     * Functions
     * ---------
     * Hide the boxshadow when the window is scrolled to the very top.
     */

    var currentNavToggle = function(anchor) {
        /**
         * Toggle Navigation Hover Highlight
         * ---------------------------------
         * Change the navigation link colour when you hover over it.
         *  
         * @param {element} anchor The anchor in question.
         * @return {none}
         */

        $(nav.anchor).removeClass(nav.current);
        $(anchor).addClass(nav.current);
    };

    var currentSectionToggle = function(section) {
        /**
         * Toggle Navigation Hover Highlight
         * ---------------------------------
         * Toggle current section and set browser URL.

         * @param {element} anchor The anchor in question.
         * @return {none}
         */

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
        /**
         * Toggle Navigation Hover Highlight
         * ---------------------------------
         * Set current nav section as the page scrolls. What this means is that 
         * the highlighted nav section changes to match the current section in
         * the middle of the page.
         * 
         * @param {none}
         * @return {none}
         */

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
        /**
         * Invert Navigation Text Colour
         * -----------------------------
         * Graduallly invert the colour of the anchor element as the page 
         * scrolls, using RGB values. The text begins as white on top of a dark
         * video or image, and ends as dark grey on a white background.
         * 
         * @param {none}
         * @return {none}
         */

        var limits = {
            /* The dark grey colour is 88,88,88, and white is 255,255,255
             * The output RGB colour should be constrained between these. */ 
            upper: 255,
            lower: 88
        };

        // Initial colour.
        var color = limits.upper;
        var difference = limits.upper - limits.lower;
        var contentTop = $('#home').height();
        var windowPos = $(window).scrollTop();
        var percentage = windowPos / contentTop;

        percentage = (percentage < 0) ? 0 : percentage;
        percentage = (percentage > 1) ? 1 : percentage;

        /* For example: 
         * color = 255(, 255, 2555)
         * difference = 255 - 80 = 167
         * percentange = (randomly) 0.46
         * 
         * color = 255 - (167 * 0.46) = 178 (rounded) */
        color = Math.floor(limits.upper - (difference * percentage));
        color = (color > limits.upper) ? limits.upper : color;
        color = (color < limits.lower) ? limits.lower : color;

        $(nav.menu).find(nav.anchor).css('color', 'rgba(' + color + ',' + color + ',' + color + ', 1)');
    }

    var navOpacityonScroll = function() {
        /**
         * Nav Background Opacity
         * ----------------------
         * Set the opacity of the navigation as the page scrolls up or down.
         * 
         * @param {none}
         * @return {none}
         */

        var a = $(window).height() + $('.' + nav.menu).height();
        var b = $(window).scrollTop();
        var opacity = 0;

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
     
    $(window).on('scroll', navOpacityonScroll);

    if (!$('html').hasClass('mobile')) {
        $(window).on('scroll', toggleOnScroll);
        $(window).on('scroll', invertTextColour);

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

            var section = $(this).attr('href');
            var callbackExecuted = false;
            var a = $(section).offset().top;
            var b = $('nav#menu').outerHeight();

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