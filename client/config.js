const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
// 在启动脚本的时候设置的环境变量全部存储在process.env这个对象里面
const isDev = process.env.NODE_ENV === 'development';
const webpack = require('webpack');
const ExtractPlugin = require('extract-text-webpack-plugin')
// 就是把一些text 即是非javascript 文件单独打包成静态资源文件
const config = {
    target:"web",//编译目标是前端的项目
    entry:{
        bundle:path.resolve(__dirname,'index.js')
    },
    output:{
        filename:"build.[hash:8].js",
        path:path.resolve(__dirname,'../dist')
    },
    module:{//这个主要是配置
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.jsx$/,
                loader:'babel-loader'
            },
            {
                test:/\.(jpg|png|jpeg|svg)/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'[name].[ext]'// ext 就是扩展名
                        }
                    }
                ]
            }
            // ,
            // {
            //     test:/\.css$/,
            //     use:[
            //         {loader:'style-loader'},
            //         {loader:'css-loader'}
            //     ]
            // }
            // ,
            // {
            //     test:/\.styl/,
            //     use:[
            //         'style-loader',
            //         'css-loader',
            //         {
            //             loader:'postcss-loader',
            //             options:{
            //                 sourceMap:true//因为stylus-loader 会生成sourceMap postcss-loader 也会生成sourceMap
            //                 // 有了这个option 就可以直接用stylus-loader 生成的sourceMap了提高编译的效率
            //             }
            //         },
            //         'stylus-loader'// 他处理完以后是标准的css 代码，这个标准的css 到底怎么用不管丢给css-loader
            //     ]
            // }
        ]
    },
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        port:8080,
        index:"index.html",
        inline:true,
        hot:true,
        open:true
    },
    plugins:[
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env':{//webpack 打包可以根据这个变量区分打包
                NODE_ENV : isDev ? '"development"' : '"production"'
            }
        }),
        new htmlWebpackPlugin({
            title:"这是第一个vue的项目",
            filename:"index.html"
        })
    ]

}
// 这个配置js是开发环境和生产环境公用的一个配置那么如何区分此时的是哪一个环境呢
if(isDev){
    config.devtool = "#cheap-module-eval-source-map"//我们可以在浏览器里调试我们自己写的代码
    config.module.rules.push( {
        test:/\.styl/,
        use:[
            'style-loader',
            'css-loader',
            {
                loader:'postcss-loader',
                options:{
                    sourceMap:true//因为stylus-loader 会生成sourceMap postcss-loader 也会生成sourceMap
                    // 有了这个option 就可以直接用stylus-loader 生成的sourceMap了提高编译的效率
                }
            },
            'stylus-loader'// 他处理完以后是标准的css 代码，这个标准的css 到底怎么用不管丢给css-loader
        ]
    })
    config.devServer = {
        port:"8000",
        host:"0.0.0.0",// localhost 和 内网ip 都可以访问
        overlay:{
            errors:true// 错误展示到页面上
        },
        hot:true
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),//加了这个是热加载的
        new webpack.NoEmitOnErrorsPlugin()
    )
}else{
    // 开发环境css的配置
    config.entry = {
        app:path.join(__dirname,'index.js'),
        vendor:['vue']
    }
    config.output.filename = '[name].[chunkhash:8].js'
    config.module.rules.push(
        {
            test:/\.styl/,
            use:ExtractPlugin.extract({
                fallback:'style-loader',
                use:[
                    'css-loader',
                    {
                        loader:'postcss-loader', 
                        options:{
                            sourceMap:true
                        }
                    },
                    'stylus-loader'
                ]
            })
        }
    )
    config.plugins.push(
        new ExtractPlugin('styles.[contentHash:8].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'runtime'//能让hash值缓存的长
        })
    )
}

module.exports = config