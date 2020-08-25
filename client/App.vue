<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <p>{{fullName}} {{counter}}</p>
        <p>{{moduleC}}</p>
        <!-- 这里的todo 小写也没有关系 -->
        <!-- <todo></todo> -->
        <!-- vue 跳转 -->
        <!-- 第一种的跳转方式 -->
        <!-- <router-link :to="{name:'index'}">app</router-link> -->
        <!-- 第二种的跳转方式 带有参数的 -->
        <!-- <router-link to="/app">app</router-link> -->
        <!--  以下两个是测试的-->
        <router-link to="/app/123">app123</router-link>
        <router-link to="/app/446">app345</router-link>
        <router-link to="/login">login</router-link>
        <router-link to="/login/exact">exact(exact-active-link)</router-link>
        <router-link to="/login/exact/exact">exact/exact</router-link>
        <transition name="fade">
            <router-view />
        </transition>
        <Footer></Footer>
        <!-- 命名视图 -->
        <router-view name="a"></router-view>
    </div>
    <!-- template 下面要有一个大的div 包裹 -->
</template>
<script>
    import Header from "./layout/header.vue"
    import Footer from "./layout/footer.jsx"
    //  import Todo from "./views/todo/todo.vue"
    //console.log(Header)// 这样打印出来就是一个render 对象 组件就是一个render对象吗
    //console.log(Header.__docs) undefined
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex' // 前两个插件是很方便的取出state 和 getters里面的值
    // 后两个是赋值所以是要写在方法里面的
    export default {
        components: {
            Header,
            Footer,
            //  Todo
        },
        data() {
            return {
                text: "abdddsfddfchot"
            }
        },
        mounted() {
            /*
                this.$route 就获取了这个路由的所有的信息包括meta等
                当然this.$route 也包含了query,query就是(?aa=123)这样的参数
                还有用this.$route 获取的值父页面的路由和子页面的路由是一样的
            */
            //   console.log(this.$route)

            /*$store*/
            //console.log(this.$store)
            //console.log(this.$store.state) // 

            //console.log(this.$store.state.lastName)// 能取到在state.js 里面的lastName的值
            //console.log(this.counter)// 用...mapState() 方法取出来的counter里面的数据
             //console.log(this.moduleA)// 用...mapState() 方法取出来的模块A里面的数据
            //console.log(this.moduleB)//用...mapState() 方法取出来的模块A里面的数据
           // console.log(this.fullName)// 这样能取到值是因为有getter操作/用...mapGetters() 方法取出来的fullName里面的数据 
            //console.log(this.$store.getters.fullName)// 这样是直接取出来getters里面的值
            /*下面是触发mutations*/
            // let i = 1;
            // setInterval(()=>{
            //     this.$store.commit('updateCount',i++)
            // },1000);

            // mutations 测试一
            this.$store.commit('updateCount',1,2)



            /*知识点一 对象风格直接使用包含的type属性对象
              说明 如果用对象风格传过去的参数是包括type 在内的整个对象
              type 是触发的名字
            */
            // let i = 1;
            // setInterval(()=>{
            //     this.$store.commit({
            //         type:'updateCount',
            //         aa:i++
            //     })
            // },1000);

            /* 下面是触发actions 里面的数据变化 dispatch（派遣；急件）c用来触发actions*/
            // this.$store.dispatch('updateCountAsync',{
            //     num:12,
            //     time:5000
            // })

            /*以下是用mapActions来触发要修改的函数
                这是用来传参的
            */

            // this.updateCountAsync({
            //     num:12,
            //     time:5000
            // })
            /**
             *知识二 触发 this.updateCount 函数
             这个函数是由mapMutations 映射出来的
             他传的参数也会自己带过去,
             这个123 参数也会传到mutations 里面
            */
            // this.updateCount(123);
            // return false;

            /**
             * 知识点三 dispatch 分发action
            */

            // this.$store.dispatch("updateCountAsync", { num: '1237' }).then(() => {
            //     console.log("123567")
            // })

            /**
             * 知识点四 触发模块里面的mutation
            */
            this.triggerPrint("模块里面的函数是由action触发的").then(res => {
                console.log("triggerPrint 触发成功了")// 触发函数的
            });
        },
        methods: {
            //...mapActions(['updateCountAsync', 'triggerPrint']),
            // 如果有多个方法数组里面就可以是多个
            ...mapActions(['triggerPrint']),
            ...mapMutations(['updateCount']),

        },
        computed: {
            //...mapState(['count']),
            //  ...mapState({ // 也可以传一个对象
            //      counter:'count'
            //  })
            ...mapState({ // 
                counter: (state) => state.count,
                moduleA: state => state.a.text,// 这样是取出来a模块里面的state,moduleA是变量名字
                moduleB: state => state.b.text,// 这样取出来的b模块里面的state
                moduleC: state => state.c.content
            }),

            /*这样的写就不用下面的return 和获取了*/
            //  count() {
            //      return this.$store.state.count
            //  },


            ...mapGetters(['fullName'])//使用对象扩展操作符把 getter 混入到 computed 中
            //  fullName(){
            //      return this.$store.getters.fullName
            //  }
        }
    }

</script>
<style lang="stylus" scoped>
    #app {
        position absolute left 0 right 0 top 0 bottom 0
    }

    #cover {
        position absolute left 0 top 0 right 0 bottom 0 background-color #999 opacity .9 z-index -1
    }

    .exact-active-link {
        color: #f60;
    }
</style>