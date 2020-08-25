<template>
    <div>
        <div class="shade" :style="{opacity:notFirst?0:0.5}">
        </div>
        <div class="wrap">
            <div class="content">
                <div class="top">   
                       {{title?title:'提示'}}
                </div>
                <div class="center">
                    <second-component @getChild="getTitle"></second-component>
                </div>
                <div class="footer" @click="remove">关闭</div>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
    .shade{
        position:fixed;
        width:100%;
        height:100%;
        background:#000;
        opacity:0.5;
        top:0;
        left:0;
    }
    .wrap{
        position:fixed;
        width:100%;
        height:100%;
        top:0;
        left:0;
        text-align:center;
       
    }
    .content{
        background:#fff;
        margin:auto;
        z-index:0;
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        width:50%;
        height:30%;
    } 
    .content div{
        margin:20px;
    }
  
</style>
<script>
    import Vue from 'vue'
    export default{
        name:"templatein",
        data(){
            return {
               
            }
        },
        props:{
           title:{
               require:true
           },
           notFirst:{
               type:Boolean,
               default:false,
               require:true
           }
        },
        methods:{
            remove(){
                document.body.removeChild(this.$el);
            },
            getTitle(e){
                console.log(e)
                console.log(this.$options.name)
            }
        },
        mounted(){
           
        }
    }
</script>


