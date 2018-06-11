const locators = require(__filename.replace('.js', '.json'));
const pageObjectMethods = require('../lib/page_object_methods');

const commands = {

    locators: function() {
        return locators;
    },

    navigationPath: function() {
        return [
            {
                page: 'HotelCitywide',
                action: 'goToPage'
            },
            {
                page: 'HotelCitywide',
                action: 'waitForPageToLoad'
            }
        ];
    },

    goToPage: function() {
        return this.navigate();
    },

    enterCity: function(city = 'Madrid, Spain') {
        const self = this;

        // element should be visible first
        self.api.waitForElementVisible(locators.cityInputField.locator, 15000);
        // clear out any prior data
        self.api.clearValue(locators.cityInputField.locator);
        // send the desired text to the input field
        self.api.setValue(locators.cityInputField.locator, city);

        return self;
    },

    changeCheckInDate: function(date) {
        const self = this;

        // element should be visible first
        self.api.waitForElementVisible(locators.checkInDateField.locator, 15000);
        self.api.execute(function(l, d) {
            $(`${l}`).val(`${d}`);
        }, [ locators.checkInDateField.locator, date ], () => {});

        return self;
    },

    changeCheckOutDate: function(date) {
        const self = this;

        // element should be visible first
        self.api.waitForElementVisible(locators.checkOutDateField.locator, 15000);
        self.api.execute(function(l, d) {
            $(`${l}`).val(`${d}`);
        }, [ locators.checkOutDateField.locator, date ], () => {});

        return self;
    },

    updateNumberOfGuests: function(numGuests = 1) {
        const self = this;

        // element should be visible first
        self.api.waitForElementVisible(locators.numberOfGuestsSelect.locator, 15000);
        // update the select option value
        self.api.setValue(locators.numberOfGuestsSelect.locator, numGuests);

        return self;
    },

    updateNumberOfRooms: function(numRooms = 1) {
        const self = this;

        // element should be visible first
        self.api.waitForElementVisible(locators.numberOfRoomsSelect.locator, 15000);
        // update the select option value
        self.api.setValue(locators.numberOfRoomsSelect.locator, numRooms);

        return self;
    },

    searchForHotels: function() {
        const self = this;

        // click the search hotels button
        self.api.click(locators.hotelCitywideSearchButton.locator);

        return self;
    },

    selectFlightsForm: function() {
        const self = this;
        
        self.api.useXpath();
        self.api.click(locators.flightsFormTab.locator);

        // reset css strategy
        self.api.useCss();

        return self;
    }

};

module.exports = {
    commands: [ pageObjectMethods, commands ],
    url: 'https://www.clicktripz.com/test.php',
    elements: {}
};