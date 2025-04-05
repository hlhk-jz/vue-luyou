<template>
    <div>
        <h1>我是子组件:{{ msg }}</h1>
        <button @click="onClickTs">按钮</button>
    </div>
</template>

<script setup>
   import { defineProps,defineEmits } from "vue"
   defineProps({
       msg: String
   })
   const emit = defineEmits(['showClick']);
   const  onClickTs = () =>{
       emit("showClick","我是子组件内容")
   }
</script>