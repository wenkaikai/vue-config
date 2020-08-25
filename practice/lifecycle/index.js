import Vue from 'vue';
const app = new Vue({
    el:"#root",
    // template:"<div>{{text}}</div>",
    data(){
        return {
            text:0
        }
    },
    beforeCreate(){
        console.log(this.$el,"beforeCreate") //undefined "beforeCreate"
    },
    created(){
        console.log(this.$el,"created") // undefined "created"
    },
    beforeMount(){
        /**服务端渲染没有 */
        // Mount 就是把组件挂载到html上的
        // 如果没有el 就不会执行这个方法
        console.log(this.$el,"beforeMount")//  <div id="root"></div>"beforeMount"
        // 也就是说在beforeMount 的时候它的节点是 页面上的根节点
    },
    mounted(){
        console.log(this.$el,"mounted") //<div>0</div> "mounted"
        // mounted
    },
    beforeUpdate(){
        // 当有数据更新的时候会触发该函数
        console.log(this,"beforeUpdate")
    },
    updated(){
        console.log(this,"updated")
    },
    activated(){
        console.log(this,"activated")
    },
    deactivated(){
        console.log(this,"deactivated")
    },
    beforeDestroy(){
        console.log(this,"beforeDestory")
    },
    destroyed(){
        console.log(this,"destroyed")
    },
    render(h){
        throw new TypeError("错误")
        /**render 函数的的执行顺序是在beforeMount 和 Mounted 之间的 */
        return h('div',{style:"color:#f00"},[<div>2548</div>,<div>这个是第二个div</div>])
        /**
         * 第一个参数（必要参数）：主要用于提供DOM的html内容，类型可以是字符串、对象或函数
         * 第二个参数（类型是对象，可选）：用于设置这个DOM的一些样式、属性、传的组件的参数、绑定事件之类
         * 第三个参数（类型是数组，数组元素类型是VNode，可选）：主要是指该结点下还有其他结点，用于设置分发的内容，包括新增的其他组件。注意，组件树中的所有VNode必须是唯一的
         * 
         */
      
    },
    renderError(h,err){
        // 注意这个error 只能值在本组件中才能捕获的到
        return h('div',{},err.stack)
    },
    errorCaptured(h,err){
        // 这个方法可以捕获到所有子组件冒泡的错误
        //return h('div',{},err.stack)
    }

})

/**一 测试beforeUpdate */
window.setInterval(function(){
    // 每一次的数据更新就会触发beforeUpdate 和 updated 
    app.text++
},1000)