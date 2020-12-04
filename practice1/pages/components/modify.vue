<template>
    <div>
        {{obj.a}}
    </div>
</template>
<script>
    export default{
        props:{
            obj:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        mounted(){
            this.obj.a = 1241;
        }
    }
</script>
<style>
    
</style>