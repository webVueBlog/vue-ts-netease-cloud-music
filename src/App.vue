<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  metaInfo() {
    return {
      title: '欢迎来到哪吒的音乐基地！'
    }
  }
})
</script>

<style lang="scss">

</style>
