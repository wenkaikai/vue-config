import Vue from 'vue'
import App from './App.vue';
//import aa from'./assets/temp5.png'
//import './assets/styles/test-stylus.styl'
import './assets/styles/global.styl'
const root =    document.createElement("p");
const img = document.createElement("img");
//root.className="p1"//这个可以直接设置class名p1
//root.setAttribute("class","p2")//这个时候是p2
//img.src=aa;
//root.appendChild(img);
document.body.appendChild(root);
new Vue({
    // Vue 推荐在绝大多数情况下使用 template 来创建你的 HTML。
    //然而在一些场景中，你真的需要 JavaScript
    //的完全编程的能力，这就是 render 函数，
    //它比 template 更接近编译器。
    render:(h)=>h(App),// 这样渲染出来的知识内容，最后还要挂载
    // 1.首先需要了解这是 es 6 的语法，表示 Vue 实例选项对象的 render 方法作为一个函数，接受传入的参数 h 函数，返回 h(App) 的函数调用结果。
    //2.其次，Vue 在创建 Vue 实例时，通过调用 render 方法来渲染实例的 DOM 树。
    //3.最后，Vue 在调用 render 方法时，会传入一个 createElement 函数作为参数，
    //也就是这里的 h 的实参是 createElement 函数，然后 
    //createElement 会以 APP 为参数进行调用，关于 createElement 函数的参数说明参见：Element-Arguments
}).$mount(root);
// 当用$mount(root)的时候就不能用上面的document.body.appendChid(root)的了