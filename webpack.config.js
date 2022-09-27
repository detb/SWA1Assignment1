const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './static/js/weatherservice.js',
    mode: 'development',
    devServer: {
        static: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Weather forecast',
            template: 'static/index.html'
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true
    },
}