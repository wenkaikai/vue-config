<template>
    <div>
        <sibling v-for="item in 2" :key="item" style="border:2px solid #ccc" :vm="vm" @getUrl="getUrl"></sibling> 
    </div>
</template>
<script>
    import sibling from "@/components/sibling.vue"
    export default{
        components:{
            sibling
        },
        data(){
            return {
                vm:this,
                obj:{
                    a:123,
                    b:345
                }
            }
        },    
        mounted() {
    
        },
        methods: {
            getUrl(val){
                console.warn(val);
            }
        },
    }
</script>
<style>

</style>