<template>
    <div>
        <p @click='emit'>{{msg}}</p>
        <p @click='emitOther'>{{msg2}}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'demo',
    data () {
        return {
           msg : '点击后派发事件',
           msg2 : '点击后派发事件2',
        }
    },
    created () {
  
        this.$on(['wash_Goods','drive_Car'],(arg)=> {
            console.log('真多事')
        })
        this.$on('wash_Goods',(arg)=> {
            console.log(arg)
        })
        this.$on('drive_Car',(...arg)=> {
            console.log(arg)
            let [BMW,Ferrari] = arg
            console.log(BMW,Ferrari)
        })
    },
    methods : {
        emit () {
           this.$emit('wash_Goods','fish')
        },
        emitOther () {
           this.$emit('drive_Car',['BMW','Ferrari'])
        }
    }
  }
  </script>