/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// Polyfill for ReadableStream if it's not defined
if (typeof ReadableStream === 'undefined') {
  // Simple mock implementation of ReadableStream
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

// You can delete this file if you're not using it