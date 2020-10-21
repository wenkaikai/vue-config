/**
 * 不要在watch computed 里面去修改任何的值因为那样的话会造成无限的循环
 * 因为你重新赋值了就意味着触发了新的watch 和 computed
 * 
 * 
 */

import Vue from 'vue';
new Vue({
    el:"#root",
    template:`<div>

    <form action="">
    <p>Name:{{name}}</p>
    <p>Name:{{getName()}}</p>
    <p>{{number}}</p>
    <p>fullName:{{fullName}}</p>
    <p><input text="number" type="search" v-model="number"></p>
    <p><input text="text" v-model="firstName"></p>
    <p><input text="text" v-model="lastName"></p>
    <p>"绑定了computed"<input text="text" v-model="name"></p>
    <p><input text="text" v-model="obj.a"></p>
    </form>
   

    </div>`,
    data:{
        firstName:"Jockey",
        lastName:'Lou',
        number:0,
        fullName:"",
        obj:{
            a:"这是第一个子元素"
        }

    },
    computed:{
        // 计算属性前面的名字就相当于一个新的变量所以不用再data里面先定义

        name: {//如果要用get 和set的时候就要用对象而不是方法  
             //console.log("name invoked")
            get(){
                // computed 默认的就是只有一个getter方法。
                // return `${this.firstName} ${this.lastName}`
                return `123`
            },
            set(name){ // 这里的name 是绑定的v-model绑定的name
                // 如何改变computed 的值呢
                console.log(name)// 这里是取出来绑定的值。
                // 这里接受一个name 他的值来自于绑定他的input(此处是input) 还有其他的地方可以绑定这个传入这个name吗
                // 或者说事函数里面。
                const names = name.split(" ");
                this.number="222"
                // this.firstName = names[0];
                // this.lastName = names[1];
                // 先设置再取值。
            }
           
        }

        // name(){ 
        //     // 就是此时的name 是v-model 里面的
        //     //Computed property "name" was assigned to but it has no setter. 当你秀修改了绑定的name没有set 的时候的警告
        //     return "123"
        // }
    },
    // watch:{
    //     // firstName(newName,oldName){
    //     //     // 这样写的话他是不会监听初始化的值的 也就是处世话的值是不会被触发的
    //     //     // 如果想被触发得用hander
    //     //     this.fullName = newName+""+this.lastName
    //     // },
    //    firstName:{
    //        handler(newName,oldName){
    //            //watch 不同于computed wach 适用于监听到了值的改变而进行数据操作的
    //            //不适用于显示某一个数据
    //            this.fullName = newName+""+this.lastName
    //     },
    //       immediate:true// 有了这个参数就是页面一处世话就会监听
    //    },
    //    "obj.a":{// 还能监听一个对象的属性值
    //        handler(newName){
    //             console.log(newName)
    //        },
    //        immediate:true
    //    },

    //     obj:{// 如果直接写一个对象就是要加deep属性
    //     handler(newName){
    //          console.log(newName)
    //    },
    //     immediate:true,
    //     deep:true
    // }

    // },
    methods:{
        getName(){
            // 每当页面数据发生变化都要触发一次getName  console.log("getName invoked")
            return `${this.firstName} ${this.lastName}`
        }
    }
})