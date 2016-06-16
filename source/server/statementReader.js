/**
 * Created by dolive on 5/20/16.
 */
var csv = require('csv-parser'),
    fs = require('fs'),
    _ = require('underscore'),
    path = require('path'),
    config = require('./config'),
    listData = [],
    self,
    json = [],
    check = /(LONDON|PAYMENT RECEIVED)/,
    stream = csv({
        raw: false,     // do not decode to utf-8 strings
        separator: ',', // specify optional cell separator
        quote: '"',     // specify optional quote character
        escape: '"',    // specify optional escape character (defaults to quote value)
        newline: '\n',  // specify a newline character
        headers: ['Date', 'Reference', 'Amount', 'Retailer', 'ProcessDate'] // Specifing the headers
    });

module.exports = function () {

    return {
        importCsvFile:function(_file, _callback){

        var csvData =null;
        self=this;

        self.convertCSVData(_file, function(data){
            csvData = data;
            self.getJsonFile(function(jsonData){
                self.mergedata(jsonData, csvData);
            })
        });

        },
        mergedata:function(_old, _new){
            console.log(_new);
        },
        convertCSVData: function (_file, _callback) {

            self = this;

            if (listData.length) {
                _callback(listData);
                return;
            }

            fs.createReadStream(_file)
                .pipe(stream)
                .on('data', function (data) {
                    var arr = data.Date.split('/'),
                        dateObj = new Date(arr[2], arr[1] - 1, arr[0]);
                    data.sortDate = dateObj;
                    json.push(data);
                })
                .on('end', function (data) {
                    listData = self.sortDate(json);
                    _callback(listData);

                    /*self.writeJsonFile(
                     JSON.stringify({
                     account: listData
                     }, null, 4));*/
                });

            //TODO:create an error handler too

        },

        /*
                loadData: function (_file, _callback) {

                    self = this;

                    if (listData.length) {
                        _callback(listData);
                        return;
                    }

                    fs.createReadStream(_file)
                        .pipe(stream)
                        .on('data', function (data) {
                            var arr = data.Date.split('/'),
                                dateObj = new Date(arr[2], arr[1] - 1, arr[0]);
                            data.sortDate = dateObj;
                            json.push(data);
                        })
                        .on('end', function (data) {
                            listData = self.sortDate(json);
                            _callback(listData);

                            /!*self.writeJsonFile(
                                JSON.stringify({
                                    account: listData
                                }, null, 4));*!/
                        });

                    //TODO:create an error handler too

                },
        */
        sortDate: function (data) {

            var sortedData = _.sortBy(data, function (o) {
                return o.sortDate;
            });
            var arr = [];
            sortedData.forEach(function (item) {
                if (!self.filterCheck(item.Retailer)) {
                    arr.push(item);
                }
            })
            return arr;
        },
        filterCheck: function (arr) {
            if (arr.toString().match(check)) {
                return true;
            }
        },
        writeJsonFile: function (data) {
            console.log('write');
            fs.writeFile(config.database, data, (err) => {
                if (err) throw err;
                console.log('It\'s saved!');
            });
        },
        getJsonFile: function (_callback) {

            fs.stat(config.database, (err, res) => {

                if (err) {
                    console.log('Please Import a data file');
                } else {

                    //loadfile
                    console.log('load file');
                    fs.readFile(config.database, 'UTF8', (err, data) => {
                        if (err) throw err;
                        //console.log(data)
                        _callback(JSON.parse(data));
                    });
                }

            })
        }
    }
}