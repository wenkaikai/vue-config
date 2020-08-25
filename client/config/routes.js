// 异步路由
// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'
export default [
    // 路由对象里面的是组件

    {
        path: '/',
        redirect: '/app' //当输入根目录的时候自动跳到app页面
    },
    {
        path: '/app/:id',
        props: true,// 把id 这个参数直接传个组件todo
        // props:(route) => (
        //     {id:route.query.b}
        //     //当然props 还可以自定义的传值
        //     // 此处是获取接受了一个route 对象并获取了query 里面的值并传给组件
        // ),
        // path:'/app',
        component: () => import("../views/todo/todo.vue"),
        /**如果跳转的路径有多个router-view 那么很容易想到components */
        // components:{
        //     default:Todo,
        //     a:Login
        // },
        name: 'index',
        meta: {
            // 可以用router.meta取值
            title: 'this is app',
            description: '描叙'
        }
        // children:[
        //     {// 路由里面还有子路由当然这里写的路径都要基于router-view
        //         path:'test',
        //         component:Login
        //     }
        // ]
        , beforeEnter(to, from, next) {
            /**这个钩子的执行顺序是在beforeEach 和 beforeResolve 之间 */
            // console.log('app route before enter')
            next()
        }
    },
    {
        path: '/login',
        component: () => import("../views/login/login.vue")
        /**如果跳转的路径有多个router-view 那么很容易想到components */
        //  components:{
        //     default:Login,
        //     a:Todo
        // },
    },
    {
        path: '*',
        component: () => import("../404.vue")
    }
]