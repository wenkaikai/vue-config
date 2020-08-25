// 导出一个数组
export default [
    {
        path: "/keep",
        component: () => import("../components/component1.vue"),
        meta: {
            nav: "keep"
        },
        name: "keep",
        children: [
            {
                path: "children1",
                component: ()=>import("../components/children/children1.vue")
            }
        ]
    },
    {
        path: "/nokeep",
        component: () => import("../components/component2.vue"),
        meta: {
            nav: "nokeep"
        },
        name: "nokeep"
    },
    {
        path: "/nokeep1",
        component: () => import("../components/component3.vue"),
        meta: {
            nav: "nokeep1"
        },
        name: "nokeep1",

    },
    {
        path: "/textarea1",
        component: () => import("../components/textarea/textarea1.vue"),
        meta: {
            nav: "textarea1"
        },
        name: "textarea1",

    },
    {
        path: "/textarea2",
        component: () => import("../components/textarea/textarea2.vue"),
        meta: {
            nav: "textarea2"
        },
        name: "textarea2",

    },





]