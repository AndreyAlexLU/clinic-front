const path = require('path');
const webpack = require('webpack');

module.exports = env => {

    return {
        mode: 'development',
        entry: './src/index.js',
        output:  {
            path: path.resolve(__dirname, 'dist'),
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
    }
};

