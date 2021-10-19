<template>
  <div class=" swiper-slide w-full  site-radius h-full  relative " :data-id="index">
    <div
        class=" flex flex-col flex-nowrap justify-start site-radius bg-white h-full w-full p-4">
      <div class="flex flex-col-reverse sm:flex-row sm:items-stretch flex-nowrap h-full w-full">

        <div class="w-full sm:w-3/5  h-full  flex flex-col content-center items-center relative text-center">
          <gallery-content :offer="offer"/>
        </div>
        <div class="w-full  sm:w-2/5 pl-1 h-full   relative flex flex-col justify-center"
            style="-webkit-align-self: center; align-self: center">
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
  name: "OfferThumb"
  ,
  components: {GalleryContent, CartPic},
  props: ['index', 'offer']
}
</script>

<style scoped>

</style>