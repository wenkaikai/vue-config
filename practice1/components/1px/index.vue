<template>
    <div class="wrap">
         <div class="div div1">div1</div>
         <div class="div div2">div2</div>
         <div class="div div3">div3</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
    .wrap{
        width:100%;
        display:flex;
    }
    .div{
        width:200px;
        height:200px;
        border:1px solid #000;
        margin-bottom:20px;
        margin-left:2px;
    }
    .div2{
        border:0.5px solid #000;
    }
    .div3{
        /*
        source slice width outset repeat|initial|inherit;
        */
        /* border-image: linear-gradient(to bottom,#000,#fff); */
        /* background-image: linear-gradient(to bottom,#000,#fff); */

      
        border:none;
    }
    .div3:after{
          /*  测试发现用 linear-gradient 这个方法有的时候浏览器不会显示 */
        /* content:'';
        display: block;
        width:100%;
        height:1px;
        background-image: linear-gradient(0deg,#000 50%,transparent 0); */
    }
    .div3:after{
        content:'';
        display: block;
        width:100%;
        height:1px;
       background:#000;
        transform:scaleY(0.5);
    }
</style>
