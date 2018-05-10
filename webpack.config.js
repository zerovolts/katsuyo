const path = require("path")
const webpack = require("webpack")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "katsuyo.js",
    library: "katsuyo",
    libraryTarget: "umd",
    globalObject: "this" // replaces the reference to window: https://github.com/webpack/webpack/issues/6642
  },
  module: {
    rules: [{
      test: /.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    }]
  }
}