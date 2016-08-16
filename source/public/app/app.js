/**
 * Created by dolive on 5/31/16.
 */

require('./sass/main.css');
var accountList = require('./components/account-list/account-list');
var globalnavigation = require('./components/global-navigation/global-navigation');
var $ = require('../node_modules/jquery/dist/jquery.min');


$(document).ready(function () {
    // Handler for .ready() called.
    var totalcount = 0;

    $('.transactions-list').on('change', '.transactions-list__item-checkbox-input', function (e) {

        var val = parseFloat(e.target.attributes['data-amount'].value);
        var item = $(e.target);
        if (e.target.checked) {
            totalcount += val;
            item.parent().parent().addClass('active');
        } else {
            totalcount -= val
            item.parent().parent().removeClass('active');
        }

        $('.total-amount').html('£' + totalcount.toFixed(2))
    });

    /*$('.js-import-file_link').on('change',function(e){
        console.log(e.target.files[0].name);
    });*/

    $('.js-showSelection').on('click', function () {
        $('.transactions-list__item:not(.active)').toggle();
        $('.transactions-list__item-checkbox-input').toggle();
    })

});