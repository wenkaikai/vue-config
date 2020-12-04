<template>
    <div>
       <div style="border-bottom:1px solid #ccc">
           <p>1,子组件可以直接改变父组件的传过来的值</p>
            <pre>2,比如同一个值如何传个孙子组件
                provide(){
                    return {
                        obj:this.obj
                    }
                }

                inject:{
                    obj:{
                        from:"obj",
                        default:()=> {
                            return {
                                a:123,
                                b:345
                            }
                        }
                    }
                }


            </pre>
       </div>
       <div>
        <router-view></router-view>
    </div>
    </div>
</template>
<script>
    export default{

    }
</script>
<style>

</style>