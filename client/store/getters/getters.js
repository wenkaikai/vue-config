/**
 * 
 * getters 的作用类似于computed 对于数据的修改 但是getters 统一的就是所有的页面都可以用
 * 这样的话有利于页面的维护
 */

export default{
    fullName(state){
        //console.log(state) 可以获取state里面的数据
        return `${state.firstName} ${state.lastName}`
    }
}