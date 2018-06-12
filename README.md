# Install

* `git clone https://github.com/wattersnathen/clicktripz.git`
* `cd clicktripz`
* `npm install`

# Running Locally
* `./scripts/runTestsWithAllure.sh`
  * If the server hosting the Allure report is hanging: change the domain to `localhost` instead of the IP Address it provides

# Running via Docker
* `docker build -t wattersnathen/clicktripz .`
* `docker run -p 9999:9999 -d wattersnathen/clicktripz`
* Give it a couple minutes then visit `localhost:9999` or view the Docker logs and wait for: `Server started at <http://<some ip>:9999/>. Press <Ctrl+C> to exit
` to show up in the log
* Note

# Notes
* Recently the pop under started showing a different window being opened: `pseudo_window_redirect.php?...` is now in the URL, at least on the last few local runs
  * This is causing the tests to fail now

# Choosing Nightwatch.js
* Well documented API
* Familiarity
* Comes with its own design model around page objects - one less item to think about during new framework construction