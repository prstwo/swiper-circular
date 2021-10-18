<template>
  <script src="assets/swiper.js"></script>
  <script src="assets/general.js"></script>

  HI
  <div class="">
    <div class=" best-deals-carts">
      <div class="swiper-container gallery-top">
        <div class="swiper-wrapper">
<!--          @foreach($offers as $offer)-->
          <template v-for="(offer, index) in offers" :key="index">
          <div class="swiper-slide amazing-slide w-full px-4  site-radius h-full  relative "
               :data-id="index">
            <div
                class=" flex flex-col flex-nowrap justify-start site-radius h-full w-full p-4">
              <div class="flex flex-col flex-nowrap h-full w-full">

                <div
                    class="w-full   flex flex-col content-center items-center relative text-center">
                  <h2>
                    <a href="" class="font-bold text-xl one-line" v-text="offer.title">
                    </a>
                  </h2>
                  <div class="gallery-main-price mt-2 mb-4 font-bold text-lg">
                                                <span class="old-price">
                                                    <del v-text="offer.oldPrice">
                                                    </del>
                                                    تومان
                                                </span>
                                              <span class="new-price">
                                                    <span v-text="offer.newPrice">
                                                    </span>
                                                    تومان
                                                </span>
                  </div>
                  <div class="gallery-main-list text-right mb-4 text-lg font-medium">
                    <ul>
                      <template v-for="(list, index) in offer.lists" :key="index">
<!--                      @foreach($offer['lists'] as $list)-->
                            <li>
                              <span v-text="list.title">
                              </span>
                              <span v-text="list.details">
                              </span>
                            </li>
<!--                      @endforeach-->
                      </template>
                    </ul>
                  </div>
                  <div class="gallery-main-progress w-full  font-bold">
                    <div class="w-full flex flex-row justify-between">
                      <div>
                        <span class="">وضعیت
                                 :
                          </span>
                         <span v-text="offer.inStock">
                         </span>
                      </div>
                    </div>
                    <div class="w-full">
                      <progress class="w-full" :value="offer.sold"
                                :max="offer.numbers" v-text="offer.soldPercent + '%'">
                      </progress>
                    </div>
                  </div>
                </div>
                <div class="w-full    relative">

                  <div class="ribbon-discount absolute top-4 -left-2 sm:left-4">
                    <svg width="70" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink"
                         viewBox="0 0 175.92 174">
                      <g class="cls-1">
                        <g id="Layer_2" data-name="Layer 2">
                          <g id="OBJECTS">
                            <path class="cls-3"
                                  d="M148.38,109.14a53,53,0,0,1-1-7.61,31,31,0,0,1,.26-4.62c.24-2,1-2.49-1-3,1.15.19,1.36.62,1.63-.66a29.28,29.28,0,0,1,4.65-10.79c3.67-5.74,5.86-11.34,4.41-18.28-1.66-7.92-6.74-12.43-13.6-16.13a32.52,32.52,0,0,1-14.38-15.4c-2.57-6-3.7-12.09-9.33-16.16S107.12,10.76,100.39,13c-5.47,1.82-10.11,4.21-16,4.52a30.72,30.72,0,0,1-11.16-1.26c-2.64-.87-5.21-1.93-7.91-2.59a21.82,21.82,0,0,0-22.07,8.82C40.62,26.27,40,30.8,38.47,35a27.38,27.38,0,0,1-2.82,5.62c-.23.35-1.78,2.32-1.58,2.48l1,.8c-.24-.17-.91-.88-1.19-.87a31.29,31.29,0,0,1-3.67,4.21c-2.45,2.34-5.37,4-8.19,5.79a21.62,21.62,0,0,0-6.13,30.78,59.05,59.05,0,0,1,5,7.67,30.42,30.42,0,0,1,1.88,5.14c.36,1.33.51.89,1.68.61-1.18.31-1.5,0-1.17,1.35a31,31,0,0,1,.83,5.43c.22,4.06-.81,8-.81,12.08C23.2,123.65,28,131,34.47,134.61c5.64,3.18,11.83,2.1,17.9,3.35a32.69,32.69,0,0,1,15.86,8.49c4.52,4.35,8.57,8.4,15.12,9.21,7.84,1,14.48-1.72,19.77-7.44,4.6-5.06,9.13-9.1,15.71-11.46,7-2.49,14.64-1.11,20.89-5.69A22,22,0,0,0,148.38,109.14Z"></path>
                            <circle class="cls-4" cx="84.87" cy="80.93" r="56.59"
                                    transform="translate(-32.37 83.72) rotate(-45)"></circle>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span class="count">
                                                    <span class="text-xl font-bold" v-text="offer.percent">
                                                    </span>
                                                    <i class="fas fa-percent text-xs"></i>
                                                </span>
                  </div>
                  <div class="block ">
                    <img :src="offer.src" alt="" class="w-full h-auto">
                  </div>
                </div>
              </div>
            </div>
          </div>
