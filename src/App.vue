<template>
  <div id="app">
    <h1>Music Library</h1>
    <MusicIndex />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import MusicIndex from './components/MusicIndex.vue'

export default {
  name: 'App',
  components: {
    MusicIndex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
