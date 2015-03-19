/*global $:false */

$(document).ready(function($) {
    'use strict';

    var feature = {
        id: '#team-feature',
        avatar: '#team-feature .avatar',
        name: '#team-feature .name',
        bio: '#team-feature .blurb',
        social: '#team-feature .social',
        speed: 300,
        setAvatar: function(avatar) {
            var $avatarDiv = $(this.avatar);
            $avatarDiv.css('background-image', avatar);
        }, 
        setName: function(name) {
            var $nameDiv = $(this.name);
            $($nameDiv).text(name);
        }, 
        setBio: function(bio) {
            var $bioDiv = $(this.bio);
            $bioDiv.text(bio);
        },
        setSocial: function(social) {
            var $socialDiv = $(this.social); 
            $(this.social).show();
            $(this.social).empty();
            social.children('li').clone().appendTo($socialDiv);
        },
        setPerson: function(person) {
            this.setName(person.name);
            this.setBio(person.bio);
            this.setAvatar(person.avatar);
            this.setSocial(person.social);    
        }
    };

    function Member(id) {
        this.id = '#' + id;
        this.avatar = $(this.id).find('.avatar').css('background-image');
        this.name = $(this.id).find('span.name').text();
        this.social = $(this.id).find('ul.social');
        this.bio = $(this.id).find('span.blurb').text();
        this.title = $(this.id).find('span.title').text();

        var member = this;

        $(this.id).click(function() {
            $('.avatar').removeClass('focus');
            $(this).find('a.avatar').addClass('focus');
            feature.setPerson(member);
            return false;
        });
    }

    var members = [];

    $('.member').each(function() {
        members.push(new Member($(this).attr('id')));
    });

    feature.setPerson(members[0]);
});