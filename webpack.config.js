const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'],
  },
  plugins: [new CleanWebpackPlugin(), new CopyPlugin(['res']), new MiniCssExtractPlugin()],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
  },
};
