<template>
  <h2>
    <a href="" class="font-bold text-xl one-line" v-text="offer.title">
    </a>
  </h2>
  <div class="gallery-main-price mt-2 mb-4 font-bold text-lg">
                                                <span class="old-price">
                                                    <del v-text="offer.oldPrice">
                                                    </del>
                                                    $
                                                </span>
    <span class="new-price">
                                                    <span v-text="offer.newPrice">
                                                    </span>
                                                    $
                                                </span>
  </div>
  <div class="gallery-main-list text-left mb-4 text-lg font-medium">
    <ul>
      <template v-for="(list, index) in offer.lists" :key="index">
        <li>
                              <span v-text="list.title">
                              </span>
          <span v-text="list.details">
                              </span>
        </li>
      </template>
    </ul>
  </div>
  <div class="gallery-main-progress w-full  font-bold">
    <div class="w-full flex flex-row justify-between">
      <div>
                        <span class="">Status:
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
</template>

<script>
export default {
  name: "GalleryContent"
  ,props: ['offer']
}
</script>

<style scoped>

</style>