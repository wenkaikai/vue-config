<template>
    <div>
        <ChildModify :obj="obj">

        </ChildModify>
        <div>{{obj.a}}</div>
    </div>
</template>
<script>
    import ChildModify from "@/components/modify.vue"
    export default{
        components:{
            ChildModify
        },
        data(){
            return {
                obj:{
                    a:123,
                    b:345
                }
            }
        },
        mounted() {
           
        },
        methods: {
           
        },
    }
</script>
<style>

</style>