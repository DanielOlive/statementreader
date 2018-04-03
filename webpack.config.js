const path = require('path')
const webpack = require('webpack')

//plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const PrettierPlugin = require("prettier-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './app/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/js')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                    use: ["css-loader", "postcss-loader"]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                    use: ["css-loader", "postcss-loader", "sass-loader"]
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                  "babel-loader"
                  ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
              }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin("./css/styles.css"),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development
            host: 'localhost',
            port: 3000,
            // Ghost Blog proxy Server endpoint
             proxy: 'http://localhost:8080'
          },
          {
            reload: true
          }
        ),
        HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
            template: './app/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new PrettierPlugin({
            semi: false, 
            extensions: [ ".js", ".jsx" ]
        })
    ]
}
