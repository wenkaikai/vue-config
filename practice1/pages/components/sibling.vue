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
import center from '../../js/center'
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
    center.$on("getClick", () => {
      console.log("getClick");
    });
  },
  methods: {
    getClick() {
      center.$emit("getClick");
      console.log(this.vm);
    },
  },
};
</script>
<style>
</style>