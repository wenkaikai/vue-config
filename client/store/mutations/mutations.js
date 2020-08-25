export default {
    updateCount(state,num,num1){
        console.log(state)// 这个时候的state 是默认state加上new vuex.Store Modules 里面的集合。
        console.log(num)
       // console.log(num1) mutation 只能传额外的传一个参数，第一个参数是默认的state
        state.count = num 
        /** this.$store.commit('updateCount',i++) 调用commit updateCount */
    },
   test(state,num){
      console.log('test')
    }
}

// mutations:{ // mutations 突变，变态
//     updateCount(state,num){
//         state.count = num 
//         /** this.$store.commit('updateCount',i++) 调用commit updateCount */
//     }
// }