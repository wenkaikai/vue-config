import Vue from 'vue'
// new Vue({
//     el:"#root",
//     template:"<div>template</div>"
// })

/**还可以用一下的方法不用el 和上面的效果是一样的*/
const app = new Vue({
    template:"<div>{{text}}{{obj.a}}</div>",
    data(){
        return {text:"text1",obj:{}}
    }
})
app.$mount("#root")
/**一我们修改 app 里面的值
 * app.$data.text = "123" 也可以修改
 * app.$options.data.text = "123" // 不能修改
 */
window.setTimeout(function(){
    app.text="123"
    
},1000)


//console.log(app.$data)  //data 数据
//console.log(app.$props)  // 传过来的props
// console.log(app.$el) // 就是html 节点

/**3 $options 是new vue 里传入的的一个对象参数,当然他有默认的值并会合并我们的参数。 */
// console.log(app.$options)
/**3.1 $options.render
 * $options.render 接受一个方法在数据变化的时候执行
 * 
 */

// app.$options.render = (h)=>{
//     return h('div',{},'new render function1')
// }

/**4 $root
 * 
 * vue 的实例 是一个跟节点也就是我们new 出来的app
 */

//console.log(app.$root===app) //true

/**5 $children
 * 
 * $children 怎么用呢 举个栗子
 * 比如我们有<item><div></div></itme> 此处的div 就是children
 * 
 */
/**
 * 6,$slots,$scopedSlots  插槽他会编译成一个对象挂载到vue 的实例上边
 */
//console.log(app.$slots)// 如果没有就是一个空的对象
//console.log(app.$scopedSlots)// 如果没有就是一个空的对象

/**7，$refs
 * 他是一个什么东西呢，是模板里面的一个引用
 * 如果在组件或者模板里面加ref 属性 那么就可以用$refs 来获取这个节点这样我们就可以进行一些修改
 */
/**8,$isServer
 * 
 * 这个只有在服务端渲染的时候才会用到，
 * 就是用来判断哪些是服务端渲染的代码，哪些是在客户端渲染的代码
 */
//console.log(app.$isServer) //如果没有就是false

// ***********************第二大类 方法**********************
/** I app.$watch 
 * 
 * 只要监听的值有变化就会触发这个函数
*/

// const unwatch = app.$watch('text',(newText,oldText) => {
//     console.log(newText,oldText)
// })

// unwatch()// 用实例调用的话要注销当页面跳转的时候我们要手动的注销他，不然会有内存的溢出。
// // 但是当我们作为一个options 属性的时候当页面跳转他就会自动的销毁。

/**II app.$on app.$emit app.$once 
 * app.$on 是监听事件的
 * app.$emit 是触发事件的
 * 
 * $on 可以触发多次 $once只能触发一次
 * 我们的例子如下
 * 
 * 说明一点 当他两作用于同一vue 对象的时候才会起到作用
 */
// app.$on("event",() => {
//     console.log("event is emited")
// })
// app.$emit("event");// 思考 $on 的作用何在呢 当子组件改变的时候要告诉父组件这样这样会用的很多

/**III app.$forceUpdata() 强制组件重新渲染一次
 * 
 * 什么时候会用到这个呢，当我们修改一个对象里面没有声明的值的时候，这个时候html里面的值不是响应的。
 * 如何才能做到让html 里面的值随着你改变而改变呢，就要用到app.$forceUpdata();方法
 * 这也说明了以后要用到的变量要提前定义。
 */
// let i = 0;
// setInterval(function(){
//     i++;
//     app.$data.obj.a=i
//     //app.$forceUpdate();// 没有强制刷新上面的方法就没有用
// },1000)
/**IV app.$set 为data添加数据这样他能响应式
 * 
 * 
 * */ 
    let i = 0;
    setInterval(function(){
        i++;
        app.$set(app.obj,'a',i)//  这样设置一个值是动态的。
       //app.$delete(app.obj,'a') // 对应的删除了这个属性
    },1000)


    /** vue 渲染数据值一个异步的过程,并不是每一次的更改都是渲染的过程。而是连续更改多次才会渲染的
     * 
     * 
     * 那么问题来了如果我们有渲染dom 的时候 我们在操作dom 此时这个渲染是异步的那么我们怎么能获取这个dom呢
     * app.$nextTick();
     * 
     * 
     */
//   let i = 0;
//     setInterval(function(){
//         i++;
//         app.text=i
//         i++;
//         app.text=i
//         i++;
//         app.text=i
//         i++;
//         app.text=i
//     },500)


