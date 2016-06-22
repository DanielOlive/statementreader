/**
 * Created by dolive on 5/30/16.
 */

var fs = require('fs');
var hbs = require('hbs');
var filenames = null;
var path = require('path')

//console.log(partialsDir);

module.exports = function(){

    var partialsDir = path.resolve(__dirname,'../../views/partials/');

    filenames = fs.readdirSync(partialsDir);
    filenames.forEach(function (filename) {
        var matches = /^([^.]+).hbs$/.exec(filename);
        if (!matches) {
            return;
        }
        var name = matches[1];
        var template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
        hbs.registerPartial(name, template);
    });
}