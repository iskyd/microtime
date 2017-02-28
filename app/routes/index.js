'use strict'
var path = require('path');
var moment = require('moment');
var api = require('../api/timestamp.js');

module.exports = function(app) {
    app.route('/:query').get(function(req, res){
        var date = req.params.query;
        var unix = null;
        var natural = null;
        
        if (+date >= 0) {
            unix = +date;
            natural = api.unixToNat(unix);
        } 
        
        if (isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()) {
            unix = +api.natToUnix(date);
            natural = api.unixToNat(unix);
        }
        
        var dateObj = { "unix": unix, "natural": natural };
        res.send(dateObj);
    });

    app.route('/').get(function(req, res){
        res.sendFile(path.resolve('public/index.html'));
    })
}