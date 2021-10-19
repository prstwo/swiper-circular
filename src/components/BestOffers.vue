<template>
  <main class="w-11/12  m-auto my-8">
    <div class=" best-deals-carts">
      <div class="swiper gallery-top">
        <div class="swiper-wrapper">
          <template v-for="(offer, index) in offers" :key="index">
              <offer-big :index="index" :offer="offer"/>
          </template>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next swiper-button-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div>
      </div>
      <div class="swiper gallery-thumb-group">
        <div class="swiper-wrapper grid-flow-row">
          <template v-for="(offer, index) in offers" :key="index">
            <offer-thumb :index="index" :offer="offer"/>
          </template>

        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import data from '../json/data.json';
import OfferThumb from "./OfferThumb";
import OfferBig from "./OfferBig";
let offers =   [
  {
    "title" :"ThinkPad X1 Carbon Gen 9 ",
    "href" : "",
    "src" : require('@/assets/images/home-gallery1.png'),
    "percent" : "10",
    "oldPrice" : 6587890,
    "newPrice" : 6580000,
    "lists" : [
      {
        "title" : "Graphics "
        , "details" :
            "Integrated AMD Radeon™ Graphic"
      },
      {
        "title" : "Memory" ,
        "details" : "4 GB DDR4 2400MHz"
      },
      {
        "title" : "WLAN:" ,
        "details" :"802.11AC (2 x 2) & Bluetooth® 5.0"
      }
    ],
    "countdown" : true
    , "countdownRemain": "2022-04-13 23:59:59"
    , "sell" : "445"
    , "inStock" : "inStock"
    , "numbers" : "100"
    , "sold" : "90"
    , "sold-percent" : "90"

  }
  ,{
    "title" :"Legion 5 Pro Gen 6 Gaming Laptop\n ",
    "href" : "",
    "src" : require('@/assets/images/home-gallery2.png'),
    "percent" : "10",
    "oldPrice" : 6587890,
    "newPrice" : 6580000,
    "lists" : [
      {
        "title" : "Graphics "
        , "details" :
            "Integrated AMD Radeon™ Graphic"
      },
      {
        "title" : "Memory" ,
        "details" : "4 GB DDR4 2400MHz"
      },
      {
        "title" : "WLAN:" ,
        "details" :"802.11AC (2 x 2) & Bluetooth® 5.0"
      }
    ],
    "countdown" : true
    , "countdownRemain": "2022-04-13 23:59:59"
    , "sell" : "445"
    , "inStock" : "inStock"
    , "numbers" : "100"
    , "sold" : "90"
    , "soldPercent" : "90"

  }
  ,{
    "title" :"ThinkPad X1 Carbon Gen 9 Intel",
    "href" : "",
    "src" : require('@/assets/images/home-gallery8.jpg'),
    "percent" : "10",
    "oldPrice" : 6587890,
    "newPrice" : 6580000,
    "lists" : [
      {
        "title" : "Graphics "
        , "details" :
            "Integrated AMD Radeon™ Graphic"
      },
      {
        "title" : "Memory" ,
        "details" : "4 GB DDR4 2400MHz"
      },
      {
        "title" : "WLAN:" ,
        "details" :"802.11AC (2 x 2) & Bluetooth® 5.0"
      }
    ],
    "countdown" : true
    , "countdownRemain": "2022-04-13 23:59:59"
    , "sell" : "445"
    , "inStock" : "inStock"
    , "numbers" : "100"
    , "sold" : "90"
    , "soldPercent" : "90"

  }
  ,{
    "title" :"ThinkPad X1 Carbon Gen 9 Intel",
    "href" : "",
    "src" : require('@/assets/images/home-gallery6.png'),
    "percent" : "10",
    "oldPrice" : 6587890,
    "newPrice" : 6580000,
    "lists" : [
      {
        "title" : "Graphics "
        , "details" :
            "Integrated AMD Radeon™ Graphic"
      },
      {
        "title" : "Memory" ,
        "details" : "4 GB DDR4 2400MHz"
      },
      {
        "title" : "WLAN:" ,
        "details" :"802.11AC (2 x 2) & Bluetooth® 5.0"
      }
    ],
    "countdown" : true
    , "countdownRemain": "2022-04-13 23:59:59"
    , "sell" : "445"
    , "inStock" : "inStock"
    , "numbers" : "100"
    , "sold" : "90"
    , "soldPercent" : "90"

  }
  ,{
    "title" :"ThinkPad X1 Carbon Gen 9 Intel",
    "href" : "",
    "src" : require('@/assets/images/home-gallery7.png'),
    "percent" : "10",
    "oldPrice" : 6587890,
    "newPrice" : 6580000,
    "lists" : [
      {
        "title" : "Graphics "
        , "details" :
            "Integrated AMD Radeon™ Graphic"
      },
      {
        "title" : "Memory" ,
        "details" : "4 GB DDR4 2400MHz"
      },
      {
        "title" : "WLAN:" ,
        "details" :"802.11AC (2 x 2) & Bluetooth® 5.0"
      }
    ],
    "countdown" : true
    , "countdownRemain": "2022-04-13 23:59:59"
    , "sell" : "445"
    , "inStock" : "inStock"
    , "numbers" : "100"
    , "sold" : "90"
    , "soldPercent" : "90"

  }

];
export default {
  name: 'BestOffers',
  components: {OfferBig, OfferThumb},
  props: {
    msg: String
  },
  data(){
    return {
      offers: offers

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
