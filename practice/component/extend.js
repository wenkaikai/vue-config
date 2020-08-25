import Vue from 'vue'
const component={
    props:{
        active:Boolean,
        propOne:{
            required:true// 如果rquired 为true 就必须要传值Missing required prop: "propOne"
        }
    },
    template:`
        <div>
            <input type="text" v-model="text">
            <span @click="handleChange">{{propOne}}</span>
            <span v-show="active">see me if actived</span>
        </div>

    `,
    data(){
        return {
            text:0
        }
    },
    mounted(){
        console.log("component mounted")
    },
    methods:{
        handleChange(){
            this.$emit('change')
        }
    },
    template:`
        <div>
            这个是div
        </div>
    `
}

/**申明似的申明了一个组件然后主动挂载到el extend 是构造组件的语法器
 * 组件继承了component
*/
const CompVue = Vue.extend(component) 
/**单个组件的调用 
 * 
 * 
*/

new CompVue({
    el:"#root",
    propsData:{
        propOne:"xxx"
    },
    data:{
        text:"123"
    },
    mounted(){ // mounted方法会追加到实例中，组件上的会到实例中不同于data 会覆盖
        console.log("instance mounted")
    },
})
const parent1 = new Vue({
    name:'parent'
})

/**有继承的组件调用
 * 
 * 组件的拓展这样的好处是继承了这个组件并设置了自定义的值覆盖原有的值。
 */

// const components = {
//     extends:component,
//     data(){
//         return {
//             text:1
//         }
//     },
   
//     mounted(){// 继承组件的mounted方法
//        // console.log("extendCompontent mounted")
//         //console.log(this.$parent.$options.data)//不能获取data
//         //console.log(this.$parent.$data)//能获取data
//         console.log(this.$parent.$options.name)

//         // 这样获取的和this.$parent.$data.text获取的是一样的 当然也可以修改
//         //console.log(this.$parent.text)
//     }
// }// 这样继承以后怎么用呢

// new Vue({
//     parent:parent1,// new的组件可以指定他的parent,但是在不是new 的组件中就不能指定他的parent
//     // 而 本组件又是comp组件的parent。
//     name:"Root",
//     el:"#root",
//     propsData:{
//         propOne:"1234"
//     },
//     mounted(){
//         //console.log(this.$parent)
//         //console.log(this.$parent)// 如果组件没有parent属性就是undefined
//     },
//     components:{
//         Comp:components
//     },
//     data(){
//         return {
//             text:"789"
//         }
//     },
//     //template:`<comp></comp>`// new 里面的template里面是什么意思
//     template:`<div>
//         <span>
//             {{text}}
//         </span>
//         <comp></comp>
//     </div>`
// })