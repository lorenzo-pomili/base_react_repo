const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputDir = path.join(__dirname, '/public');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: outputDir,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: false
        })
    ],
    devServer: {
        compress: true,
        contentBase: outputDir,
        port: process.env.PORT || 8080,
        historyApiFallback: true
    }
};