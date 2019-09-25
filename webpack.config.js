const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");

module.exports = (env, options) => ({
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  entry: {
    main: __dirname + "/source/assets/javascripts/main.js",
    luca_tab_switcher:
      __dirname +
      "/source/assets/javascripts/components/luca-tab-switcher/index.js",
    date_picker:
      __dirname +
      "/source/assets/javascripts/components/luca-date-picker/index.js"
  },
  output: {
    path: __dirname + "/.tmp/dist",
    filename: "assets/javascripts/[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              includePaths: [
                path.resolve(__dirname, "node_modules/bourbon/core/"),
                path.resolve(__dirname, "source")
              ]
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader",
        options: {
          outputPath: "/assets/images"
        }
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/stylesheets/[name].css"
    }),

    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
});
