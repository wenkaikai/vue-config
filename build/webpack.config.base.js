const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const createvueLoaderOptions = require('./vue-loader.config')
const isDev = process.env.NODE_ENV === 'development';
const config = {
    target:"web",//编译目标是前端的项目
    entry:{
        bundle:path.resolve(__dirname,'../client/index.js')
    },
    output:{
        filename:"build.[hash:8].js",
        path:path.resolve(__dirname,'../dist')
        // ,publicPath:"/public/"
    },
    module:{//这个主要是配置
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:createvueLoaderOptions(isDev)
            },
            {
                test:/\.jsx$/,
                loader:'babel-loader'
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/ // 忽略
            },
            {
                test:/\.(jpg|png|jpeg|svg)/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'resources/[path][name].[hash:8].[ext]'// ext 就是扩展名
                        }
                    }
                ]
            }
        ]
    },
   
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        port:8080,
        index:"index.html",
        inline:true,
        hot:true,
        open:false
    }
}
module.exports = config