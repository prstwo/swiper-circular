import { createApp } from 'vue';
import App from './App.vue';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/swiper-bundle';
// import styles bundle
import 'swiper/swiper-bundle.css';
import './index.css'
/*create app*/
createApp(App).mount('#app');
/*swiper commands*/
var galleryThumb = new Swiper('.gallery-thumb-group', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    direction:"horizontal"
});
var galleryTop = new Swiper('.gallery-top', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumb
    },
    direction:"horizontal"
    ,loop:true
    ,autoplay:  {
        delay: 3000,
        disableOnInteraction:false,
    },
    // onTouchStart: function(galleryTop) {
    //         document.querySelectorAll('.gallery-thumb-group .swiper-slide-thumb-active ').forEach(function(slide, index){
    //             if (index ==this.galleryTop.activeIndex){
    //                 slide.setAttribute('aria-label', '5 / 5');
    //                 console.log('im here')
    //
    //             }
    //         })
    //     }

    // beforeSlideChangeStart: $('.swiper-slide').eq(3).insertBefore( $('.swiper-wrapper').eq(1) )

});
function toggleDeals(){
    if(document.documentElement.clientWidth >= 1024 || window.innerWidth >= 1024){
        if (document.querySelector('.gallery-thumb-group .swiper-slide-thumb-active[aria-label="5 / 5"]')){
            document.querySelector('.gallery-thumb-group .swiper-slide-thumb-active[aria-label="5 / 5"]').previousElementSibling.previousElementSibling.previousElementSibling.classList.add('be-fix-grid');
        }
        else {
            document.querySelector('.gallery-thumb-group .swiper-slide[aria-label="5 / 5"]').previousElementSibling.previousElementSibling.previousElementSibling.classList.remove('be-fix-grid');
        }
    }
    else{
        document.querySelector('.gallery-thumb-group .swiper-slide[aria-label="2 / 5"]').classList.remove('be-fix-grid');

        if (document.querySelector('.gallery-thumb-group .swiper-slide-thumb-active[aria-label="5 / 5"]')){
            document.querySelector('.gallery-thumb-group .swiper-slide-thumb-active[aria-label="5 / 5"]').previousElementSibling.previousElementSibling.classList.add('be-fix-grid-btm');
            document.querySelector('.gallery-thumb-group .swiper-slide[aria-label="4 / 5"]').previousElementSibling.classList.remove('be-fix-grid-top');
            document.querySelector('.gallery-thumb-group .swiper-slide[aria-label="3 / 5"]').previousElementSibling.classList.remove('be-fix-grid-top');


        }
        else if(document.querySelector('.gallery-thumb-group .swiper-slide-thumb-active[aria-label="4 / 5"]')) {
            document.querySelector('.gallery-thumb-group .swiper-slide-thumb-active[aria-label="4 / 5"]').previousElementSibling.classList.add('be-fix-grid-top');
            document.querySelector('.gallery-thumb-group .swiper-slide[aria-label="5 / 5"]').previousElementSibling.previousElementSibling.classList.remove('be-fix-grid-btm');
            document.querySelector('.gallery-thumb-group .swiper-slide[aria-label="3 / 5"]').previousElementSibling.classList.remove('be-fix-grid-top');


        }
        else if(document.querySelector('.gallery-thumb-group .swiper-slide-thumb-active[aria-label="3 / 5"]')) {
            console.log('im here-no');
            document.querySelector('.gallery-thumb-group .swiper-slide-thumb-active[aria-label="3 / 5"]').previousElementSibling.classList.add('be-fix-grid-top');
            document.querySelector('.gallery-thumb-group .swiper-slide[aria-label="4 / 5"]').previousElementSibling.classList.remove('be-fix-grid-top');
            document.querySelector('.gallery-thumb-group .swiper-slide[aria-label="5 / 5"]').previousElementSibling.previousElementSibling.classList.remove('be-fix-grid-btm');

        }
        else {
            document.querySelector('.gallery-thumb-group .swiper-slide[aria-label="3 / 5"]').previousElementSibling.classList.remove('be-fix-grid-top');
            document.querySelector('.gallery-thumb-group .swiper-slide[aria-label="4 / 5"]').previousElementSibling.classList.remove('be-fix-grid-top');
            document.querySelector('.gallery-thumb-group .swiper-slide[aria-label="5 / 5"]').previousElementSibling.previousElementSibling.classList.remove('be-fix-grid-btm');
        }
    }
}
function gridSet(){
    toggleDeals();
    window.onresize = toggleDeals();
}
galleryTop.on('slideChange', function () {
    gridSet();
});
