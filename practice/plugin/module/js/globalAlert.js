 import Alert from '../dom/alert.vue'
 import Component from '../dom/content.vue'
 let $vm
 export default {
    install(Vue, options) {
        //console.log(Vue)
        //console.log(options)// 是Vue.use 传过来的
            const LoadingPlugin = Vue.extend(Alert);// 其实是一个组件
            let alert1 = function(title,notFirst){
                $vm = new LoadingPlugin({
                    el: document.createElement('div'),
                    components:{
                        'second-component':Component
                    },
                    name:"templatein2",
                    propsData:{
                        isFirst:false,// 表示的是我不是第一次
                        title:title,
                        notFirst:notFirst
                    },
                    mounted(){
                        /**这个里面的this 就是导入过来的Alert也就是引入模板里面的vue 文件 */
                    }
                });
                document.body.appendChild($vm.$el);
            }
           //Vue.prototype.alert = alert1;
        
           /**如果用mixins */
           Vue.mixin({
               methods:{
                   alert:alert1
               }
           })
          
    }
 }
