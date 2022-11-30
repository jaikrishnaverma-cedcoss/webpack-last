const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './dist/main.js',
    output: 
           {
              path: path.resolve(__dirname, 'dist'),
              filename:'main.js',
           },
    plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
    module: {
        rules: [{ test: /\.css$/, use: 'css-loader' }],
      },
  
}