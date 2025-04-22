// ReadableStream polyfill
if (typeof ReadableStream === 'undefined') {
  global.ReadableStream = class ReadableStream {
    constructor() {
      // Empty constructor
    }
    getReader() {
      return {
        read: () => Promise.resolve({ done: true, value: undefined }),
        releaseLock: () => {},
      };
    }
  };
}

module.exports = {}; 