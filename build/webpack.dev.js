const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  // devtool: "cheap-module-eval-source-map",
  devtool: "none",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    open: true,
    hot: true,
    // hotOnly: true,
    proxy: {
      "/web/api": {
        target: "http://localhost:3008",
      },
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
