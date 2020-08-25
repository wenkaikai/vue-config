<template>
  <div class="search-list">
    <div>
      <textarea ref="textarea" v-model="keywords" :maxlength="keywordsMax" @change="searchChange"  @keyup="monitorHeight"></textarea>
      <span class="clear" @click="clearKeywords">x</span>
    </div>
  </div>
</template>

<script>
//   import { debounce, autoTextarea } from '@/util.js';

let rootFontSize = parseFloat(document.documentElement.style.fontSize);

export default {
  data() {
    return {
      keywordsMax: 128,
      keywords: "sdfsdfsdfsd",
      list: []
    };
  },
  mounted() {
    // this.$nextTick(() => {
    //   let textarea = this.$refs.textarea;
    //   textarea.focus();
    //   let prevHeight = 65;
    //   textarea && autoTextarea(textarea, 5, 0, (height) => {
    //     height += 20;
    //     if (height !== prevHeight) {
    //       prevHeight = height;
    //       let rem = height / rootFontSize;
    //       this.$refs.list.style.height = `calc(100% - ${rem}rem)`;
    //     }
    //   });
    // })
  },
  methods: {
    clearKeywords() {
      this.keywords = "";
      this.list = [];
      let textarea = this.$refs.textarea;
      let height = 40;
      let rem = height / rootFontSize;
      textarea.style.height = `${rem}rem`;
      rem = (height + 20) / rootFontSize;
      this.$refs.list.style.height = `calc(100% - ${rem}rem)`;
      textarea.focus();
    },
    searchChange() {},
    monitorHeight($event) {

        console.log($event.target.scrollHeight)
        console.log($event.target.offsetHeight)
        console.log($event.target.clientHeight)
      $event.target.style.height =
        $event.target.scrollHeight +
        ($event.target.offsetHeight - $event.target.clientHeight) +
        "px";
    }
  }
};
</script>