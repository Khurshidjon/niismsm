<template>
    <div class="" id="carousel" style="max-width: 133.5em; max-height: 10em;" >
        <vue-flux
            :options="vfOptions"
            :images="vfImages"
            :transitions="vfTransitions"
            :clientHeight="clientHeight"
            :captions="vfCaptions"
            ref="slider">
            <template v-slot:preloader>
                <flux-preloader />
            </template>
            <template v-slot:controls>
                <flux-controls />
            </template>
            <template v-slot:pagination>
                <flux-pagination />
            </template>
            <template v-slot:caption>
                <flux-caption />
            </template>
        </vue-flux>
    </div>
</template>

<script>
import { VueFlux, FluxCaption, FluxControls, FluxIndex, FluxPagination, FluxPreloader, } from 'vue-flux';

export default {
   name: 'carousel',
   components: {
      VueFlux,
      FluxCaption,
      FluxControls,
      FluxIndex,
      FluxPagination,
      FluxPreloader,
   },

   data() {
       return {
            vfOptions: {
                autoplay: true
            },
            vfImages: [ 
                '../../frontend/images/bg_one.jpg', 
                '../../frontend/images/bg_two.jpg', 
                // '../../frontend/images/vue3.png',  
                // '../../frontend/images/555.jpg',  
                // '../../frontend/images/makka.jpg',  
                ],
            vfTransitions: [ 
                'swipe', 
                'cube', 
                'book', 
                'wave',
                'slide',
            ],
            vfCaptions: [
                'Укрепление международных связей с Республикой Молдова',
                'Укрепление международных связей с Республикой Молдова',
                'Укрепление международных связей с Республикой Молдова',
                'Укрепление международных связей с Республикой Молдова',
                'Caption for image 3',
            ],
            clientHeight: ''
        }
    },
}
</script>

<style scoped>
    .vue-flux{ 
        /* top: -44px; */
        width: 100%;
        height: 40em !important;
    }
    .flux-caption{
        bottom: 0;
        top: 90%;
        font-size: 20px;
        text-align: left;
    }
</style>