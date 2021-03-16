<template>
    <div>
        <sibling v-for="item in 3" :key="item" style="border:2px solid #ccc" :vm="vm"></sibling> 
    </div>
</template>
<script>
    import sibling from "@/components/sibling.vue"
    import center from '../../js/center'
    export default{
        components:{
            sibling
        },
        data(){
            return {
                vm:null,
                obj:{
                    a:123,
                    b:345
                }
            }
        },
        mounted() {
           this.vm = this;
        },
        methods: {
           
        },
    }
</script>
<style>

</style>