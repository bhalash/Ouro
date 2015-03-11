jQuery(document).ready(function($) {
    'use strict';
    /*
     * Fallback for iOS Devices
     * ------------------------
     * iOS 6's and 7 have a really fucking awful bug in regards the vh unit. 
     * This is an ugly fallback that changes the units to % of the viewport
     * instead of vh of the viewport. 
     */

    var sectionSize = function() {
        // There is currently no support in CSS3 for calc(vh - px);
        $('section').not('#home').each(function() {
            var b = $('nav#menu').height();
            $(this).css('min-height', $(window).height() - b);
        });
    }

    $(window).on('load', sectionSize);
    $(window).on('resize', sectionSize);

    if ($('body').hasClass('ios-6') || $('body').hasClass('ios-7')) {
        $('#home h1').css({
            lineHeight: $(window).height() + 'px',
        });

        $('.gallery').css('height', $(window).height() * 0.9);
    }

    /*
     * Miscellaneous
     * -------------
     */

    $('#team a').each(function() {
        $(this).attr('target', '_blank');
    });
});