<template>
  <div class="swiper-slide amazing-slide w-full px-4  site-radius h-full  relative "
       :data-id="index">
    <div class=" flex flex-col flex-nowrap justify-start site-radius h-full w-full p-4">
      <div class="flex flex-col flex-nowrap h-full w-full">
        <div class="w-full   flex flex-col content-center items-center relative text-center">
          <gallery-content :offer="offer"/>
        </div>
        <div class="w-full    relative">
          <cart-pic :offer="offer"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GalleryContent from "./GalleryContent";
import CartPic from "./CartPic";
export default {
  name: "OfferBig"
  ,
  components: {GalleryContent, CartPic},
  props: ['index', 'offer']
}
</script>

<style scoped>

</style>