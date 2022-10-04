const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let htmlPageNames = ['aarhus', 'copenhagen', 'horsens'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
        template: `./static/${name}.html`,
        filename: `${name}.html`
    })
});

module.exports = {
    entry: {
        weatherservice: './static/js/weatherservice.js'
    },
    mode: 'development',
    devServer: {
        static: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Weather forecast',
            template: 'static/index.html'
        }),
    ].concat(multipleHtmlPlugins),
    output: {
        filename: 'main.js',
        library: 'WeatherService',
        path: path.resolve(__dirname, 'dist'),
        clean:true
    },
}