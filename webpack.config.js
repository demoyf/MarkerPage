var path = require('path')
var webpack = require('webpack')
// package.json  script属性，负责通过命令行输入指定运行webpack服务器
module.exports = {
    entry: {
        build:['./src/main.js','./src/page.js'],
        personPart:'./src/personalPage.js',
        childPage:'./src/childPage/childVue.js',
        searchPage:'./src/searchPage/SearchResult.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.1.js'
    },
    module: {
        //  loaders已经被遗弃，现在用rules
        rules: [
            {
                // test 正则表达式，匹配需要处理的文件后缀名，注意不需要‘’
                test: /\.vue$/,
                loader: 'vue-loader',//loader的名称
                options: {
                    loaders: {}
                    // other vue-loader options go here
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        //alias 别名？
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    //  Nodejs搭建的本地服务器
    devServer: {
        // History API，单页面应用开发 不跳转
        historyApiFallback: true,
        noInfo: true
        // inline:true  源文件发生改变，自动刷新页面
    },
    performance: {
        hints: false
    },
    // 调试工具，开发版
    devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
