import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import './assets/styles/global.styl'
import createRouter from './config/router'

const router = createRouter()
router.beforeEach((to,from,next)=>{
    //console.log(to.matched) 如果们跳转的页面不是404 matched里面的数组就是1

    next();
    // console.log('路由跳转之前')
    // console.log(to,from)  // 去哪里 从哪里去

    /** 这种作用可以根据条件判断跳转 */
    // if(to.fullPath=='/app'){
    //     next('/login')
    //     /**还可以传一个对象 */
    //     // next({path:'/login'})
    // }else{
    //     next()
    // }

    /**这样的用法叫钩子函数  此处是全局钩子*/
})
router.beforeResolve((to,from,next)=>{
    // console.log('beforeResolve')
    next()
})
router.afterEach((to,from)=>{
    // console.log('after each invoked')
})
Vue.use(VueRouter)// vue 插件的用法
Vue.use(Vuex)

/**
 * 引入 vuex store
 */
import createStore from './store/store';
const store = createStore();
new Vue({
    router,
    store,
    render:(h)=>h(App),// 这样渲染出来的知识内容，最后还要挂载
}).$mount('#root');