var path = require('path');
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /images/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `${packageName.replace('@', '')}`;
          },
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/images/', to: 'images/' },
        { from: 'src/videos/', to: 'videos/' }
      ],
    }),
  ]
};
