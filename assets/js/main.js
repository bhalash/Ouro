jQuery(document).ready(function($) {
    'use strict';
    /*
     * Fallback for iOS Devices
     * ------------------------
     * iOS 6's and 7 have a really fucking awful bug in regards the vh unit. 
     * This is an ugly fallback that changes the units to % of the viewport
     * instead of vh of the viewport. 
     */

    var isIos6 = !!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/6\.\d+ Mobile)/i);
    var isIos7 = !!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/7\.\d+ Mobile)/i);

    if (isIos7 || isIos6) {
        $('#home h1').css({
            lineHeight: $(window).height() + 'px',
        });
    }

    var isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    /*
     * Section Top Padding
     * -------------------
     * Add the height of the nav menu to the top padding of each element.
     */

    var sectionSize = function() {
        $('section').not('#home').each(function() {
            var b = $('nav#menu').height();
            $(this).css('height', $(window).height() - b);
        });
    }

    if (!isMobile) {
        $(window).on('load', sectionSize);
        $(window).on('resize', sectionSize);
    }

    /*
     * Miscellaneous
     * -------------
     */

    $('#team a').each(function() {
        $(this).attr('target', '_blank');
    });
});