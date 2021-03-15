// 导出一个数组
export default [
    {
        path: "/keep",
        component: () => import("../components/component1.vue"),
        meta: {
            nav: "keep",
            chName:"keep"
        },
        name: "keep",
        children: [
            {
                path: "children1",
                component: ()=>import("../components/children/children1.vue"),
                meta:{
                    chName:"keepChild"
                },
                name:"children1"

            }
        ]
    },
    // {
    //     path: "/nokeep",
    //     component: () => import("../components/component2.vue"),
    //     meta: {
    //         nav: "nokeep"
    //     },
    //     name: "nokeep"
    // },
    // {
    //     path: "/nokeep1",
    //     component: () => import("../components/component3.vue"),
    //     meta: {
    //         nav: "nokeep1"
    //     },
    //     name: "nokeep1",

    // },
    // {
    //     path: "/textarea1",
    //     component: () => import("../components/textarea/textarea1.vue"),
    //     meta: {
    //         nav: "textarea1"
    //     },
    //     name: "textarea1",

    // },
    // {
    //     path: "/textarea2",
    //     component: () => import("../components/textarea/textarea2.vue"),
    //     meta: {
    //         nav: "textarea2"
    //     },
    //     name: "textarea2",

    // },
    // {
    //     path: "/1px",
    //     component: () => import("../components/1px/index.vue"),
    //     meta: {
    //         nav: "1px"
    //     },
    //     name: "1px",

    // }

    /**组件问题 props */
    {
        path: "/props",
        component: () => import("@/props/index.vue"),
        meta: {
            nav: "props",
            chName:"props的验证"
        },
        name: "props",
        children: [
            {
                path: "modify",
                component: ()=>import("@/props/modifyProps.vue"),
                meta:{
                    chName:"直接修改props里面的值会怎样"
                },
                name:"modify"
            },
            {
                path: "children",
                component: ()=>import("@/props/children.vue"),
                meta:{
                    chName:"如何把值传给孙子组件比如属性prop"
                },
                name:"children"
            },
            {
                path: "sibling",
                component: ()=>import("@/props/sibling.vue"),
                meta:{
                    chName:"兄弟组件的传值"
                },
                name:"sibling"
            }
        ]
    },

]

