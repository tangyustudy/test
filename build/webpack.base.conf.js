'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js',
    vendor: ['react', 'react-dom', 'moment']
  },
  output: {
    //path: config.build.assetsRoot,
    path: path.join(__dirname, "dist"),
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },


  plugins: [
  /*
    new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        })
        */
  ],

      optimization: {
      splitChunks: {
        chunks: "initial",         // 必须三选一： "initial" | "all"(默认就是all) | "async"
        minSize: 0,                // 最小尺寸，默认0
        minChunks: 1,              // 最小 chunk ，默认1
        maxAsyncRequests: 1,       // 最大异步请求数， 默认1
        maxInitialRequests: 1,    // 最大初始化请求书，默认1
        name: () => {},              // 名称，此选项课接收 function
        cacheGroups: {                 // 这里开始设置缓存的 chunks
          priority: "0",                // 缓存组优先级 false | object |
          vendor: {                   // key 为entry中定义的 入口名称
            chunks: "initial",        // 必须三选一： "initial" | "all" | "async"(默认就是异步)
            test: /react|lodash/,     // 正则规则验证，如果符合就提取 chunk
            name: "vendor",           // 要缓存的 分隔出来的 chunk 名称
            minSize: 0,
            minChunks: 1,
            enforce: true,
            maxAsyncRequests: 1,       // 最大异步请求数， 默认1
            maxInitialRequests: 1,    // 最大初始化请求书，默认1
            reuseExistingChunk: true   // 可设置是否重用该chunk（查看源码没有发现默认值）
          }
        }
      }
    },

}
