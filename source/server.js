/**
 * Created by dolive on 5/20/16.
 */
var config = require('./server/config');
var statementReader = require('./server/services/statementReader');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var hbs = require('hbs');
var reader = statementReader();
var partialLoader = require('./server/services/partial-loader')();
var multer = require('multer');
var upload = multer({dest: './server/uploads/'});


app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'hbs');


app.post('/upload', upload.single('avatar'), function (req, res) {

    var filepath = req.file.destination + req.file.filename;

    reader.importCSVFile(filepath, function (val) {
        //res.redirect('/');
    });

    res.redirect('/');
    res.status(204).end();
});

app.get('/', function (req, res) {

    reader.getJsonFile(function (data) {
        var obj = {
            data: {
                list: data.account,
                title: 'Transactions'
            }
        };
        res.render('index', obj);
    });
});

var server = app.listen(3000, function () {
    console.log('Server started on port ' + server.address().port + '...');
});
