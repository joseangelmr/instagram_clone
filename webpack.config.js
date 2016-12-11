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
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                include: [
                    path.resolve(__dirname, "./client/fonts")
                ],
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                include: [
                    path.resolve(__dirname, "./client/fonts")
                ],
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                include: [
                    path.resolve(__dirname, "./client/images")
                ],
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
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