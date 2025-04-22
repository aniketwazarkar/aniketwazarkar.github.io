// ReadableStream polyfill
class MockReadableStream {
  constructor() {
    // Empty constructor
  }
  getReader() {
    return {
      read: () => Promise.resolve({ done: true, value: undefined }),
      releaseLock: () => {},
    };
  }
}

// Set the ReadableStream in the global scope
if (typeof global !== 'undefined') {
  if (typeof global.ReadableStream === 'undefined') {
    global.ReadableStream = MockReadableStream;
  }
}

// Set the ReadableStream in the window scope for browser environment
if (typeof window !== 'undefined') {
  if (typeof window.ReadableStream === 'undefined') {
    window.ReadableStream = MockReadableStream;
  }
}

// Set the ReadableStream in the current scope
if (typeof ReadableStream === 'undefined') {
  global.ReadableStream = MockReadableStream;
}

module.exports = { MockReadableStream }; 