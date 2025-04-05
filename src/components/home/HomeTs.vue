<template>
  <div>我是首页</div>
  <HomeOne @clickTs="clickT" :msg="msgData"/>
</template>
<script>
  import HomeOne from "@/components/home/HomeOne.vue"

  export default {
    name: 'HomeTs',
    data(){
      return{
        msgData: "父组件内容"
      }
    },
    methods:{
      clickT(msg){
        console.log("==========方法调用成功！！"+msg)
      }
    },
    components: {
      HomeOne
    }
  }
</script>