jQuery(function($) {
    'use strict';
    
    /*
     * Form Submit
     * -----------
     * Ouro contact form.
     */

    Array.prototype.allTrue = function() {
        // Used to verify that the inputs have a value. I do the validation on 
        // the server; at this point I just check they aren't empty.
        for (var i = 0; i < this.length; i++) {
            if (!this[i]) {
                return false;
            }
        }

        return true;
    };

    var form = {
        sendmessage: '#sendmessage',
        url: '/contact.php',
        unfilled: 'unfilled',
        success: 'success',
        output: 'p.messages',
        messages: {
            initial: 'Required fields are marked *'
        },
        inputs: {
            name: 'input[id=name]',
            email: 'input[id=email]',
            website: 'input[id=website]',
            message: 'textarea[id=message]',
            hidden: 'input[id=unseen]',
            button: 'button[id=submit'
        },
        filled: []
    };

    $(form.sendmessage).find('input, textarea').blur(function() {
        if ($(this).prop('required') && $(this).hasClass(form.unfilled) && $(this).val().length > 0) {
            $(this).removeClass(form.unfilled);
        }
    });

    $(form.sendmessage).submit(function(event) {
        event.preventDefault();
        form.filled = [];

        if ($(form.inputs.hidden).val().length > 0) {
            // Bad bot, bad!
            return false;
        }

        // Timeout on the input to stop button mashers. 
        $(form.inputs.button).attr('disabled', 'disabled');

        window.setTimeout(function() {
            $(form.inputs.button).removeAttr('disabled');
        }, 1000);

        $(this).find('textarea, input').each(function() {
            // Validated further on server. Just make sure they have a value.
            if ($(this).prop('required') && $(this).val().length === 0) {
                $(this).addClass(form.unfilled);
                form.filled.push(false);
            } else {
                $(this).removeClass(form.unfilled);
                form.filled.push(true);
            }
        });
        
        if (form.filled.allTrue()) {

            // If the fields are filled, submit them as JSON to the server.
            var dataOut = {
                'name': $(form.inputs.name).val(),
                'email': $(form.inputs.email).val(),
                'website': $(form.inputs.website).val(),
                'message': $(form.inputs.message).val()
            };

            $.ajax({
                type: 'POST',
                url: form.url,
                data: dataOut,
                dataType: 'json',
                encode: true
            }).done(function(data) {
                // Report success.
                if (data.success) {
                    $(form.output).removeClass(form.unfilled).addClass(form.success);
                } else {
                    $(form.output).removeClass(form.success).addClass(form.unfilled);
                }

                $(form.output).text(data.message);
            }).fail(function(data) {
                // Report error.
                $(form.output).removeClass(form.success).addClass(form.unfilled);
                $(form.output).text(data.message);
            }).always(function() {
                // Regardless, open form back up to input.
                $(form.inputs.button).removeAttr('disabled');
            });

        } else {

            $('.' + form.unfilled).first().focus();
            $(form.output).addClass(form.unfilled);
            $(form.output).text(form.messages.initial);

        }

        window.setTimeout(function() {
            // Regardless of outcome, reset messages to initial state.
            $(form.output).removeClass(form.success).removeClass(form.unfilled);
            $(form.output).text(form.messages.initial);
        }, 10000);
    });

    /*
     * Fallback for iOS Devices
     * ------------------------
     * iOS 6's and 7 have a really fucking awful bug in regards the vh unit. 
     * This is an ugly fallback that changes the units to % of the viewport
     * instead of vh of the viewport. 
     */

    var isIos6 = !!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/6\.\d+ Mobile)/i);
    var isIos7 = !!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/7\.\d+ Mobile)/i);

    if (isIos7 || isIos6) {
        $('#header h1').css({
            lineHeight: $(window).height() + 'px',
        });
    }

    /*
     * Nav Menu Box Shadow
     * -------------------
     * Hide the boxshadow when the window is scrolled to the very top.
     */

    $(window).scroll(function() {
        if ($(this).scrollTop() === 0) {
            $('nav#menu').removeClass('nav-shadow');
        } else {
            $('nav#menu').addClass('nav-shadow');
        }
    });

    /*
     * Section Top Padding
     * -------------------
     * Add the height of the nav menu to the top padding of each element.
     */

    function sectionTopPadding() {
        $('section').not('#header').each(function() {
            var a = parseInt($(this).css('padding-top'));
            var b = $('nav#menu').height();
            $(this).css('padding-top', a + b);
        });
    }

    sectionTopPadding();

    /*
     * Nav Buttons
     * -----------
     */

    var cur = {
        nav: 'current-nav',
        sec: 'current-section',
    };

    $('#team a').each(function() {
        $(this).attr('target', '_blank');
    });

    function navToggle(element) {
        $(element).addClass(cur.nav);
        $('.nav').not(element).removeClass(cur.nav);
    }

    function secToggle(element) {
        $(element).addClass(cur.sec);
        $('section').not(element).removeClass(cur.sec);
    }

    function isMobileUa() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    function isSmartphonePortait() {
        var mobWidth = 736;
        return (Modernizr.touch && isMobileUa() && $(window).width() <= mobWidth && $(window).width() < $(window).height());
    }

    function toggleHighlightedNav() {
        $('section').each(function() {
            if (!$(this).hasClass(cur.sec)) {
                if ($(window).scrollTop() >= $(this).offset().top - 40 && $(window).scrollTop() <= $(this).offset().top + $(this).outerHeight() - 40) {
                    navToggle('a[href="#' + $(this).attr('id') + '"]');
                    secToggle(this);
                }
            }
        });
    }

    toggleHighlightedNav();

    $(window).scroll(function() {
        toggleHighlightedNav();
    });

    if (Modernizr.touch) {
        $('.current-nav').hover(function() {
            $(this).css('background-color', 'transparent');
        });
    }

    $('.nav').click(function(click) {
        // $(window).unbind('scroll');
        // secToggle(this);
        // navToggle(this);

        $('html, body').animate({ 
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, function() {
            $(window).scroll(function() {
                toggleHighlightedNav();
            });
        });

        return false;
    });
});