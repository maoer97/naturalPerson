<template>
  <div id="app">
    <transition name="fade">

    </transition>
    <router-view/>
  </div>
</template>

<script>


  export default {
    name: 'App',
    mounted() {

    }
  }
</script>

<style lang="less">
#app {
  padding: 0;
  margin: 0;
  // width: 1920px;
  // height: 1080px;
  overflow: auto;
  /* bottom: 0; */
  /* right: 0; */
}
html::-webkit-scrollbar { width: 0 !important }
      html { -ms-overflow-style: none; }
      html { overflow: -moz-scrollbars-none; }
/* .fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 0.5s;
} */
</style>
