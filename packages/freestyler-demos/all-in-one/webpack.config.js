const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        index: "./index",
        styled: "./styled",
        virtual: './virtual',
        balls: './balls',
        toStylesheet: './toStylesheet',
    },
    output: {
        path: __dirname + '/dist',
        filename: "[name].js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        loaders: [{test: /\.tsx?$/, loader: 'ts-loader'}],
    },
    plugins: [
        new webpack.DefinePlugin({
            // 'process.env.NODE_ENV': '"production"',
        }),
    ]
};
