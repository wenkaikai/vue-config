import Vue from 'vue';
const ChildComponent = {
    // 怎么在孙子组件中获取爷爷组件的值呢。
    template:`<div>
        我是孙子级别的组件{{data.value}}
    </div>`,
    inject:['yeye','data'], // 默认的情况下provide 是不支持reactive 那么怎么实现provide的reactive呢

    mounted(){
        console.log(this.yeye.$options.name)// component1 就是开始传过来的this
        //console.log(this.value)// 123
        //console.log(this.$parent.$options)
        //console.log(this.$parent.$options.name)// 能获取到firstcomponent
        //console.log(this.$parent.$options.data.text)// 获取不到
        //console.log(this.$parent.$data.value)// 可以获取的到
        //console.log(this.$parent.$data.text) // 可以获取的到
    }
}
const component = {
    name:"firstcomponent",
    components:{
        ChildComponent
    },
    inject:['yeye','data'],
    template: `
        <div :style="style">
            <div class="header">
                <slot name="header" style="color:red">
                </slot>
            </div>
            <div class="body">
                <slot name="body" :value="value">
                </slot>
            </div>
            <child-component></child-component>
        </div>
    `,
    data(){
        return {
            style:{
                width:'200px',
                height:'200px',
                border:'1px solid #ccc'
            },
            value:"这是第一个组件里面的value",
            text:"这是一个文本"
        }
    },
    mounted(){
        console.log(this.data)// 父元素的data 不仅子元素能获取的到孙子元素也能获取的到
    }
}

new Vue({
    name:"component1",
    components:{
        CompOne:component
    },
    // provide:{
    //     // provide 在初始化的时候这个时候vue 还没有初始化成功。
    //     yeye:this
    // },// 提供一个provide 供自己的子孙用

    provide(){
        // provide 是一个函数
        const data = {};
        Object.defineProperty(data,'value',{
            get:()=>{
                console.log(this); // 这个时候表示的是这个组件 this.$options.name == component1
                return this.value
            },
            //get:function(){
                //console.log(this) // 此时的this 指向的是这个空的data{}
           // },
            enumerable:true
        })
        return{
            yeye:this,
           data
        }
    },
    el:"#root",
    data(){
        return {
            value:"1236",
           
        }
    },
    mounted(){
       // console.log(this.$refs) // 这样打印的所有有ref 标记的集合
       // console.log(this.$refs.comp.text)// "这是一个文本" 说明 $ref.comp 就是component 这个组件的实列就相当于this一样。
        //console.log(this.$refs.divHeader)
    },
    //  一个div slot 里面可以有本组件的值还有调用他组件的值
    template:`
        <div>   
            <comp-one ref="comp">
                <div slot="header" ref="divHeader">这是header的类容</div>
                <div slot="body" slot-scope="props">这是body的类容{{value}}<br/>
                这是组件里面传过来的值{{props.value}}
                </div>
                <div></div>
            </comp-one>
            <input type="text" v-model="value">
        </div>
    `
})