/*global $:false */

jQuery(function($) {
    'use strict'; 
    /*
     * The Ouro Contact Form of Awesomeitude
     * -------------------------------------
     */


    /*
     * Objects
     * -------
     */

    var form = {
        // Contact form elements nad rules.
        sendmessage: '#sendmessage',
        url: '/contact.php',
        unfilled: 'unfilled',
        success: 'success',
        output: 'p.messages',
        messages: {
            initial: 'Required fields are highlighted red'
        },
        inputs: {
            name: 'input[id=name]',
            email: 'input[id=email]',
            message: 'textarea[id=message]',
            hidden: 'input[id=unseen]',
            button: 'button[id=submit'
        },
        filled: []
    };
    
    /*
     * Form Submit
     * -----------
     * The Ouro contact form.
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
});