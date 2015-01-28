'use strict';

jQuery(function($) {
    /*
     * 3D-print Effect Scrolling Text
     * ------------------------------
     */

    var print = {
        element: '.print',
        interval: 10,
        // url: 'ouro.txt',
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
            start: 10,
        },
        pos: {
            col: 0, 
            row: 0
        },
        setPosCount: function() {
            this.pos.row = this.rows.count - 1;
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
                var div = $(print.element).children('div').eq(print.pos.row);
                var spanChar = randChar(1);

                if (print.pos.row < 0) {
                    print.pos.full = true;
                    print.setPosCount();
                    print.setHighlightStart();
                }

                if (!print.pos.full) {
                    div.append('<span>');
                    div.children().last().text(spanChar).addClass('highlight');
                    div.children('span:nth-last-child(2)').removeClass('highlight');
                    print.pos.col++;
                } else {
                    div.children('span').eq(print.pos.col).text(spanChar).addClass('highlight');
                    div.children('span').eq(print.pos.col - 1).removeClass('highlight');
                    print.pos.col++;
                }

                if (print.pos.col >= print.highlight.start && print.data.content[print.pos.row].substr(print.pos.col - print.highlight.start, 1) === print.data.character) {
                    div.children('span').eq(print.pos.col).addClass('letter');
                } else {
                    div.children('span').eq(print.pos.col).removeClass('letter');
                }

                if (!print.pos.full) {
                    if (div.children('span').last().offset().left > $(window).width()) {
                        print.pos.row--;
                        print.pos.col = 0;
                        print.highlight.end = div.children('span').length;
                    }
                } else {
                    if (print.pos.col >= $(div).children('span').length) {
                        print.pos.row--;
                        print.pos.col = 0;
                    }
                }
            }, print.interval);
        }, error : function() {
            $(print.element).remove();
        } 
    });
});