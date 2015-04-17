/*global $:false */

/**
 * Main Ouro JavaScript Functions
 * ------------------------------
 * @category   Ouro JavaScript Functions
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

    /**
     * Dynamic Section Resizing
     * ------------------------
     * Neither Internet Explorer nor Safari Mobile have great/any support for 
     * calc with vh.
     */

    var sectionSizes = function() {
        var $section = $('section').not('#home');
        var $nav = $('nav#menu');

        $section.css('min-height', $(window).height() - $nav.height());
    };

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
     * Load Site Elements on Page Scroll
     * ---------------------------------
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

                    var scrollTop = $(window).scrollTop();
                    var winHeight = $(window).height() * 0.9;
                    var thisTop = $(v).offset().top;

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

    /*
     * Autoplay Header Timelapse Video
     * -------------------------------
     */

    var timelapse = {
        id: '#timelapse',
        video: $('#timelapse video').get(0),
    };

    timelapse.video.play();

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            timelapse.video.pause();
        } else {
            timelapse.video.play();
        }
    });

    if ($('html').hasClass('ie')) {
        $('#timelapse').find('video').css({
            'height': '100%'
        });
    }
});

/*
 * Google Analytics Tracking Code
 * ------------------------------
 */

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-59959595-1', 'auto');
ga('send', 'pageview');