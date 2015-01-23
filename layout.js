'use strict';

jQuery(function($) {
    /*
     * Useful Functions
     * ----------------
     */

    function randChar(count) {
        return Math.random().toString(36).substr(3, count);
    }

    function randRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $.fn.reverse = [].reverse;

    /*
     * Nav Buttons
     * -----------
     */

    $('.nav').click(function() {
        $('html, body').animate({ 
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);

        return false;
    });

    /*
     * 3D-print Effect Scrolling Text
     * ------------------------------
     */

    var print = {
        element: '.print',
        interval: 100,
        url: 'ouro.txt',
        full: false,
        data: {
            character: '0', 
            content: [],
            size: 0
        },
        rows: {
            count: 9,
        },
        highlight: {
            start: 0,
        },
        positions: {
            span: 0
        },
        setPosCount: function() {
            this.positions.div = this.rows.count - 1;
        },
        setHighlightStart: function() {
            this.highlight.start = randRange(10, this.highlight.end - this.data.size);
        }
    };

    print.setPosCount();

    $.ajax({
        url : print.url,
        dataType : 'text',
        success : function(data) {
            print.data.content = data.split(/\n/);
            print.data.size = print.data.content[0].length;

            $(print.element).each(function() {
                for (var i = 0; i < print.rows.count; i++) {
                    $(this).append('<div>');
                }

                $(this).children('div').each(function() {
                    $(this).append('<span>');
                    $(this).children().last().text('.');
                });
            });

            var setText = setInterval(function() {
                var div = $(print.element).children('div').eq(print.positions.div);
                var spanChar = randChar(1);

                if (print.positions.div < 0) {
                    print.positions.full = true;
                    print.setPosCount();
                    print.setHighlightStart();
                }

                if (!print.positions.full) {
                    div.append('<span>');
                    div.children().last().text(spanChar).addClass('highlight');
                    div.children('span:nth-last-child(2)').removeClass('highlight');
                    print.positions.span++;

                } else {
                    div.children('span').eq(print.positions.span).text(spanChar).addClass('highlight');
                    div.children('span').eq(print.positions.span - 1).removeClass('highlight');
                    print.positions.span++;
                }

                if (print.positions.span >= print.highlight.start && print.data.content[print.positions.div].substr(print.positions.span - print.highlight.start, 1) === print.data.character) {
                    div.children('span').eq(print.positions.span).addClass('letter');
                } else {
                    div.children('span').eq(print.positions.span).removeClass('letter');
                }

                if (!print.positions.full) {
                    if (div.children('span').last().offset().left > $(window).width()) {
                        print.positions.div--;
                        print.positions.span = 0;
                        print.highlight.end = div.children('span').length;
                    }
                } else {
                    if (print.positions.span >= $(div).children('span').length) {
                        print.positions.div--;
                        print.positions.span = 0;
                    }
                }
            }, print.interval);
        }, error : function() {
            $(print.element).remove();
        } 
    });

    /*
     * Matrix-style Scrolling Text
     * ---------------------------
     */

    var matrix = {
        element: '.matrix',
        columns: {
            height: 9,
            count: 13
        },
        interval: 115,
        scroll: function(div) {
            var c = randRange(100,250);
            var x = randRange(100,999);
            var y = randRange(100,999);
            var z = randRange(100,999);

            $(div).prepend('<span>t:' + c + ' x:' + x + ' y:' + y + ' z:' + z + '<br />');

            if (randRange(0,9999) % (42 * 2) == 0) {
                $(div).children('span').first().addClass('highlight');
            }

            if ($(div).children('span').length > matrix.columns.height) {
                $(div).children('span').last().remove();
            }
        },
    }

    $(matrix.element).each(function() {
        for (var i = 0; i <= matrix.columns.count; i++) {
            $(this).append('<div>');
        }

        $(this).children('div').each(function() {
            for (var i = 0; i <= matrix.columns.height; i++) {
                matrix.scroll(this);
            }
        });
    });

    if ($(matrix.element).length > 0 && $(window).width() > 400) {
        setInterval(function() {
            $(matrix.element).children('div').each(function() {
                matrix.scroll(this);
            });
        }, matrix.interval);
    }
});