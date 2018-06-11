require('./nightwatch_setup');

const chromedriver = require('chromedriver');

before(function(done) {
    chromedriver.start(['--url-base=/wd/hub', '--port=4444']);
    done();
});

afterEach(function(done) {
    browser.end();
    client.start(done);
});

after(function(done) {
    chromedriver.stop();
    done();
});