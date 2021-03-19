<template>
  <div>
    <ul>
      <li
        v-for="i in 4"
        :key="i"
        style="
          width: 100px;
          height: 40px;
          background: red;
          border: 1px solid blue;
        "
        @click="getClick"
      ></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    vm: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  mounted() {
    this.vm.$on("getClick", () => {
      console.log("getClick");
    });
  },    
  methods: {
    getClick() {
      this.vm.$emit("getClick");
      this.$emit("getUrl","fsfsd")
    },
  },
};
</script>
<style>
</style>