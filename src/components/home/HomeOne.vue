<template>
    <h1>我是子组件 <b>{{msg}}</b> </h1>

    <button @click="clickTs">按钮</button>
</template>

<script>
    export default {
        name: "HomeOne",
        data(){
            return{
                //不能和props等一些属性中的成员名称重复
               // msg: "hellow"
            }
        },
     /*   props:{
            msg:{
                type: Number,
                required: true
            }
        }*/
        props:{
            msg: String
        },
        methods:{
            clickTs(){
                this.$emit("clickTs",this.msg)
            }
        }
    }
</script>