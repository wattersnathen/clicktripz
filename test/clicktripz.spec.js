require('../setup/mocha_setup');

const dates = require('../lib/dateMaps');

describe('ClickTripz Test Suite', function() {

    it('Hotel Citywide Experience', function(done) {
        // Search for Hotel initial steps
        on.HotelCitywide()
            .navigateToPage()
            .enterCity('Denver, CO')
            .changeCheckInDate(dates.nextWeek('Friday'))
            .changeCheckOutDate(dates.nextWeek('Sunday'))
            .updateNumberOfGuests(2)
            .updateNumberOfRooms()
            .searchForHotels()
            .switchToExitUnitWindow()
            .captureScreenshot('./screenshots/hotelCityWide/postSwitchingToExitUnitWindow.png');

        // Handle initial loading of the exit unit window
        on.ExitUnitWindow()
            .clickShowMeTheFirstDealButton()
            .maximizeWindow()
            .captureScreenshot('./screenshots/hotelCityWide/postClickingShowMeTheFirstDeal.png');

        // collect tab data, place screenshots in the 'hotelCityWide' directory
        on.ExitUnitWindow().collectTabInfo('hotelCityWide');

        client.start(done);
    });

    it('Flights', function(done) {
        // search for flights initial steps
        on.Flights()
            .navigateToPage()
            .updateFromAirport('DEN')
            .updateToAirport('LAX')
            .changeDepartureDate(dates.nextWeek('Friday'))
            .changeReturnDate(dates.nextWeek('Sunday'))
            .updateNumberOfTravelers(2)
            .searchForFlights()
            .switchToExitUnitWindow()
            .captureScreenshot('./screenshots/flights/postSwitchingToExitUnitWindow.png');
        
        // handle initial loading of the exit unit window
        on.ExitUnitWindow()
            .clickShowMeTheFirstDealButton()
            .maximizeWindow()
            .captureScreenshot('./screenshots/flights/postClickingShowMeTheFirstDeal.png');

        // collect tab data, place screenshots in the 'flights' directory
        on.ExitUnitWindow().collectTabInfo('flights');

        client.start(done);
    });

});