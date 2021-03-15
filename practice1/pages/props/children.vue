<template>
    <div>
        <children1 :obj="obj" type="124" calss="test">

        </children1>
        <recursionComponent></recursionComponent>
    </div>
</template>
<script>
    import children1 from "./children1.vue"
    import recursionComponent from "@/components/recursionComponent.vue"
    // 如何把obj 传个obj2 呢
    export default{
        components:{
            children1,
            recursionComponent
        },
        data(){
            return {
                obj:{
                    a:1231,
                    b:3451
                }
            }
        },
        provide(){
            return {
                obj:this.obj
            }
        }
    }
</script>
<style>

</style>