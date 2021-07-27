<template>
  <b-carousel>
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section :class="`hero is-medium is-${carousel.color}`">
        <div class="hero-body has-text-centered">
          <h1 class="title">
            {{ carousel.text }}
          </h1>
        </div>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script lang='ts'>
import { defineComponent, ref } from '@nuxtjs/composition-api'

interface CarouselType {
  text: string;
  color: string;
}

export default defineComponent({
  name: 'Carousel',
  setup () {
    const carousels = ref<CarouselType[]>([
      { text: 'Slide 1', color: 'primary' },
      { text: 'Slide 2', color: 'info' },
      { text: 'Slide 3', color: 'success' },
      { text: 'Slide 4', color: 'warning' },
      { text: 'Slide 5', color: 'danger' }
    ])

    return {
      carousels
    }
  }
})
</script>
