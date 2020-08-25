/**
 * 
 * actions同mutations也是修改states 里面的数据 但是他两的区别在哪里呢
 * mutaions 里面只能写同步的代码，而 actions 里面可以写异步的代码 
 */
export default{
    //updateCountAsync(store,data){
        // 这里的data是dispatch 的时候传过来的值
        //console.log(store) 其实他不是一个storeAction 函数接受一个与 store
         //实例具有相同方法和属性的 context 对象，因此你可以调用 
        // setTimeout(() => {
        //     store.commit('updateCount',data.num)
        // },data.time)
    //}
   // updateCountAsync({commit},data){ // 此处 {commit} 被认为是一个对象 然后变量结构出commit

    
    /**第二个例子 */
    //updateCountAsync(store,data){
           // console.log(store)
            /**
             * stote
             * commit,dispatch,getters,rootGetters,rootState,state
             * 
             */
            //console.log(data)
            //store.commit('test')
    //}

    /**第三个列子 */
    updateCountAsync({commit},data){
           return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    commit('updateCount',data.num);
                    resolve();// 执行完以后的操作
                },5000)
           })
    }
    
}