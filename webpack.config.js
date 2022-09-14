const path = require("path");
const { VueLoaderPlugin } = require('vue-loader');

const config = {
  entry: "./src/main.js",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        loader: 'sass-loader'
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

module.exports = config;