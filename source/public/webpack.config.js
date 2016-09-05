var path = require('path');

module.exports = {
    entry: './app/app.js',
    output: {
        path: './app/',
        filename: 'bundle.js'
    },
    devtool:'source-map',// for debugging in the browser
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.s?css$/, //look for css or scss files
                loaders: ['style', 'css', 'sass'],
                include: path.join(__dirname, 'app')// look for these files in the app dir
            }
        ]
    }
}