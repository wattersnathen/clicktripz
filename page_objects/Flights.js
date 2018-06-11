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
                action: 'navigateToPage'
            },
            {
                page: 'HotelCitywide',
                action: 'selectFlightsForm'
            },
            {
                page: 'Flights',
                action: 'waitForPageToLoad'
            }
        ];
    },

    updateFromAirport: function(airport) {
        const self = this;

        self.api.waitForElementVisible(locators.fromAirport.locator, 15000);
        self.api.clearValue(locators.fromAirport.locator);
        self.api.setValue(locators.fromAirport.locator, airport);
        return self;
    },

    updateToAirport: function(airport) {
        const self = this;

        self.api.waitForElementVisible(locators.toAirport.locator, 15000);
        self.api.clearValue(locators.toAirport.locator);
        self.api.setValue(locators.toAirport.locator, airport);
        return self;
    },

    changeDepartureDate: function(date) {
        const self = this;
        
        self.api.waitForElementVisible(locators.departureDate.locator, 15000);
        self.api.execute(function(l, d) {
            $(`${l}`).val(`${d}`);
        }, [ locators.departureDate.locator, date ], () => {});
        return self;
    },

    changeReturnDate: function(date) {
        const self = this;

        self.api.waitForElementVisible(locators.returnDate.locator, 15000);
        self.api.execute(function(l, d) {
            $(`${l}`).val(`${d}`);
        }, [ locators.returnDate.locator, date ], () => {});
        return self;
    },

    updateNumberOfTravelers: function(numTravelers = 1) {
        const self = this;

        self.api.waitForElementVisible(locators.numberOfTravelersSelect.locator, 15000);
        self.api.setValue(locators.numberOfTravelersSelect.locator, numTravelers);
        return self;
    },

    searchForFlights: function() {
        const self = this;

        self.api.click(locators.searchFlightsButton.locator);
        return self;
    }

};

module.exports = {
    commands: [ pageObjectMethods, commands ],
    elements: {}
};