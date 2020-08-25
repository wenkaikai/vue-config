/**
 * 
 * 个人觉得全局mixin就是给全部Vue文件添加一些公用的实例（方法，过滤器and so on）
 */


import Vue from 'vue';
import mixin from './mixin'
Vue.mixin(mixin)
new Vue({
    el:"#root",
    data() {
        return {
          userName: "等你",
          time: this.formatDate(new Date()),
          arr: [1,2,3,4,5,'文字'],
          result: []
        }
      },
    render:function(h){
        return h("div",{
            style:"font-size:20px;color:#f00"
        },this.userName)
    }
})