<!--          @endforeach-->
          </template>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next swiper-button-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div>
      </div>
      <div class="swiper-container gallery-thumb-group">
        <div class="swiper-wrapper grid-flow-row">
<!--          @foreach($offers as $offer)-->
          <template v-for="(offer, index) in offers" :key="index">

          <div class=" swiper-slide w-full  site-radius h-full  relative " :data-id="index">
            <div
                class=" flex flex-col flex-nowrap justify-start site-radius bg-white h-full w-full p-4">
              <div
                  class="flex flex-col sm:flex-row-reverse sm:items-stretch flex-nowrap h-full w-full">

                <div
                    class="w-full sm:w-2/4  h-full  flex flex-col content-center items-center relative text-center">
                  <h2>
                    <a href="/product" class="font-bold text-xl one-line" v-text="offer.title">
                    </a>
                  </h2>
                  <div class="gallery-main-price mt-2 mb-4 font-bold text-lg">
                                                <span class="old-price">
                                                    <del v-text="offer.oldPrice">
                                                   </del>
                                                    تومان
                                                </span>
                    <span class="new-price">
                                                    <span v-text="offer.newPrice">
                                                    </span>
                                                    تومان
                                                </span>
                  </div>
                  <div class="gallery-main-list text-right mb-4 text-lg font-medium">
                    <ul>
<!--                      @foreach($offer['lists'] as $list)-->
                      <template v-for="(list, index) in offer" :key="index">
                          <li>
                                   <span v-text="list.title">
                                  </span>
                                <span v-text="list.details">
                                  </span>
                          </li>
<!--                      @endforeach-->
                      </template>
                    </ul>
                  </div>
                  <div class="gallery-main-progress w-full  font-bold">
                    <div class="w-full flex flex-row justify-between">
                      <div>
                          <span class="">وضعیت
                             :
                          </span >
                          <span v-text="offer.inStock">
                          </span>
                      </div>
                    </div>
                    <div class="w-full">
                      <progress class="w-full" :value="offer.sold"
                                :max="offer.numbers" v-text="offer.soldPercent + '%'">
                      </progress>
                    </div>
                  </div>
                </div>
                <div
                    class="w-full  sm:w-2/4 pl-1 h-full   relative flex flex-col justify-center"
                    style="-webkit-align-self: center; align-self: center">
                  <div class="ribbon-discount absolute top-4 -left-2 sm:left-4">
                    <svg width="70" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink"
                         viewBox="0 0 175.92 174">
                      <g class="cls-1">
                        <g id="Layer_2" data-name="Layer 2">
                          <g id="OBJECTS">
                            <path class="cls-3"
                                  d="M148.38,109.14a53,53,0,0,1-1-7.61,31,31,0,0,1,.26-4.62c.24-2,1-2.49-1-3,1.15.19,1.36.62,1.63-.66a29.28,29.28,0,0,1,4.65-10.79c3.67-5.74,5.86-11.34,4.41-18.28-1.66-7.92-6.74-12.43-13.6-16.13a32.52,32.52,0,0,1-14.38-15.4c-2.57-6-3.7-12.09-9.33-16.16S107.12,10.76,100.39,13c-5.47,1.82-10.11,4.21-16,4.52a30.72,30.72,0,0,1-11.16-1.26c-2.64-.87-5.21-1.93-7.91-2.59a21.82,21.82,0,0,0-22.07,8.82C40.62,26.27,40,30.8,38.47,35a27.38,27.38,0,0,1-2.82,5.62c-.23.35-1.78,2.32-1.58,2.48l1,.8c-.24-.17-.91-.88-1.19-.87a31.29,31.29,0,0,1-3.67,4.21c-2.45,2.34-5.37,4-8.19,5.79a21.62,21.62,0,0,0-6.13,30.78,59.05,59.05,0,0,1,5,7.67,30.42,30.42,0,0,1,1.88,5.14c.36,1.33.51.89,1.68.61-1.18.31-1.5,0-1.17,1.35a31,31,0,0,1,.83,5.43c.22,4.06-.81,8-.81,12.08C23.2,123.65,28,131,34.47,134.61c5.64,3.18,11.83,2.1,17.9,3.35a32.69,32.69,0,0,1,15.86,8.49c4.52,4.35,8.57,8.4,15.12,9.21,7.84,1,14.48-1.72,19.77-7.44,4.6-5.06,9.13-9.1,15.71-11.46,7-2.49,14.64-1.11,20.89-5.69A22,22,0,0,0,148.38,109.14Z"></path>
                            <circle class="cls-4" cx="84.87" cy="80.93" r="56.59"
                                    transform="translate(-32.37 83.72) rotate(-45)"></circle>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span class="count">
                                                    <span class="text-xl font-bold" v-text="offer.percent">
                                                    </span>
                                                    <i class="fas fa-percent text-xs"></i>
                                                </span>
                  </div>
                  <div class="block mb-4">
                    <img :src="offer.src" alt="" class="w-full h-auto">
                  </div>
                </div>
              </div>
            </div>
          </div>
