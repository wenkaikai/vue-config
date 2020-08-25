<template>
  <div>
    <form action>
      <p>
        <input type="checkbox" name="category" value="今日话题" />今日话题
      </p>
      <p>
        <input type="checkbox" name="category" value="视觉焦点" />视觉焦点
      </p>
      <p>
        <input type="checkbox" name="category" value="财经" />财经
      </p>
      <p>
        <input type="checkbox" name="category" value="汽车" />汽车
      </p>
      <p>
        <input type="checkbox" name="category" value="科技" />科技
      </p>
      <p>
        <input type="checkbox" name="category" value="房产" />房产
      </p>
      <p>
        <input type="checkbox" name="category" value="旅游" />旅游
        <input type="text" v-model="inputVal" />
      </p>
      <li>{{obj.success}}</li>
    </form>
    <router-link to="/keep/children1">点击调转子页面</router-link>
   
      <router-view></router-view>
    
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "keep",
  data() {
    console.log("data")
    return {
      inputVal: 123,
      obj:{}
    };
  },
  beforeRouteEnter(to,from,next){

    console.log("beforeRouterEnter")
    next();
  },
  activated(){
    console.log("activated");
  },
  created() {

     console.log("created");
    // let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
    // let cancelToken = axios.CancelToken; // 首先要知道axios 有一个取消的方法。这个取消的方法怎么用呢。
    // let removeRepeatUrl = ever => {
    //   for (let p in pending) {
    //     if (pending[p].u === ever.url + "&" + ever.method) {
    //       //当当前请求在数组中存在时执行函数体
    //       pending[p].f(); //执行取消操作
    //       /**
    //        * 为什么要删除呢
    //        */
    //       // pending.splice(p, 1); //把这条记录从数组中移除
    //     }
    //   }
    // };

    // axios.interceptors.request.use(
    //   function(config) {
    //     // 在发送请求之前做些什么
    //     // 先走一下removeRepeatUrl 这个函数 如果有
    //     removeRepeatUrl(config);
    //     console.log(pending)
    //     config.cancelToken = new cancelToken(c => {
    //       // 自定义唯一标识
    //       // c 是一个cancel 函数。c();取消请求
    //       pending.push({ u: config.url + "&" + config.method, f: c });
    //     });
    //     return config;
    //   },
    //   function(error) {
    //     // 对请求错误做些什么
    //     return Promise.reject(error);
    //   }
    // );

    // // 响应拦截器
    // axios.interceptors.response.use(
    //   res => {
    //     // console.log(res);
    //     removeRepeatUrl(res.config); //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    //     const data = res.data;
    //     return data;
    //   },
    //   err => {
    //     return Promise.reject(err);
    //   }
    // );

    // async function getData() {
     function getData(that) {
      try {
        for (let i = 0; i < 1; i++) {
          // console.log("124")// await 能暂停循环。
        // await axios.post(
            axios.get(
            // "https://www.easy-mock.com/mock/5b3981c7c4dcd03fb7171981/example/medicineSearch",
            "http://www.dell-lee.com/react/api/demo.json",
            {}
          ).then((res)=>{
            console.log(res)
            console.log((that.obj = res.data));
            console.log(that.obj)
          })
        }
      } catch (e) {
        console.log(e);
      }
    }
    // getData(this);
  },
  beforeRouteLeave(to,from,next){
    console.warn(to,from)
    next()
  },
  // watch: {
  //   $route: function(to /**newVal */, from /**oldVal */) {
  //     console.log(to);
  //     console.log(from);
  //   },
  //   inputVal: function(newVal, oldVal) {
  //     //在keep-alive 里面写watch 是可以实现监听的呀。
  //     console.log(newVal);
  //     console.log(oldVal);
  //   }
  // }
};
</script>
