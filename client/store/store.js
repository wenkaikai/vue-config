/**
 * vuex 可以理解为一个全局对象你可以理解为是一个全局对象，所有页面都可以访问。方便数据共享和传递等等。
 * vuex 可以放在任何位置，只是取这个值的时候如何只有在这个节点树一下才能取得到
 */
// import Vuex from 'vuex'
// import Vue from 'vue'
// Vue.use(Vuex)
// const store = new Vuex.Store({
//     state:{
//         count:0
//     },
//     mutations:{ // mutations 突变，变态
//         updateCount(state,num){
//             state.count = num 
//             /** this.$store.commit('updateCount',i++) 调用commit updateCount */
//         }
//     }
// })
// export default store


/**服务端渲染的store.js 不能每次都用同一个store 这样的话会有内存的溢出 */
import Vuex from 'vuex'

/** 由于是在外层创建的store Vue.use 就不用放在这里了 */
import defaultState from './state/state.js' // 这个时候为什么要用defaultState呢 因为有服务端渲染会在state里面加入一些数据
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'
const isDev = process.env.NODE_ENV === "development" // 
export default ()=>{
    // Store  是Vuex 里面的
    /**每个模块里面有自己的mutations 和 actions  */
    const moduleC = {
        state:{
            type:"module",
            content:"我是模块c"
        },
        mutations:{
            print(contentxt,data){
                // contentxt 就是 state
                //console.log(contentxt)
                //console.log(contentxt.content)
                //console.log(data)
            }
        },
        actions:{
            triggerPrint({commit},data){
                return new Promise((resolve,reject)=>{
                    commit('print',data);
                    resolve();
                })
            }
        }
    }
    return new Vuex.Store({
        strict:isDev,// 如果为true 的话修改 state 里面的值不是在mutations里修改的就会有错误提示
        state:defaultState,
        mutations,
        getters,
        actions,
        modules:{
            // store的模块化的概念
            a:{
                state:{
                    text:"a"
                }
            },
            b:{
                state:{
                    text:"b"
                }
            },
            c:moduleC
        }
    })
}