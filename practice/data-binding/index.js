import Vue  from 'vue';
new Vue({
    el:"#root",
    /**一 模板里面可以直接用join()连接起来 */
    // template:"<div>{{arr.join(' ')}}</div>",
    /**二 模板里面还可以调用一些全局的变量
     * 注意如果是自定意全局变量是不能访问的
     * 模板只能访问的是js 默认的全局变量
     * 
     */
    // template:"<div>{{Date.now()}}</div>", //1539608670606
    /**三 vue 会默认的转义字符串 如果用htmL v-html="html" */
    // template:"<div v-html='html'></div>",
    /** 四 动态的class 
     * 
     * 这种方法只使用于class,记住以后动态的都要加:
    */
    // template:"<div :class='{actived:isActived}'>df</div>",
    // template:"<div :class='[{actived:isActived}]'>df</div>",
    /** 五 方法还可以这样 还可以这样用 */
    // template:"<div >{{getArr(arr)}}</div>",


/** 六  样式的合并 */
    template:"<div :style='[style1,style2]'>345</div>",
    data(){
        return {
            arr:[1,2,3],
            html:"<div>好的的</div>",
            isActived:true,
            style1:{
                color:"#f60"
            },
            style2:{
                appearance:'none'                               
            }
        }
       
    },
    methods:{
        getArr(arr){
            return arr.join("#")
        }
    }
})