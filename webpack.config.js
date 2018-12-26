const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-react'],
        plugins: ['syntax-dynamic-import']
      }
    }]
  },
  output: {
    filename: 'bundle-[name].js',
    path: path.resolve(__dirname, 'public', 'build'),
    publicPath: 'build/',
    chunkFilename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  }
};
