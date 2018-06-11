# Install

* `git clone https://github.com/wattersnathen/clicktripz.git`
* `cd clicktripz`
* `npm install`

# Running
* `npm test`
* `npm run generateReport`
  * If the server hosting the Allure report is hanging: change the domain to `localhost` instead of the IP Address it provides

# Notes
* Was developed on a Windows Machine
* Recently the pop under started showing a different window being opened: `pseudo_window_redirect.php?...` is now in the URL, at least on the last few local runs

# Choosing Nightwatch.js
* Well documented API
* Familiarity
* Comes with its own design model around page objects - one less item to think about during new framework construction