<template>
    <div v-bind="$attrs" infos="我是children1">
        <children2></children2>
    </div>
</template>
<script>
    import children2 from "./children2.vue"
    export default{
        components:{
            children2
        },
   
        mounted(){
          
        }
    }
</script>
<style>
    
</style>   