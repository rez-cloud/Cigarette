const path = require('path');
const webpack = require("webpack");

const rootPath = "wwwroot";
const buildFolder = "build";

const isDebug = true;// !process.argv.includes('-p');

module.exports = {
    context: path.resolve(rootPath),
    entry: [
        "babel-polyfill",
        "./entryPoint"
    ],
    output: {
        path: path.resolve(path.join(rootPath, buildFolder)),
        publicPath: buildFolder + '/',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-1'],
                    plugins: ['transform-runtime', 'transform-decorators-legacy'],
                    compact: false
                }
            },
            {
                test: /ReactToastify\.css?$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.css?$/,
                exclude: /(node_modules|\\materialize_.*\.css$|materialize-overrides\.css$)+/,
                use: [
                    {
                        loader: 'style-loader' 
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: true,
                            // CSS Modules https://github.com/css-modules/css-modules
                            modules: true,
                            localIdentName: true ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('postcss-import')({
                                    root: rootPath,
                                    path: ['styles/']
                                }),
                                require('postcss-url')({ filter: "node_modules/materialize-css/**/*" }),
                                require('postcss-nested')(),
                                require('postcss-cssnext')(),
                                require('postcss-extend')(),
                                require('postcss-assets')({
                                    basePath: rootPath,
                                    loadPaths: ['images/', 'images/favicons', 'fonts/']
                                }),
                            ]
                        }
                    }
                ]
            },
            {
                test: /(\\materialize_.*\.css$|\\rc-calendar\\.*\\index.css|materialize-overrides\.css$)/,  // our own styles for rewrited materialize components
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: true,
                            // CSS Modules https://github.com/css-modules/css-modules
                            modules: true,
                            localIdentName: '[local]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('postcss-import')({
                                    root: rootPath,
                                    path: ['styles/']
                                }),
                                require('postcss-url')({ filter: "node_modules/materialize-css/**/*" }),
                                require('postcss-nested')(),
                                require('postcss-cssnext')(),
                                require('postcss-extend')(),
                                require('postcss-assets')({
                                    basePath: rootPath,
                                    loadPaths: ['images/', 'images/favicons', 'fonts/']
                                })
                            ]
                        }
                    }
                ]
            },
            
            {
                test: /\.scss?$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
            },
            {
                test: /\.md$/,
                loaders: ['html-loader', 'markdown-loader']
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader"
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
        alias: {
            'jquery': path.resolve('node_modules/jQuery/dist/', isDebug ? 'jquery.js' : 'jquery.min.js'),
            'materialize': path.resolve('node_modules/materialize-css/dist/js/', isDebug ? 'materialize.js' : 'materialize.min.js'),
            //'react$': path.resolve('node_modules/react/dist/', isDebug ? 'react.js' : 'react.min.js'),
            // 'react-dom$': path.resolve('node_modules/react-dom/dist/', isDebug ? 'react-dom.js' : 'react-dom.min.js'),
            //'redux$': path.resolve('node_modules/redux/dist/', isDebug ? 'redux.js' : 'redux.min.js'),
            // 'react-redux$': path.resolve('node_modules/react-redux/dist/', isDebug ? 'react-redux.js' : 'react-redux.min.js')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: "jquery",
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    devtool: 'source-map'
};
