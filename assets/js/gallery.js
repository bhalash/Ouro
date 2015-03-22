/*global $:false */

jQuery(document).ready(function($) {
    /*
     * Gallery and Lightbox
     * --------------------
     * Gallery with lightbox popout for Ouro product images.
     */

    'use strict'; 

    function Lightbox(id, galleryid) {
        /*
         * Lightbox Class
         * --------------
         * Takes two arguments:
         * 
         * 1. ID of the Lightbox.
         * 2. ID of the attached gallery.
         */

        // ID of the gallery.
        this.galleryid = galleryid;
        // ID of the lightbox.
        this.id = id;
        // Lightbox display state.
        this.open = false;
        // Current image displayed.
        this.current = -1;
        // Array of gallery images.
        this.images = [];

        this.nav = {
            // Lightbox navigation controls.
            controls: '.controls',
            close: '.close',
            sides: [ '.left', '.right' ]
        };

        this.lightbox = {
            // Lightbox element attributes: Image description text and the image.
            alt: '.alt-text',
            image: '.image'
        };

        this.close = function() {
            /* 
             * Close Lightbox
             * --------------
             * Hide lightbox and resume background page scrolling.
             */

            $(this.id).hide();
            $('html, body').css('overflow', 'initial');

            if ($('html').hasClass('webkit') && $('html').hasClass('touch')) {
                // Resume background touch events.
                document.ontouchstart = function(e) { 
                    return true;
                }
            }

            this.open = false;
        };

        this.show = function() {
            /*
             * Display Lightbox
             * ----------------
             * Display the lightbox and pause background page scrolling.
             */

            $(this.id).show();

            /* $.show() gives the background a background state of its initial 
             * value, be it either block or inline. Directly setting a display
             * of flex sometimes does not work to make the div appear in 
             * Internet Explorer, so I first show it and then give it a value
             * of flex. */

            if ($('html').hasClass('webkit') && $('html').hasClass('touch')) {
                $(this.id).css('display', '-webkit-flex');

                // Prevent background touch events.
                document.ontouchstart = function(e){ 
                    e.preventDefault(); 
                }

            } else {
                $(this.id).css('display', 'flex');
            }

            $('html, body').css('overflow', 'hidden');
            this.open = true;
        };

        this.setLightboxImage = function(data) {
            /*
             * Set Lightbox Image
             * ------------------
             */
            var image = this.images[data],
                src = $(image).attr('href'),
                alt = $(image).find('image').attr('alt');  

            this.current = data;
            this.setImage(src);
            this.setAlt(alt);
            this.show();
        };

        this.decrementImage = function() {
            /*
             * Decrement Image
             * ---------------
             * Show a lowered numbered image from the image array. Does not go 
             * below 0.
             */

            if (this.open) {
                var oldCurrent = this.current;
                this.current -= (this.current <= 0) ? 0 : 1;

                if (this.current != oldCurrent) {
                    this.setLightboxImage(this.current);
                }
            }
        };

        this.incrementImage = function() {
            /*
             * Increment Image
             * ---------------
             * Show a higher numbered image from the image array. Does not go 
             * above array length.
             */

            if (this.open) {
                var oldCurrent = this.current;
                this.current += (this.current < this.images.length - 1) ? 1 : 0;

                if (this.current != oldCurrent) {
                    this.setLightboxImage(this.current);
                }
            }
        };

        this.setImage = function(src) {
            // Change lightbox src.
            $(this.id).find(this.lightbox.image).attr('src', src);
        };

        this.setAlt = function(alt) {
            // Change lightbox alt.
            $(this.id).find(this.lightbox.alt).text(alt);
            $(this.id).find(this.lightbox.image).attr('alt', alt);
        };

        this.handlers = function() {
            /*
             * Navigation Control Handlers
             * ---------------------------
             */

            var lightbox = this;

            $(this.id).find(this.nav.close).on('click', function() {
                lightbox.close();
            });

            $.each(this.nav.sides, function(i, v) {
                $(lightbox.id).find(v).click(function() {
                    console.log('asdadaa');
                });
            });
        };

        this.addGalleryImages = function() {
            /*
             * Add Gallery Images to Array
             * ---------------------------
             * Loop through the provided gallery and add each image to the array.
             */

            var images = [], n = 0;

            $(this.galleryid).find('a').each(function() {
                $(this).data('img', n++);
                images.push($(this));
            });

            this.images = images;
        };

        this.init = function() {
            /*
             * Initialize Lightbox
             * -------------------
             * 1. Prepend lightbox HTML to <body>.
             * 2. Add all gallery images to lightbox array.
             */

            $('body').prepend('<div id="' + this.id.substring(1) + '">');
            $(this.id).append('<img class="' + this.lightbox.image.substring(1) + '" />');
            $(this.id).append('<p class="' + this.lightbox.alt.substring(1) + '">');
            $(this.id).append('<nav class="' + this.nav.controls.substring(1) + '">');

            for (var i = 0; i < 2; i++) {
                $(this.id).find('nav.controls').append('<a class="' + this.nav.sides[i].substring(1) + ' control" href="javascript:void(0)">');
            }

            $(this.id).append('<a class="' + this.nav.close.substring(1) + '" href="javascript:void(0)">');
            this.addGalleryImages();
        };

        this.init();
    }

    // Add lightbox.
    var lightbox = new Lightbox('#lightbox', '#gallery');

    $(window).keyup(function(key) {
        /*
         * Lightbox Control Keybinds
         * -------------------------
         */
        switch (key.keyCode) {
            // Escape
            case 27: lightbox.close(); break;
            // left`qt arrow.
            case 37: lightbox.decrementImage(); break;
            // Right arrow. 
            case 39: lightbox.incrementImage(); break;
            default: break;
        }
    });

    $('.gallery a').bind('click touchstart', function() {
        if (!$('html').hasClass('mobile')) {
            lightbox.setLightboxImage($(this).data('img'));
            return false;
        }
    });

    $('#lightbox a.left').bind('click touchend', function(event) {
        lightbox.decrementImage();
        return false;
    });

    $('#lightbox a.right').bind('click touchend', function() {
        lightbox.incrementImage();
        return false;
    });

    $('#lightbox a.close').bind('click touchend', function() {
        lightbox.close();
        return false;
    });
});