'use strict';
var moment = require('moment');

module.exports = {
    natToUnix: function(date) {
        // Conver from natural date to unix timestamp
        return moment(date, "MMMM D, YYYY").format("X");
    },
    unixToNat: function(unix) {
        // Convert unix timestamp to natural date
        return moment.unix(unix).format("MMMM D, YYYY");
    }
};