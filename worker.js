const { parentPort } = require('worker_threads')
const fn = require('./lib.js')

parentPort.on("message", msg => {
  parentPort.postMessage(fn(msg))
});
