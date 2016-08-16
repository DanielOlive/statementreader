var path = require('path');

module.exports = {
    entry: './app/app.js',
    output: {
        path: './app/',
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.s?css$/,
                loaders: ['style', 'css', 'sass'],
                include: path.join(__dirname, 'app')

            }
        ]
    }
}