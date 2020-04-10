const { parentPort } = require('worker_threads')
const { time } = require('./lib.js')

parentPort.on("message", msg => {
  parentPort.postMessage(`Worker #${msg}: ${time()}`)
});
