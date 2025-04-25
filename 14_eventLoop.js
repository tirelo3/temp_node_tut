const fs = require('fs');
const http = require('http');

console.log('Script started');

// ---------------------------
// 1. Microtasks (Highest Priority)
// ---------------------------
process.nextTick(() => console.log('process.nextTick 1'));
Promise.resolve().then(() => console.log('Promise 1'));

// ---------------------------
// 2. Timers Phase
// ---------------------------
setTimeout(() => {
  console.log('setTimeout 0ms (Timers Phase)');
  
  // Nested microtask
  process.nextTick(() => console.log('process.nextTick in setTimeout'));
}, 0);

const interval = setInterval(() => {
  console.log('setInterval 100ms (Timers Phase)');
}, 100);

// ---------------------------
// 3. Check Phase (setImmediate)
// ---------------------------
setImmediate(() => {
  console.log('setImmediate (Check Phase)');
  
  // Nested timer
  setTimeout(() => {
    console.log('setTimeout in setImmediate');
  }, 0);
});

// ---------------------------
// 4. Poll Phase (I/O Operation)
// ---------------------------
fs.readFile(__filename, (err, data) => {
  console.log('fs.readFile callback (Poll Phase)');
  
  // Microtasks inside I/O
  process.nextTick(() => console.log('process.nextTick in I/O'));
  Promise.resolve().then(() => console.log('Promise in I/O'));

  // Timers and Immediate inside I/O
  setTimeout(() => console.log('setTimeout in I/O'), 0);
  setImmediate(() => console.log('setImmediate in I/O'));
});

// ---------------------------
// 5. Close Callbacks
// ---------------------------
const server = http.createServer((req, res) => {});
server.on('close', () => {
  console.log('Server close event (Close Phase)');
});
server.close();

// ---------------------------
// 6. Cleanup
// ---------------------------
setTimeout(() => {
  clearInterval(interval);
  console.log('\nCleaned up interval');
}, 250);

console.log('Script end');