<!--          @endforeach-->
          </template>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import data from '../json/data.json';
let offers =   [
  {
    "title" :" کامپیوتر همه کاره 21.5 اینچی اپل مدل iMac MMQA2 2017",
    "href" : "",
    "src" : require('@/assets/images/home-gallery4.png'),
    "percent" : "10",
    "oldPrice" : 6587890,
    "newPrice" : 6580000,
    "lists" : [
      {
        "title" : "پردازنده‌ی مرکزی"
        , "details" :
            "260 Gold"
      },
      {
        "title" : "قابلیت پخش صوتی" ,
        "details" : "دارد"
      },
      {
        "title" : "بازه‌ی اندازه صفحه نمایش:" ,
        "details" :" 6.0 اینچ و بزرگتر"
      }
    ],
    "countdown" : true
    , "countdownRemain": "2022-04-13 23:59:59"
    , "sell" : "445"
    , "inStock" : "موجود"
    , "numbers" : "100"
    , "sold" : "90"
    , "sold-percent" : "90"

  }
  ,{
    "title" :" کامپیوتر همه کاره 21.5 اینچی اپل مدل iMac MMQA2 2017",
    "href" : "",
    "src" : require('@/assets/images/home-gallery4.png'),
    "percent" : "10",
    "oldPrice" : 6587890,
    "newPrice" : 6580000,
    "lists" : [
      {
        "title" : "پردازنده‌ی مرکزی"
        , "details" :
            "260 Gold"
      },
      {
        "title" : "قابلیت پخش صوتی" ,
        "details" : "دارد"
      },
      {
        "title" : "بازه‌ی اندازه صفحه نمایش:" ,
        "details" :" 6.0 اینچ و بزرگتر"
      }
    ],
    "countdown" : true
    , "countdownRemain": "2022-04-13 23:59:59"
    , "sell" : "445"
    , "inStock" : "موجود"
    , "numbers" : "100"
    , "sold" : "90"
    , "soldPercent" : "90"

  }
  ,{
    "title" :" کامپیوتر همه کاره 21.5 اینچی اپل مدل iMac MMQA2 2017",
    "href" : "",
    "src" : require('@/assets/images/home-gallery4.png'),
    "percent" : "10",
    "oldPrice" : 6587890,
    "newPrice" : 6580000,
    "lists" : [
      {
        "title" : "پردازنده‌ی مرکزی"
        , "details" :
            "260 Gold"
      },
      {
        "title" : "قابلیت پخش صوتی" ,
        "details" : "دارد"
      },
      {
        "title" : "بازه‌ی اندازه صفحه نمایش:" ,
        "details" :" 6.0 اینچ و بزرگتر"
      }
    ],
    "countdown" : true
    , "countdownRemain": "2022-04-13 23:59:59"
    , "sell" : "445"
    , "inStock" : "موجود"
    , "numbers" : "100"
    , "sold" : "90"
    , "soldPercent" : "90"

  }
  ,{
    "title" :" کامپیوتر همه کاره 21.5 اینچی اپل مدل iMac MMQA2 2017",
    "href" : "",
    "src" : require('@/assets/images/home-gallery4.png'),
    "percent" : "10",
    "oldPrice" : 6587890,
    "newPrice" : 6580000,
    "lists" : [
      {
        "title" : "پردازنده‌ی مرکزی"
        , "details" :
            "260 Gold"
      },
      {
        "title" : "قابلیت پخش صوتی" ,
        "details" : "دارد"
      },
      {
        "title" : "بازه‌ی اندازه صفحه نمایش:" ,
        "details" :" 6.0 اینچ و بزرگتر"
      }
    ],
    "countdown" : true
    , "countdownRemain": "2022-04-13 23:59:59"
    , "sell" : "445"
    , "inStock" : "موجود"
    , "numbers" : "100"
    , "sold" : "90"
    , "soldPercent" : "90"

  }
  ,{
    "title" :" کامپیوتر همه کاره 21.5 اینچی اپل مدل iMac MMQA2 2017",
    "href" : "",
    "src" : require('@/assets/images/home-gallery4.png'),
    "percent" : "10",
    "oldPrice" : 6587890,
    "newPrice" : 6580000,
    "lists" : [
      {
        "title" : "پردازنده‌ی مرکزی"
        , "details" :
            "260 Gold"
      },
      {
        "title" : "قابلیت پخش صوتی" ,
        "details" : "دارد"
      },
      {
        "title" : "بازه‌ی اندازه صفحه نمایش:" ,
        "details" :" 6.0 اینچ و بزرگتر"
      }
    ],
    "countdown" : true
    , "countdownRemain": "2022-04-13 23:59:59"
    , "sell" : "445"
    , "inStock" : "موجود"
    , "numbers" : "100"
    , "sold" : "90"
    , "soldPercent" : "90"

  }

];
export default {
  name: 'BestOffers',
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
