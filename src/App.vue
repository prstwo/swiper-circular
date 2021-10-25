<template>
  <BestOffers/>
  <Footer/>
</template>
<script>
import BestOffers from './components/BestOffers.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    BestOffers ,Footer
  }
}
</script>
<style>
  @import 'assets/css/general.css';
</style>
