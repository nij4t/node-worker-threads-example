const { Worker, isMainThread, parentPort } = require('worker_threads');

const worker = new Worker('./worker.js')

const a = () => { return 5 }

for(let i=0; i<10; i++)
	worker.postMessage(new Date())

worker.on("message", msg => {
  console.log(msg)
});
