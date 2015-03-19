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
        // There is currently no support in CSS3 for calc(vh - px);
        $('section').not('#home').each(function() {
            var b = $('nav#menu').height();
            $(this).css('min-height', $(window).height() - b);
        });

        // $('#gallery').css({
        //     'height': $('#gallery').width(),
        //     'width': $('#gallery').parent().width()
        // });
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

    $('.member').each(function() { 
        // Fallback for Mozilla Firefox until I can devise a better solution.
        $(this).css('height', $(this).find('.avatar').css('padding-bottom')); 
    });

    // Chrome adds 4px to the height of each anchor. I have no idea why.
    $('.gallery a').css('height', $('.gallery a').outerWidth());

    $('#team a').each(function() {
        $(this).attr('target', '_blank');
    });
});