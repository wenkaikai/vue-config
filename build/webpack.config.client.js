const path = require("path");
const HTMLPlugin = require('html-webpack-plugin')
// 在启动脚本的时候设置的环境变量全部存储在process.env这个对象里面
const isDev = process.env.NODE_ENV === 'development';
const webpack = require('webpack');
const merge = require('webpack-merge');// 合并不同的webpack 配置
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const defaultPlugins = [
    new webpack.DefinePlugin({
        'process.env':{//webpack 打包可以根据这个变量区分打包
            NODE_ENV : isDev ? '"development"' : '"production"'
        }
    }),
    new HTMLPlugin({
        template:path.join(__dirname,"template.html")
    }),
    new VueLoaderPlugin//vue-loader@15.*之后除了必须带有VueLoaderPlugin 之外，还需另外单独配置css-loader。
] 
const devServer = {
    port:"8080",
    host:"0.0.0.0",
    overlay:{
        errors:true
    },
    hot:true,
    historyApiFallback:{
        index:'/public/index.html'// 这里的index.html 是上面new HTMLPlugin 生成的index.html
    }
}
let config
if(isDev){
    config = merge(baseConfig,{
        module:{
            rules:[
                {
                    test:/\.styl/,
                    use:[
                        'vue-style-loader',
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
                }
            ]
        },
        devtool:"#cheap-module-eval-source-map",//我们可以在浏览器里调试我们自己写的代码
        devServer,
        plugins:defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin(),//加了这个是热加载的
            new webpack.NoEmitOnErrorsPlugin()
        ])
    })
}else{
    // 开发环境css的配置
    config = merge(baseConfig,{
        entry:{
            app:path.join(__dirname,'../client/index.js'),
            vendor:['vue']//vendor的意思是依赖的第三方库，不会经常变更的，如你代码里的jQuery这种
        },
        output:{
            filename:'[name].[chunkhash:8].js'
        },
        module:{
            rules:[
                {
                    test:/\.styl/,
                    use:ExtractPlugin.extract({
                        fallback:'vue-style-loader',
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
            ]
        },
        plugins:defaultPlugins.concat([
            new ExtractPlugin('styles.[contentHash:8].css'),
            new webpack.optimize.CommonsChunkPlugin({
                name:'vendor'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name:'runtime'//能让hash值缓存的长
            })
        ])
    })
    // console.log(config.output) merge 是深拷贝
}

module.exports = config