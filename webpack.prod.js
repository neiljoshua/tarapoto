var merge = require('webpack-merge');
var path = require('path');
var common = require('./webpack.common.js');
var TerserPlugin = require('terser-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(),new OptimizeCSSAssetsPlugin({})]
  },
  devtool: 'source-map'
});
