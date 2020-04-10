const { Worker } = require("worker_threads");

const workerFile = "./worker.js";
const workerPool = [];

for (let i = 0; i < 10; i++) {
  workerPool[i] = new Worker(workerFile);
  workerPool[i].postMessage(i);
}

workerPool.map(w => w.on("message", (msg) => {
  console.log(msg);
}));
