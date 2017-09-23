<template>
  <div id="app">
    <router-view></router-view>

    <div v-show="false">
      <img src="/static/back-black.png" />
      <img src="/static/back-blue.png" />
      <img src="/static/back-gray.png" />
      <img src="/static/back-white.png" />
      <img src="/static/back-yellow.png" />

      <img src="/static/circle-black.png" />
      <img src="/static/circle-blue.png" />
      <img src="/static/circle-gray.png" />
      <img src="/static/circle-green.png" />
      <img src="/static/circle-red.png" />

      <img src="/static/header-vue-left-down.png" />
      <img src="/static/header-vue-left-up.png" />
      <img src="/static/header-vue-right-down.png" />
      <img src="/static/header-vue-right-up.png" />

      <img src="/static/image-medellin.png" />
      <img src="/static/image-vue.png" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style lang="scss" scoped>
  @import './scss/main';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
