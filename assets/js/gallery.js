/*global $:false */

jQuery(document).ready(function($) {
    'use strict'; 

    function Lightbox(id) {
        this.id = id;

        this.image = {
            alt: '',
            src: '',
            href: ''
        };

        this.setLightboxImage = function(image) {
            // Take in the new image to be used.
            this.image.alt = $(image).find('img').attr('alt');
            this.image.src = $(image).find('img').attr('src');
            this.image.href = $(image).attr('href');

            this.changeImage();
        };

        this.changeImage = function() {
            this.setImage(this.image.src);
            this.setAlt(this.image.alt);
        };

        this.setImage = function(image) {
            image = image.replace(/^/, 'url("').replace(/$/, '")');
            $(this.id).find('.image').css('background-image', image);
        }

        this.setAlt = function(alt) {
            $(this.id).find('p.alt').text(this.image.alt);
        }

        // $(window).keyUp(function() {
        //     $(this.id).hide();
        // });
    };

    var lightbox = {
        id: '#lightbox',
        elements: {
            image: '',  
        },
        image: {
            alt: '#lightbox alt',
            src: '#lightbox src'
        },
    };

    var lightbox = new Lightbox('#lightbox');

    $('.gallery a').click(function(click) {
        lightbox.setLightboxImage(this);
        click.preventDefault();

        $.each(lightbox.image, function(k,v) {
            console.log(k, v);
        });
    });
});