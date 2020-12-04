<template>
    <div v-bind="$attrs" infos="我是children2">
      {{obj}}
    </div>
</template>
<script>
    
    export default{
        components:{
          
        },
        props:{
            
        },
        inject:{
            obj:{
                from:"obj",// 如果from 不等于 obj 也是获取不到的
                default:()=> {
                    return {
                        a:123,
                        b:345
                    }
                }
            }
        },
        mounted(){
            
        }
    }
</script>
<style>
    
</style>