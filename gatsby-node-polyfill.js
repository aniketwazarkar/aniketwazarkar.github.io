// This file gets required by netlify.toml before running Gatsby

// Define ReadableStream globally before any Gatsby APIs run
if (typeof global.ReadableStream === 'undefined') {
  global.ReadableStream = class ReadableStream {
    constructor() {}
    getReader() {
      return {
        read: () => Promise.resolve({ done: true, value: undefined }),
        releaseLock: () => {},
      };
    }
  };
}

// Force the Node.js module cache to include our polyfill
Object.defineProperty(global, 'ReadableStream', {
  value: global.ReadableStream,
  writable: false,
  configurable: false,
});

module.exports = {}; 