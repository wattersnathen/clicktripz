const nightwatch = require('nightwatch');

const settings = require('../nightwatch.conf');
settings.desiredCapabilities = settings.test_settings.default.desiredCapabilities;

global.client = nightwatch.initClient(settings);
global.browser = global.client.api();
global.on = browser.page;