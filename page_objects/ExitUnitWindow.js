const locators = require(__filename.replace('.js', '.json'));
const pageObjectMethods = require('../lib/page_object_methods');

const commands = {

    locators: function() {
        return locators;
    },

    clickShowMeTheFirstDealButton: function() {
        const self = this;

        // this one uses Xpath to check for explicit text
        self.api.useXpath();
        self.api.waitForElementVisible(locators.showMeTheFirstDealButton.locator, 15000);
        self.api.click(locators.showMeTheFirstDealButton.locator);

        // default back to CSS
        self.api.useCss();

        return self;
    },

    gatherInfoHelper: function(dir, adv) {
        const self = this;

        return self;
    },

    collectTabInfo: function(dir) {
        const self = this;

        self.getAvailableTabs(function(tabs) {
            for (let index = 0; index < tabs; index++) {
                let updatedLocator = locators.advertiserTab.locator.replace('{0}', index + 1);
                self.api.click(updatedLocator);

                // TODO: replace with better wait option, some universal way of waiting for partner pages to load
                self.api.pause(9000);

                self.api.getAttribute(updatedLocator, 'data-tab-advertiser-name', function(advertiserName) {
                    self.assert.equal(advertiserName.status, 0, `Could not retrieve "data-tab-advertiser-name" from ${updatedLocator}`);
                    let advertiser = advertiserName.value;

                    // Handle the external Expedia popout
                    // ... was seen during HotelCitywide test
                    if (advertiser.includes('Expedia')) {
                        self.api.window_handles(function(results) {
                            self.api.switchWindow(results.value[2]);
                            self.api.pause(200);
                            self.captureScreenshot(`./screenshots/${dir}/${advertiser}_pageLoadResults.png`);
                            self.api.url(function(url) {
                                console.log(`URL for "Expedia" was === ${url.value}`);
                                self.api.closeWindow();
                                self.api.switchWindow(results.value[1]);
                            });
                        });
                    } 
                    // Handle the external Hotwire popout
                    // ... was seen during Flights test
                    else if (advertiser.includes('Hotwire')) {
                        // TODO: pull this out into a helper utility?
                        self.api.window_handles(function(results) {
                            self.api.switchWindow(results.value[2]);
                            self.api.pause(200);
                            self.captureScreenshot(`./screenshots/${dir}/${advertiser}_pageLoadResults.png`);
                            self.api.url(function(url) {
                                console.log(`URL for "Hotwire" was === ${url.value}`);
                                self.api.closeWindow();
                                self.api.switchWindow(results.value[1]);
                            });
                        });
                    } else {
                        self.captureScreenshot(`./screenshots/${dir}/${advertiser}_pageLoadResults.png`);
                        self.api.url(function(url) {
                            console.log(`URL for advertiser: "${advertiser}" was === ${url.value}`);
                        });
                    }
                    // TODO: better way of detecting when a popout has occurred, such as look at the warning message that a new window was opened?
                });
            }
        });

        return self;
    },

    getAvailableTabs: function(fn) {
        const self = this;

        self.api.getAttribute('ul[class*="tabs"]', 'data-tab-count', function(results) {
            self.assert.equal(results.status, 0, 'Could not retrieve "data-tab-count" attribute from ul[class*="tabs"]');
            return fn(results.value);
        });

        return self;
    },

};

module.exports = {
    commands: [ pageObjectMethods, commands ],
    elements: {}
};