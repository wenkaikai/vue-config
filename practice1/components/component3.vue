<template>
  <div>
    <form action>
      <p>
        <input type="checkbox" name="category" value="财经" />财经
      </p>
      <p>
        <input type="checkbox" name="category" value="汽车" />汽车
      </p>
    </form>
  </div>
</template>
<script>
export default {
  name: "nokeep1",
  data() {
    return {};
  },
  created() {
    console.log("component3 invoked created");
  },
  mounted() {
    console.log("component3 invoked mounted");
  },
  updated() {
    console.log("component3 invoked updated");
  },
   destroyed() {
    console.log("component3 invoked destroyed");
  },
 
};
</script>
