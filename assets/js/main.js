jQuery(document).ready(function($) {
    'use strict';
    /*
     * Fallback for iOS Devices
     * ------------------------
     * iOS 6's and 7 have a really fucking awful bug in regards the vh unit. 
     * This is an ugly fallback that changes the units to % of the viewport
     * instead of vh of the viewport. 
     */

    var sectionSizes = function() {
        $('section').not('#home').each(function() {
            // There is currently no support in CSS3 for calc(vh - px);
            var navHeight = $('nav#menu').height();
            if (!$('html').hasClass('internet-explorer')) {
                $(this).css('min-height', $(window).height() - navHeight);
            } else {
                /* I would much rather use min-height for this, but TL;DR IE 11
                 * will not vertically center children if the parent has a min-height
                 * attribute set. */
                $(this).css('height', $(window).height() - navHeight);
            }
        });
    }

    $(window).on('load', sectionSizes);
    $(window).on('resize', sectionSizes);

    if ($('html').hasClass('ios-6') || $('html').hasClass('ios-7')) {
        $('#home h1').css({
            lineHeight: $(window).height() + 'px',
        });
    }

    /*
     * Miscellaneous
     * -------------
     */
});