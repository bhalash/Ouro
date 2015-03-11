/*global $:false */

$(document).ready(function($) {
    'use strict';

    var team = {
        member: '.member',
        avatar: '.avatar',
        name:  '.bio span.name',
        blurb: '.bio span.blurb',
        title: '.bio span.title'
    };

    var feature = {
        id: '#team-feature',
        avatar: '#team-feature .avatar',
        name: '#team-feature .name',
        blurb: '#team-feature .blurb',
        setAvatar: function(object) {
            var img = $(object).find(team.avatar).css('background-image');
            console.log(object, img);

            $(feature.avatar).css({
                'background-image': img,
            });
        }, setName: function(object) {
            $(feature.name).text($(object).find(team.name).text());
        }, 
        setBlurb: function(object) {
            $(feature.blurb).text($(object).find(team.blurb).text());
        }
    };

    function setFeaturedMember(object) {
        feature.setAvatar(object);
        feature.setBlurb(object);
        feature.setName(object);
    };

    $(team.member).click(function() {
        setFeaturedMember(this);
        return false;
    });

    setFeaturedMember($(team.member).first());
});