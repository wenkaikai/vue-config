<template>
  <div class="app">
    <div class="left">
      <div v-for="item,index in routes" v-bind:key="index">
        <div class="title" @click="toPage(item.name)">{{index+1}} . {{item.meta.chName}}</div>
        <ul>
          <li v-for="item1,index1 in item.children" :key="index1" @click="toChildrenPage(item.name,item1.name)">
            {{item1.meta.chName}}
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import routes from './router/routes';
export default {
  data() {
    return {
      obj: {},
      routes:routes,// 路由
    };
  },

  computed: {},
  created() {},
  watch: {
    $route() {},
  },
  mounted() {},
  methods: {
    toPage(name){
      this.$router.push({ path:`/${name}` })
    },
    toChildrenPage(parentName,name){
      this.$router.push({ path: `/${parentName}/${name}` })
    }
  },
};
</script>

<style lang="stylus" scoped>
.app {
  display: flex;
  height:100%;
  padding:0;
  box-sizing:border-box;
  .left {
    width: 30%;
    height:100%;
    background:#595c63;
    color:#fff;
    .title{
      padding:1rem;
      border-bottom:1px solid #fff;
      font-size:1.5rem;
    }
    ul{
      border-bottom:1px solid #fff; 
    }
    li{
       padding:1rem;
    }
  }
  .right {
    // flex-grow: 1;
    height:100%;
    
  }
}
</style>