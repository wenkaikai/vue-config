import Vue from 'vue';
console.log(Vue)
const component = {
    props:["props1"],
    name:"firstcomponent",
    // template: `
    //     <div :style="style">
    //         <div class="body">
    //             <slot name="body" :value="value">
    //             </slot>
    //         </div>
    //     </div>
    // `,
    // 说明 createElement 创建的是一个虚拟的dom vnodes 存储在内存中 如果有需要才会渲染成真实的dom
    // 中间的对象是属性类似于class, style 类似的。
    render(h){
        return h("div",{
            style:this.style,
            // on:{
            //     click:()=>{this.$emit("click")}
            // }
        },[// 节点
            h("div",{class:"body"},[
                this.$slots.body,
                this.props1
            ]) // 如果slot 没有名字就是用this.$slots.default
        ])
    },
    data(){
        return {
            style:{
                width:'200px',
                height:'200px',
                border:'1px solid #ccc'
            },
            value:"这是body slot的value",
            text:"这是一个文本"
        }
    },
}



new Vue({
    name:"component1",
    components:{
        CompOne:component
    },
    el:"#root",
    data(){
        return {
            value:"567",
           
        }
    },
    mounted(){
    },
    methods:{
        handleClick(){
            console.log("clicked")
        }
    },
    /** 在使用template 的时候会在生命中的过程中有个编译
     * 编译成了js 的函数叫做rende function
     * 
     */
    render(createElement){
        // createElement 参数 节点,属性,节点的类容 如果还是节点的话需要继续的createElement
        // 要注意的是第三个参数也就是类容要用[] 括起来 如果是节点就要用数组如果值字符串就不用数组
        return createElement("div",{},
        [createElement("comp-one",{
            ref:"comp",
            props:{
                props1:this.value// 传入 props1 这个属性
            },
            // on:{
            //     click:this.handleClick
            // }
            nativeOn:{// 如果是nativeOn 就不用子组件的触发了
                click:this.handleClick
            }
        },[createElement("div",{
            slot:"body",
            'slot-scope':"props",
            domProps:{
                // youle domProps 下面的类容就没有用了
                innerHTML:"<span>我是domProps你改变我的类容是没有用的</span>"
            },
            attrs:{ // 这样就给div 加上了id
                id:"text-id"
            }
        },"这是body的类容")]
        )]
        );
    }
})