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

interface CarouselType {
  title: string;
  img: string;
}

export default defineComponent({
  name: 'Carousel',
  setup () {
    const carousels = ref<CarouselType[]>([
      { title: 'Slide 1', img: '/assets/img/screens/screen.1.jpg' },
      { title: 'Slide 2', img: '/assets/img/screens/screen.2.jpg' },
      { title: 'Slide 3', img: '/assets/img/screens/screen.3.jpg' }
    ])

    return {
      carousels
    }
  }
})
</script>
