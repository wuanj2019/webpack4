const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const webpackMerge = require("webpack-merge");
const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.prod");

const commonConfig = {
  entry: {
    main: path.resolve(__dirname, "../src/main.js"),
  },
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /.\js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "font",
              publicPath: "/font",
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img",
              publicPath: "/img",
              limit: 4096,
            },
          },
        ],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attributes: true,
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
  ],

  externals: {
    vue: "Vue",
  },
};

module.exports = env => {
  if (env && env.production) {
    return webpackMerge(commonConfig, prodConfig);
  } else {
    return webpackMerge(commonConfig, devConfig);
  }
};
