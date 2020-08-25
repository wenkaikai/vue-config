
/**
 * 
 * 添加实例方法是最常用的一种方法，其直接绑定在vue的原型链上，
 * 我们可以回想一下 JS 里的类的概念。
 * 实例方法可以在组件内部，通过this.$myMethod来调用。
 */

export default{
    install(Vue,options){
        Vue.prototype.getName = ()=>{
            console.log("我的名字叫顺义大院")
        }
    }
}