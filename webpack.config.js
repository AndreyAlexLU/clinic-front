const path = require('path');
const webpack = require('webpack');

module.exports =  {
    mode: 'development',
    entry: './src/index.js',
    output:  {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            }
        ]
    }
};

