<!-- App.vue -->
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/vuex">测试Vuex</router-link>
  </nav>
  <router-view></router-view> <!-- 这里将显示匹配的组件 -->
</template>