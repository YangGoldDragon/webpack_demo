const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    // JavaScript 执行入口文件
    entry: './main.js',
    output: {
        // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: 'bundle.js',
        // 输出文件都放到 dist 目录下
        path: path.resolve(__dirname, './dist'),
    },
    mode: "production",
    module: {
        rules: [
            {
                //使用正则匹配.css格式的文件, 然后使用loader进行加载
                test: /\.(css|scss|sass)$/,
                use: ExtractTextPlugin.extract([
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                    }
                ])
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[name]_[hash].[ext]",
                        outputPath: "images/",
                        limit: "102400", //100kb,  1kb是1024个字节
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ],
    watch: true
};