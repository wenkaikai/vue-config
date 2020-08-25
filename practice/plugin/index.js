import Vue from 'vue';
/** 添加全局方法或属性 */
//import myPlugin from './module/js/globalM.js';
/**添加实例方法 */
// import myPlugin from './module/js/prototype.js';

/**弹窗 */
import myPlugin from './module/js/globalAlert.js';
//console.log(Vue) Vue 是一个构造函数
Vue.use(myPlugin,{data:123});// 
//console.log(Vue.$myName);//顺义大院
new Vue ({
    el:"#root",
    template:"<div @click='alert2'>{{text}}</div>",
    name:"根元素",
    data:{
        text:0,
        active:false
    },
    name:"index组件",
    mounted(){
        /**添加实列方法调用方法 */
        // this.getName()
    },
    methods:{
        alert2(){
            console.log("根元素")
            console.log(this.$options.name)
            this.alert();
        }
    }
})