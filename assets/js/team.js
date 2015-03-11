/*global $:false */

$(document).ready(function($) {
    'use strict';

    var feature = {
        id: '#team-feature',
        avatar: '#team-feature .avatar',
        name: '#team-feature .name',
        bio: '#team-feature .blurb',
        social: '#team-feature .social',
        setAvatar: function(avatar) {
            $(this.avatar).css('background-image', avatar);
        }, 
        setName: function(name) {
            $(this.name).text(name);
        }, 
        setBio: function(bio) {
            $(this.bio).text(bio);
        },
        setSocial: function(social) {
            $(this.social).empty();
            social.clone().appendTo(this.social);
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