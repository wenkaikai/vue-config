<template>
    <div>
        <table>
            <tr>
                <td @click='alert2($event,true)' data-title="标题一">标题一</td>
                <td @click='alert2($event,true)' data-title="标题二">标题二</td>
                <td @click='alert2($event,true)' data-title="标题三">标题三</td>
                <td @click='alert2($event,true)' data-title="标题四">标题四</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default{
    name:"templatein1",
    methods:{
        alert2(e,notFirst){// e  是事件源对象 notFirst 表示的是不是第二次
            let title = e.currentTarget.getAttribute("data-title");
            this.alert(title,notFirst);
        }
    }
}
</script>