const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const servicenowConfig = require('./servicenow.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ROOT_PATH = path.join(__dirname, '../')

const DEFAULTS = { ASSET_SIZE_LIMIT: 10000 }
const CONFIG = { ...DEFAULTS, ...servicenowConfig }

module.exports = {
  entry: {
    [CONFIG.JS_API_PATH + 'app']: ['./src/index.js'],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: 'all',
          minChunks: 1,
          maxSize: 0,
          name: 'vendor',
          test: /([\\/]node_modules[\\/])|(assets\/)/,
          priority: -10,
        },
      },
    },
  },

  output: {
    publicPath: '/',
    path: path.join(ROOT_PATH, 'dist/'),
    filename: '[name].js',
    chunkFilename: CONFIG.JS_API_PATH + '[name].js',    
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  rules: {
    svg: {
      test: /\.svg$/,
      loader: 'svg-url-loader',
      options: {
        noquotes: true,
      },
      //exclude: /node_modules/,
    },

    css: {
      test: /\.(css)$/,
      use: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                publicPath: (resourcePath, context) => {
                    // publicPath is the relative path of the resource to the context
                    // e.g. for ./css/admin/main.css the publicPath will be ../../
                    // while for ./css/main.css the publicPath will be ../
                    return path.relative(path.dirname(resourcePath), context) + '/';
                },
            },
        },
        'css-loader'
      ]
      //use: ['style-loader', 'css-loader'],
    },
  
    img: {
      test: /\.(png|jpg|gif|)$/,
      loader: 'url-loader',
      options: {
        limit: CONFIG.ASSET_SIZE_LIMIT,
        name: CONFIG.IMG_API_PATH + '[name].[ext]',
      },
    },
    assets: {
      test: /\.(woff|woff2|ttf|eot|txt)$/,
      loader: 'url-loader',
      options: {
        limit: CONFIG.ASSET_SIZE_LIMIT,
        name: CONFIG.ASSETS_API_PATH + '[name].[ext]',
      },
    },
    scss: {
      test: /.(sass|scss)$/,
      use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'sass-loader' },
      ]
    },

    jsx(args) {
      args = args || {}
      var emitWarning = false
      if (args.withHot) {
        // report eslint errors as warnings so hot reloads are not prevented
        emitWarning = true
      }

      return {
        include: [path.join(ROOT_PATH, 'src')],
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /(node_modules)/,
        enforce: 'pre',
        use: [          
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
            options: {
              emitWarning,
            },
          },
          {
            loader: 'source-map-loader',
          },
        ],
      }
    },
  },

  plugins: {    
    createIndexHtml() {
      return createHtmlPluginInstance({
        filename: 'index.html',
        title: '',
        chunks: 'app',
        template: 'src/index.html',
      })
    },
    miniCssExtractPlugin() {
      return new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
     })
    },
  },
}

function createHtmlPluginInstance(cfg) {
  cfg.inject = true
  return new HtmlWebPackPlugin(cfg)
}
