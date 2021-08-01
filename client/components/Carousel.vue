<template>
  <b-carousel>
    <b-carousel-item v-for="(carousel, index) in carousels" :key="'carousel' + index">
      <section :class="`hero is-medium is-${carousel.color}`">
        <img
          :src="carousel.img"
          :alt="carousel.title"
          height="28"
        >
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script lang='ts'>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import SlidesJson from '../static/assets/data/slides.json'

interface CarouselType {
  title: string;
  img: string;
}

export default defineComponent({
  name: 'Carousel',
  setup () {
    const carousels = ref<CarouselType[]>(SlidesJson)
    return {
      carousels
    }
  }
})
</script>
