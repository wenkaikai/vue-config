
/**
 * 
 * 在install方法中，我们直接在Vue实例上声明了$myName属性并进行了赋值，
 * 当该插件注册后只要存在Vue实例的地方你都可以获取到Vue.$myName的值，
 * 因为其直接绑定在了Vue实例上。
 * 这里用this 是获取不到的
 * 只能用Vue才能获取的到
 */

export default{
    install(Vue,options){
        Vue.$myName = "顺义大院"
    }
}