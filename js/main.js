'use strict';

(function ($) {

    let total = $('.calc__total'),
        summary = $('.calc__summary');


    $('.calc__item').click(function () {
        let key = $(this).data('num'),
            result = summary.text();

        if (key === 'Clear') {
            total.text('0');
            summary.text('');
            summary.removeClass('success');
        }
        else if (key === '=') {
            total.text(Math.round(eval(result) * 10000000) / 10000000);
            summary.addClass('success');
        }
        else if (key === '.') {
            if (summary.is('.success')) {
                summary.text('');
                summary.removeClass('success');
            }
            if (result == '') {
                summary.text('' + key);
            } else {
                summary.text(summary.text() + key);
            }
        }
        else if (key === '*' || key === '/' || key === '-' || key === '+') {
            if (summary.text() === '') {
                summary.text('0' + key);
            }
            else {
                if (summary.is('.success')) {
                    summary.text('0' + key);
                    summary.removeClass('success');
                } else {
                    summary.text(summary.text() + key)
                }
            }
        }
        else if (summary.text() === '00' || summary.text() === '0') {
            summary.text('' + key)
        }
        else {
            if (summary.is('.success')) {
                summary.text(key);
                summary.removeClass('success');
            }
            else {
                summary.text(summary.text() + key);
            }

        }
    }
    );


})(jQuery);