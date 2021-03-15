<template>
    <div>
        <recursionComponent></recursionComponent>
       <div>
           recursionComponent
       </div>
    </div>
</template>
<script>
    export default{
        name:"recursionComponent",
        props:{
            obj:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        mounted(){
            
        }
    }
</script>
<style>
    
</style>