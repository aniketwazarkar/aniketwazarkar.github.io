// This webpack config is not directly used by Gatsby
// It serves as a reference for configuration that's applied in gatsby-node.js
module.exports = {
  module: {
    rules: [
      {
        test: /node_modules\/swiper\/.*\.js$/,
        use: 'null-loader',
      },
    ],
  },
  resolve: {
    alias: {
      swiper$: 'swiper/swiper-bundle.min.js',
    },
  },
  externals: [
    {
      'swiper/esm/components/core/core-class.js': 'swiper',
    },
  ],
}; 