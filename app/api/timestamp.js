'use strict';
var moment = require('moment');

module.exports = {
    natToUnix: function(date) {
        return moment(date, "MMMM D, YYYY").format("X");
    },
    unixToNat: function(unix) {
        return moment.unix(unix).format("MMMM D, YYYY");
    }
};