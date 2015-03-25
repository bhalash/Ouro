/*global $:false */

$(document).ready(function($) {
    'use strict';

    /*
     * Team Member Handling for Touch Devices
     * --------------------------------------
     * <insert remonstration about the lack of touch events in CSS>
     */

    var team = {
        member: '.teamlist div.member',
        avatar: '.teamlist div.member a.avatar',
        blind: 'div[class^=blind-]',
        bio: 'div.bio'
    };

    $(team.avatar).each(function() {
        $(this).prepend('<div class="blind-top">').prepend('<div class="blind-bottom">');
    });

    $.fn.extend({
        showBio: function() {
            $(this).find(team.blind).css('height', '50%');
            $(this).find(team.bio).css('opacity', 1);
        },
        hideBio: function() {
            $(this).find(team.blind).css('height', 0);
            $(this).find(team.bio).css('opacity', 0);
        }
    });

    if ($('html').hasClass('touch')) {
        $(window).on('swipe', function() {
            $(team.member).hideBio();
        });

        $(team.member).on('tap', function(event) {
            $(team.member).not(this).hideBio();
            $(this).showBio();
            event.preventDefault();
        });
    } else {
        $(team.member).hover(function() {
            $(this).showBio();
        }).mouseleave(function() {
            $(this).hideBio();
        });
    }
});