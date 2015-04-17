/*global $:false */

/**
 * The Ouro Contact Form of Awesomeitude
 * -------------------------------------
 * Sanitize and Ajax submit information from the now-unused contact form.
 * 
 * @category   Functions File
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

jQuery(function($) {
    'use strict'; 

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
            button: 'button[id=submit]'
        },
        filled: []
    };

    Array.prototype.allTrue = function() {
        /**
         * Are all Array Elements True?
         * ----------------------------
         * Used to verify that the inputs have a value. I do the validation on 
         * the server; at this point I just check they aren't empty.
         * 
         * @param {array} The Array itself
         * @return {bool} Array elements are all true true/false.
         */
        for (var i = 0; i < this.length; i++) {
            if (!this[i]) {
                return false;
            }
        }

        return true;
    };

    $(form.sendmessage).find('input, textarea').blur(function() {
        /**
         * Remove Unfilled Class on Blur
         * -----------------------------
         * @param {none}
         * @return {none}
         */
        if ($(this).prop('required') && $(this).hasClass(form.unfilled) && $(this).val().length > 0) {
            $(this).removeClass(form.unfilled);
        }
    });

    $(form.sendmessage).submit(function(event) {
        /**
         * Submit Contact Form
         * -------------------
         * Submit the contact form over Ajax and listen for response from 
         * server.
         * 
         * @param {none}
         * @return {none}
         */
         
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
            /*
             * Form Ajax Submission and Response
             * ---------------------------------
             * Submit form to server if all fields are filled. Main validation 
             * occurs there. 
             */

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