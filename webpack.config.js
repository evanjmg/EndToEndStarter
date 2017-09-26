const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const webpack = require('webpack')
const path = require('path')
module.exports = {
    entry: ['./src/main.tsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.tsx', '.js']
    },
    devServer: {
        contentBase: './dist/',
        stats: {
            chunks: false,
            assets: false,
            colors: true
        },
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/,  exclude: [/\.spec\.tsx?$/], loader: 'awesome-typescript-loader' },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoade: ['style-loader'],
                    loader: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.resolve(__dirname, 'src')],
                            outputStyle: 'compressed',
                            sourceMap: true,
                            outFile: 'style.css'
                        }
                    }]
                })
            }
        ]
    },
    plugins: [new LoaderOptionsPlugin({
            sassLoader: {
                includePaths: [path.join(__dirname, 'src')],
                outputStyle: 'compressed',
                sourceMap: true,
                outFile: '[contenthash].css'
            },
            cssLoader: {
                sourceMap: true
            },
            context: path.join(__dirname, 'src'),
            output: {
                path: path.join(__dirname, 'dist')
            }
        }),

        new ExtractTextPlugin({
            filename: '[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        })
    ],
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
}