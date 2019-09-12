const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, options) => ({

  optimization: {
    minimizer: [new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false }), new OptimizeCSSAssetsPlugin({})],
  },

  entry: {
    main:   __dirname + '/source/assets/javascripts/main.js',
    second: __dirname + '/source/assets/javascripts/components.js',
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'assets/javascripts/[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
         test: /\.(scss|sass|css)$/,
         use: [
           MiniCssExtractPlugin.loader,
           'css-loader',
           'sass-loader',
         ],
       },
       {
        test: /\.(ttf|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
       filename: 'assets/stylesheets/main.css'
     }),

    new webpack.ProvidePlugin({
       React: "react",
       ReactDOM: "react-dom",
       $: "jquery",
       jQuery: "jquery",
       "window.jQuery": "jquery"
   }),
  ],
});
