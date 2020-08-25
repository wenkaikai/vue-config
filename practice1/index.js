import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import createRouter from './router/router';
const router = createRouter();
Vue.use(VueRouter)// vue 插件的用法
Vue.use(Vuex)
new Vue({
    router,
    render:(h)=>h(App),// 这样渲染出来的知识内容，最后还要挂载
}).$mount('#root');
