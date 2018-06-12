const path = require('path');
const webpack = require('webpack');

module.exports =  {
    mode: 'development',
    devtool: 'inline-source-map',
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
                    presets: ['env', 'stage-0', 'react'],
                    plugins: [
                        'transform-class-properties',
                        'transform-es3-member-expression-literals',
                        'transform-es3-property-literals',
                        'transform-object-rest-spread'
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' },
                ]
            },
            { test: /\.(jpg|png|gif|svg|woff|woff2|eot)$/, loader: 'file-loader' },
        ]
    }
};

