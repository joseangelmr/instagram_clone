const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const bourbon = require('node-bourbon').includePaths;


module.exports = {
    devtool: 'cheap-module-eval-source-map',
    devServer: {hot: true},
    entry: [
        'webpack-hot-middleware/client',
        './client/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                exclude: [/node_modules/, /styles/],
                loaders: ['babel'],
                include: [
                    path.resolve(__dirname, "client"),
                    path.resolve(__dirname, "common"),
                ]
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass?includePaths[]=' + bourbon
            },
            {
                include: [
                    path.resolve(__dirname, "client/fonts")
                ],
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                include: [
                    path.resolve(__dirname, "client/fonts")
                ],
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },

            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            template: './client/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};