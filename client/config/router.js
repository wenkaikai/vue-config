import Router from 'vue-router'
import routes from './routes'
export default () =>{
    return new Router({
        routes,
        mode:'hash' // 这个配置项的作用是 地址栏没有hash值 mode 有history和hash 的区别
        // ,base:'/base/' // 这个配置是每个路径下面都加了 /base/ 路径
        ,linkActiveClass: 'active-link'
        ,linkExactActiveClass: 'exact-active-link'
        ,scrollBehavior(to,from,savedPosition){
            // 这个配置是页面跳转的时候要不要滚动的问题三个参数
            /**
             * to 是跳转的过程中我们要去的那个路由
             * from 是我们从哪个路由跳转下个路由
             * 
             */
            if(savedPosition){
                // 即是如果有保存过滚动的位置 webAPP 非常的有用
                return savedPosition
            } else {
                return {x:0,y:0}
            }
        }
        // ,parseQuery(query){
        // }
        // ,stringifyQuery(obj){
        //     // 都是关于页面的上的参数处理
        // }
        ,fallback:true //并不是所有的浏览器都支持history 形式的跳转 如果不支持就会是默认的hash跳转
    })
}
/**
 *  ,linkActiveClass: 'active-link'
    ,linkExactActiveClass: 'exact-active-link'
    当点击a 标签的时候 都会把这两个class属性加上
    vue 的 router-link 里面其实是是给a 标签加了事件
     他两的区别在哪里呢
     比如 /login 会有 active-link 没有 exact-active-link
     在 /login/exact 会有 active-link 也会有 exact-active-link
     就是说 linkExactActiveClass 会更加准确一些
 * 
 */