const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: resolve(__dirname, 'src', 'client', 'static'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/static/'
    },
    devServer: {
        proxy: {
            '/**': {
                target: './src/client/index.html',
                secure: false,
                bypass: function(req, res, opt) {
                    if(req.path.indexOf('.css') !== 1) {
                        return './src/client/'
                    }
                    return './src/client/index.html'
                }
            }
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    emitWarning: true
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: resolve(__dirname, 'src', 'client'),
                query: {
                    presets: ['react-hmre']
                }
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ]
}