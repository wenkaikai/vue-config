<template>
  <div>
    <form action>
      <p>
        <input type="checkbox" name="category" value="房产" />房产
      </p>
      <p>
        <input type="checkbox" name="category" value="旅游" />旅游
      </p>
    </form>
  </div>
</template>
<script>
import mockData from '../../mocks/mock1'
import axios from 'axios';
// console.log(mockData) 引入mockdata 以后其他的就不用管了。
export default {
  name: "nokeep",
  data() {
    return {};
  },
  beforeCreate() {
    console.log("component222222 invoked beforeCreate");
  },
  created() {
    console.log("component222222 invoked created");
    try{
      undefined.arry;
    }catch(e){
      console.error(e.message)
    }
    console.log("我会继续执行吗")
  
  },
  mounted() {
    console.log("component222222 invoked mounted");

    // 调用模拟的数据
    try{
       axios.post("https://www.test1.com").then((e)=>{console.log(e)})
    .catch((e)=>{
      console.log(e)
    })
    }catch(e){
      console.log(e)
    }
   
  },
  updated() {
    console.log("component222222 invoked updated");
  },
  destroyed() {
    console.log("component222222 invoked destroyed");
  },
  activated() {
    console.log("component222222 invoked activated");
  },
  deactivated() {
    console.log("component222222 invoked deactivated");
  }
};
</script>
