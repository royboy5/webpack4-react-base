const path = require('path')

const rules = require('./rules')
const plugins = require('./plugins')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '..', 'src/index.js')
  },
  output: {
    filename: './js/[name].bundle.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  module: {
    rules: rules
  },
  plugins: plugins
}
