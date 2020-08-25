//const docsloader = require.resolve('./doc-loader');
module.exports = (isDev) =>{
    return {
        preserveWhitepace:true,// 这个是为了防止template 里面的空格对节点的影响
        extractCSS:!isDev,// 把vue里面的css也提取出来放在一个大的css里面 (在非开发环境为true)
        cssModules:{},
        //hotReload:false// 热加载如果为false就不会热加载 会根据环境变量生成
        // loaders:{
        //     'docs':docsloader
        // }
    }
}