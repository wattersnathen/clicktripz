require('./nightwatch_setup');

// to switch back to standalone chrome driver
// const chromedriver = require('chromedriver');

// before(function(done) {
//     chromedriver.start(['--url-base=/wd/hub', '--port=4444', '--headless', '--disable-gpu', '--no-sandbox']);
//     done();
// });

// after(function(done) {
//     chromedriver.stop();
//     done();
// });

beforeEach(function() {
    console.log(`~~~~~Starting test: ${this.currentTest.fullTitle()}`);
});

afterEach(function(done) {
    console.log(`~~~~~Finished test: ${this.currentTest.fullTitle()}`);
    if (this.currentTest.state && this.currentTest.state === 'failed') {
        console.log('found error:', this.currentTest.err);
    }
    browser.end();
    client.start(done);
});