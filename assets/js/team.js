/*global $:false */

jQuery(document).ready(function($) {
    'use strict';

    /*
     * Team Member Handling for Touch Devices
     * --------------------------------------
     * <insert remonstration about the lack of touch events in CSS>
     */

    var team = {
        member: '.teamlist div.member',
        avatar: '.teamlist div.member a.avatar'
    };

    var blinds = {
        selector: 'div[class^=blind-]',
        top: '<div class="blind-top">',
        bottom: '<div class="blind-bottom">',
        description: 'div.description',
        parent: '.has-blinds'
    };

    $(team.avatar).each(function() {
        $(this).prepend(blinds.top).prepend(blinds.bottom);
        // $(this).parent().addClass(blinds.parent.substring(1));
    });

    $.fn.extend({
        showBio: function() {
            $(this).find(blinds.selector).css('height', '50%');
            $(this).find(blinds.description).css('opacity', 1);
        },
        hideBio: function() {
            $(this).find(blinds.selector).css('height', 0);
            $(this).find(blinds.description).css('opacity', 0);
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