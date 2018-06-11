const moment = require('moment');

module.exports = {

    nextWeek: function(dayOfTheWeek = 'Monday') {
        let numericDayOfTheWeek;
        switch(dayOfTheWeek) {
            default:
            case 'Monday':
                numericDayOfTheWeek = 1;
                break;
            case 'Tuesday':
                numericDayOfTheWeek = 2;
                break;
            case 'Wednesday':
                numericDayOfTheWeek = 3;
                break;
            case 'Thursday':
                numericDayOfTheWeek = 4;
                break;
            case 'Friday':
                numericDayOfTheWeek = 5;
                break;
            case 'Saturday':
                numericDayOfTheWeek = 6;
                break;
            case 'Sunday':
                numericDayOfTheWeek = 7;
                break;
        }
        return moment().day(numericDayOfTheWeek + 7).format('MM/DD/YYYY');
    }

};