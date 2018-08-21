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
    extensions: ['.js', '.jsx', '.scss', '.css'],
    alias: {
      '@styles': path.resolve(__dirname, '..', 'src/styles'),
      '@pages': path.resolve(__dirname, '..', 'src/pages')
    }
  },
  module: {
    rules: rules
  },
  plugins: plugins
}
