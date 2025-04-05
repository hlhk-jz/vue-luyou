<template>
    <div>
        <h1>vue3</h1>
        <VuesOne :msg="msgStr" @showClick="clickTs"/>
        <b>子组件内容：{{msgTs}}</b>
    </div>
</template>

<script setup>
    //vue3不需要定义components选项然后挂载子组件
    import VuesOne from "@/components/vuesan/VuesOne.vue"
    import {ref } from "vue"
    const msgStr = ref("父组件内容");

    const msgTs = ref("");

    //接收子组件传递数据
    const clickTs = (msg) =>{
        msgTs.value = msg;
    }
</script>