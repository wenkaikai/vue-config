<template>
    <div class="helper">
        <span class="left">{{unFinishedTodoLength}} items left</span>
        <span class="tabs">
            <span 
                v-for='state in states'
                :key='state'
                :class="[state,filter === state ? 'actived' : '']"
                @click = "toggleFilter(state)"
            >
                {{state}}
            </span>
        </span>
        <span class="clear" @click="clearAllCompleted">clear completed</span>
    </div>
</template>
<script>
    export default{
        props:{
            filter:{
                type:String,
                require:true
            },
            todos:{
                type:Array,
                require:true
            }
        },
        data(){
            return {
                states:['all','active','completed']
            }
        },
        methods:{
            toggleFilter(state){
               this.$emit("toggle",state)
            },
            clearAllCompleted(){
                this.$emit("clearAll")
            }
        },
        computed:{
            unFinishedTodoLength(){
                /*
                    箭头函数如果不写函数体就相当于有返回值了
                */
                return this.todos.filter(todo => !todo.completed).length
                
            }
        }
    }
</script>
<style lang="stylus" scoped>
        .helper{
          font-weight 100
          display flex
          justify-content space-between
          padding 5px 0
          line-height 30px
          background-color #fff
          font-size 14px
          font-smoothing: antialiased
        }
        .left, .clear, .tabs{
          padding 0 10px
          box-sizing border-box
        }
        .left, .clear{
          width 150px
        }
        .left{
          text-align left
        }
        .clear{
          text-align right
          cursor pointer
        }
        .tabs{
          width 200px
          display flex
          justify-content space-around
          * {
            display inline-block
            padding 0 10px
            cursor pointer
            border 1px solid rgba(175,47,47,0)
            &.actived{
              border-color rgba(175,47,47,0.4)
              border-radius 5px
            }
          }
        }
</style>