jQuery(document).ready(function($) {
    'use strict';
    /*
     * Dynamic Section Resizing
     * ------------------------
     * Neither Internet Explorer nor Safari Mobile have great/any support for 
     * calc with vh, as I use in _sections.scss:
     *
     * @include prefix(min-height, calc(100vh - #{$navigation_menu_height}));
     * 
     * This compiles to:
     *
     * calc(100vh - 70px);
     * 
     * Because their support is incomplete I use this as a fallback.
     */

    var sectionSizes = function() {
        var $section = $('section').not('#home'),
            $nav = $('nav#menu');

        $section.css('min-height', $(window).height() - $nav.height());
    }

    if ($('html').hasClass('ipad') || $('html').hasClass('internet-explorer')) {
        $(window).on('load', sectionSizes);
        $(window).on('resize', sectionSizes);
    }

    $('input').keypress(function(event) {
        // Submit newsletter form on return.
        if (event.which == 13) {
            event.preventDefault();
            $('form').submit();
        }
    });

    /*
     * Fade-in Selected Elements on Page Scroll
     * ----------------------------------------
     */

    var toFadeIn = [
        '.gallery a', 
        '.member',
        '.funder',
        '.pane-image'
    ];

    var showOnScroll = function() {
        $.each(toFadeIn, function(i,v) {
            $(v).each(function() {
                if (parseInt($(v).css('opacity')) !== 1) {
                    var scrollTop = $(window).scrollTop(),
                        winHeight = $(window).height() * 0.9,
                        thisTop = $(v).offset().top;

                    if (thisTop < scrollTop + winHeight) {
                        $(v).find('img').each(function() {
                            $(this).attr('src', $(this).data('src'));
                        });

                        $(v).animate({ 'opacity' : '1' }, 700);
                    }
                }
            });
        });
    }

    $(window).on('scroll', showOnScroll);
});

/*
 * Google Analytics
 * ----------------
 */

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-59959595-1', 'auto');
ga('send', 'pageview');