const path = require("path");
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const merge = require('webpack-merge');// 合并不同的webpack 配置
const baseConfig = require('./webpack.config.base')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const defaultPlugins = [
    new webpack.DefinePlugin({
        'process.env':{//webpack 打包可以根据这个变量区分打包
            NODE_ENV :  '"development"'
        }
    }),
    new HTMLPlugin({
         template:path.join(__dirname,"template.html")
    })
] 
const devServer = {
    port:"8083",
    host:"0.0.0.0",
    overlay:{
        errors:true
    },
    hot:true
    // historyApiFallback:{
    //     // index:'/public/index.html'// 这里的index.html 是上面new HTMLPlugin 生成的index.html
    // }
}
let config
config = merge(baseConfig,{
    entry:path.join(__dirname,'../practice/index.js'),
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
                    'stylus-loader',// 他处理完以后是标准的css 代码，这个标准的css 到底怎么用不管丢给css-loader
                    
                ]
            }
        ]
    },
    devtool:"#cheap-module-eval-source-map",//我们可以在浏览器里调试我们自己写的代码
    devServer,
     resolve:{
        alias:{ // 可以指定vue 加载哪一个版本的
            'vue':path.join(__dirname,'../node_modules/vue/dist/vue.esm.js')
                /** 默认的导入vue 组件是runtime-only 版本的 如果是那个版本就不能再
                 * new vue 的时候用template
                 * 
                 */
         }
     },
    plugins:defaultPlugins.concat([
        new webpack.HotModuleReplacementPlugin(),//加了这个是热加载的
        new webpack.NoEmitOnErrorsPlugin(),
        new VueLoaderPlugin()
    ])
})

module.exports = config