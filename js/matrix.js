'use strict';

function randChar(count) {
    return Math.random().toString(36).substr(3, count);
}

function randRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

jQuery(function($) {
    /*
     * Matrix-style Scrolling Text
     * ---------------------------
     */

    var matrix = {
        element: '.matrix',
        columns: 13,
        rows: 9,
        interval: 115,
        data: {
            rows: 'rows',
            cols: 'cols',
        },
        scroll: function(element) {
            var c = randRange(100,250);
            var x = randRange(100,999);
            var y = randRange(100,999);
            var z = randRange(100,999);

            $(element).prepend('<span>t:' + c + ' x:' + x + ' y:' + y + ' z:' + z + '<br />');

            if (randRange(0,9999) % (42 * 2) == 0) {
                $(element).children('span').first().addClass('highlight');
            }

            if ($(element).children('span').length > this.getRows(element)) {
                $(element).children('span').last().remove();
            }
        },
        getRows: function(element) {
            element = (!$(element).is('pre')) ? $(element).closest('pre') : element;
            return ($(element).data(this.data.rows) === undefined) ? this.rows : $(element).data(this.data.rows);
        },
        getCols: function(element) {
            element = (!$(element).is('pre')) ? $(element).closest('pre') : element;
            return ($(element).data(this.data.cols) === undefined) ? this.cols : $(element).data(this.data.cols);
        }
    }

    $(matrix.element).each(function() {
        for (var i = 0; i < matrix.getCols(this); i++) {
            $(this).append('<div>');

            var a = $(this).children('div').last().offset().left;
            var b = $(this).children('div').last().width();
            var c = $(this).offset().left;
            var d = $(this).width();

            if (a + b > c + d) {
                break;
            }
        }

        $(this).children('div').each(function() {
            for (var i = 0; i <= matrix.getRows(this); i++) {
                matrix.scroll(this);
            }
        });
    });

    if ($(matrix.element).length > 0 && $(window).width() > 400) {
        setInterval(function() {
            $(matrix.element).each(function() {
                $(this).children('div').each(function() {
                    matrix.scroll(this);
                });
            });
        }, matrix.interval);
    }   
});