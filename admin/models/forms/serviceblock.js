/**
 * Created by Administrator on 06.07.2016.
 *
 * to verify validity (no digits)
 */
jQuery(function() {
    document.formvalidator.setHandler('heading', function (value) {
            regex=/^[^0-9]+$/;
            return regex.test(value);
        });
});