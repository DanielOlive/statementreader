'use strict';
require('./account-list.css');
const $ = require('../../../node_modules/jquery/dist/jquery.min');

module.exports = (function () {

    let totalcount = 0;
    let defaultSetting = {
        list: '.transactions-list',
        checkbox: '.transactions-list__item-checkbox-input',
        toggle: '.js-showSelection',
        totalAmount: '.js-total-amount'
    };
    return {

        setup: function () {

            $(defaultSetting.list).on('change', defaultSetting.checkbox, (e) => {

                let item = $(e.target);
                let val = parseFloat(item.attr('data-amount'));

                if (item.prop('checked')) {
                    totalcount += val;
                    item.parent().parent().addClass('active');
                } else {
                    totalcount -= val;
                    item.parent().parent().removeClass('active');
                }

                $(defaultSetting.totalAmount).html('£' + totalcount.toFixed(2))
            });


            $(defaultSetting.toggle).on('click', ()=> {
                $('.transactions-list__item:not(.active)').toggle();
                $('.transactions-list__item-checkbox-input').toggle();
            })
        }
    }


})();