const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

const rules = [
  // babel-loader
  {
    test: /\.jsx?$/,
    include: /src/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  // css / scss loader
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: path.resolve(__dirname)
          }
        }
      },
      'sass-loader'
    ]
  },
  // stylus-loader
  {
    test: /\.styl$/,
    exclude: /node_modules/,
    use: [
      devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      { loader: 'css-loader' },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: path.resolve(__dirname)
          }
        }
      },
      { loader: 'stylus-loader' }
    ]
  },
  // fonts
  {
    test: /\.(woff|woff2)$/,
    use: {
      loader: 'url-loader',
      options: {
        name: 'fonts/[hash].[ext]',
        limit: 5000,
        mimetype: 'application/font-woff'
      }
    }
  },
  {
    test: /\.(ttf|eot|svg)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: 'fonts/[hash].[ext]'
      }
    }
  }
]

module.exports = rules
