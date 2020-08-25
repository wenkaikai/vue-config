<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要做什么"
      @keyup.enter="addTodo"
    />
    <item :todo="todo" v-for="todo in filteredTodos" :key="todo.id" @del="deleteTodo" class="test"></item>
    <!-- .enter 是修饰符号 -->
    <tabs :filter="filter" :todos="todos" @toggle="toggleFilter" @clearAll="clearAllCompleted"></tabs>
    <!-- <router-view></router-view> -->
  </section>
</template>
<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";
let id = 0;
export default {
  components: {
    Item,
    Tabs
  },
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    /*
                这是组件内部的钩子 他是在 beforeEach 和 beforeEnter 之后 触发
                也就是目前有三个钩子能阻止路由的跳转
                注意此时要注意的是 如果函数走了beforeRouteEnter 这个钩子就不会走下面Update的钩子
            */

    // console.log('beforeRouteEnter')
    next(vm => {
      /*
                    next 会接受一个回调,回调会接受一个参数。
                    这个参数就是组件的实例
                    
                */
      // console.log(vm.id)
    });
  },
  beforeRouteUpdate(to, from, next) {
    /*
                这个钩子什么时候触发呢
                就是在同一个不同的路径下有同一个组件的时候会触发
                <router-link to="/app/123">app123</router-link>
                <router-link to="/app/446">app345</router-link>
                当以上两个路径切换的时候就会触发beforeRouteUpdate
            */

    //console.log('beforeRouteUpdate')
    next();
  },
  beforeRouteLeave(to, from, next) {
    // ...
    console.log("beforeRouteLeave");
    if (window.confirm("你要离开")) {
      next();
    }
  },
  mounted() {
    // 此时的id 是从routes 路径里面直接传过来的
    // console.log(this.id)
  },
  data() {
    return {
      filter: "all",
      todos: []
    };
  },
  computed: {
    filteredTodos() {
      if (this.filter == "all") {
        return this.todos;
      }
      const completed = this.filter === "completed";
      return this.todos.filter(todo => completed === todo.completed);
    }
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = "";
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
    },
    toggleFilter(state) {
      this.filter = state;
    },
    clearAllCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  }
};
</script>
<style lang="stylus" scoped>
.real-app {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}

.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}

.test {
  /deep/ label {
    color: yellow;
  }
}
</style>
    
    <style lang="stylus"></style>
    
