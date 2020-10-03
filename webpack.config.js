const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/app.js'),
    devtool: "source-map", // enum
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx', '.vue', '.json']
    },
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                targets: {
                                    ie: "11"
                                }
                            }]
                        ]
                    }
                }
            }
        ],
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './app/assets'),
        // libraryTarget: "window", // property set to window object
        libraryTarget: "umd", // universal module definition
        // libraryTarget: "umd2", // universal module definition
        // libraryTarget: "commonjs2", // exported with module.exports
        // libraryTarget: "commonjs", // exported as properties to exports
        // libraryTarget: "amd", // defined with AMD defined method
        // libraryTarget: "this", // property set on this
        // libraryTarget: "var", // variable defined in root scope
        // libraryTarget: "assign", // blind assignment
        // libraryTarget: "global", // property set to global object
        // libraryTarget: "jsonp", // jsonp wrapper
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css'
        })
    ],
};
