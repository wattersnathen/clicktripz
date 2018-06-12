const { spawn } = require('child_process');
const server = spawn('java', [
  '-Dwebdriver.chrome.driver=node_modules/chromedriver/bin/chromedriver',
  '-jar', './resources/standalone_2.53.0.jar',
  '-port', '4444'
]);

server.on('close', code => console.log('exited selenium server with code: ' + code));