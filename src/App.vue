<link rel="stylesheet" href="../src/assets/general.css">

<template>
  <BestOffers/>
</template>
<script>
import BestOffers from './components/BestOffers.vue'

export default {
  name: 'App',
  components: {
    BestOffers
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
