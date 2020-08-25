<template>
  <div>
    <ul>
      <li>
        <router-link to="/keep">keep-alive</router-link>
      </li>
      <li>
        <router-link to="/noKeep">no-keep-alive</router-link>
      </li>
      <li>
        <router-link to="/noKeep1">no-keep-alive</router-link>
      </li>
      <li>{{_list}}</li>
      <li @click="dianji">点击</li>
    </ul>

    <!-- <keep-alive>
      <router-view name="keep"></router-view>
    </keep-alive>
    <router-view name="nokeep"></router-view>-->


    <keep-alive :include="['keep','nokeep']">
        <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      obj: {},
      test:1234,
    };
  },

  computed:{
    _list(){
      console.log("_list")
      return this.list();
    }
  },
  created(){
    console.log("created")
  },
  watch: {
    $route() {}
  },
  mounted() {
    //  console.log(this.$route);
    // console.log(process)
    // console.log(aa1)
    console.warn(this.$router)// router实列
    console.warn(this.$router.match)// 
    console.warn(this.$router.mode)
    console.warn(this.$router.app)

    /**
     *  router 原型方法上有14个方法
     * 
     * match
     * init 
     * beforeResolve
     * afterEach
     * onReady
     * onError
     * push
     * replace
     * go
     * back
     * forward
     * getMatchedComponents
     * resolve
     * addRoutes
     * 
     * 
     * 
     */
  },
  methods:{
    list(){
      console.log("list")
      return this.test+1
    },
    dianji(){
      this.test = this.test+1
      console.log(this.test)
    }
  }
};
</script>