const path = require('path');

module.exports = {
    entry: {
        example1: './client/example1.jsx',
        example2: './client/example2.jsx',
        example3: './client/example3.jsx'
    },


    // bring in the babel loader
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'hosted'),
        filename: '[name]bundle.js',
    },
};