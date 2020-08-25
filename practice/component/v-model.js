import Vue from 'vue'
const component = { // 这是子组件
    model: {
        prop: 'value1',
        event: 'click1'
    },
    props: ['value1'],
    template: `
        <div>
            <input type="text" @input="handleInput" :value="value1">
        </div>
    `
    // <input type="text" @input="handleInput" :value="value">
    ,
    methods: {
        handleInput(e) {
            this.$emit("click1", e.target.value);// 这样也行
            // this.$emit("input",e.target.value);
        }
    }

}
new Vue({
    components: {
        CompOne: component
    },
    el: "#root",
    data() {
        return {
            value: 123
        }
    },
    // 默认的情况下v-model 会把value用作prop 并把input用作event 
    template: `
        <div>
        <comp-one v-model="value"></comp-one>
        <p>{{value}}</p>
        </div>
    `
    // <comp-one :value="value" @input="value = arguments[0]"></comp-one>
})