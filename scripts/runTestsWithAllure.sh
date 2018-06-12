#!/bin/sh

npm run startSeleniumServer
sleep 1
npm test
npm run generateReport