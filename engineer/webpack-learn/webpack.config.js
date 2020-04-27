const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name]-bundle.js',
        path: path.join(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 20480
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    }
}